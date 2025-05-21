using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using SpaceFinderAPI.Data;
using SpaceFinderAPI.DTO;
using SpaceFinderAPI.Models.Domain;
using SpaceFinderAPI.Repositories.Implementation;
using SpaceFinderAPI.Repositories.Interface;

namespace SpaceFinderAPI.Controllers;


[Route("api/[controller]")]
[ApiController]
public class SpaceImagesController : ControllerBase
{
    private readonly IImageRepository imageRepository;
    private readonly ISpaceRepository spaceRepository;
    private readonly IMapper mapper;
    public SpaceImagesController(IImageRepository imageRepository, 
        ISpaceRepository spaceRepository, IMapper mapper) {
        this.imageRepository = imageRepository;
        this.spaceRepository = spaceRepository;
        this.mapper = mapper;
    }

    [HttpGet("get/{id}")]
    [HttpGet]
    public async Task<ActionResult<IEnumerable<SpaceImageDto>>> GetImages(Guid spaceId)
    {
        if (!await spaceRepository.SpaceExistsAsync(spaceId))
            return NotFound("Space not found");

        var images = await imageRepository.GetBySpaceIdAsync(spaceId);
        return Ok(mapper.Map<List<SpaceImageDto>>(images));
    }


    [HttpGet("getall")]
    public async Task<IActionResult> GetAllImages()
    {
        var images = await imageRepository.GetAll();
        
        var response = new List<SpaceImageDto>();
        foreach (var image in images)
        {
            response.Add(new SpaceImageDto
            {
                Id = image.Id,
                FileName = image.FileName,
                Title = image.Title,
                ImageUrl = image.ImageUrl,
                FileExtension = image.FileExtension,
                CreatedAt = image.CreatedAt
            });
        }

        return Ok(response);
    }

    [HttpPost("upload/{spaceId}")]
    public async Task<IActionResult> UploadImage(Guid spaceId, 
        [FromForm] ImageUploadDto request)
    {
        if (!await spaceRepository.SpaceExistsAsync(spaceId))
            return NotFound("Space not found");

        
        ValidateFileUpload(request.File);
        if (!ModelState.IsValid)
            return BadRequest(ModelState);


        var spaceImage = mapper.Map<SpaceImages>(request);
        spaceImage.SpaceId = spaceId;
        spaceImage.FileExtension = Path.GetExtension(request.File.FileName).ToLower();
        spaceImage.FileName = request.FileName ?? Path.GetFileNameWithoutExtension(request.File.FileName);

        try
        {
            var uploadedImage = await imageRepository.UploadImageAsync(request.File, spaceImage);
            return CreatedAtAction(
                nameof(GetImage),
                new { spaceId, imageId = uploadedImage.Id },
                mapper.Map<SpaceImageDto>(uploadedImage));
        }
        catch (Exception ex)
        {
            return StatusCode(500, $"Internal server error: {ex.Message}");
        }

    }

    [HttpGet("{imageId}")]
    public async Task<ActionResult<SpaceImageDto>> GetImage(Guid spaceId, Guid imageId)
    {
        var image = await imageRepository.GetByIdAsync(imageId);
        if (image == null || image.SpaceId != spaceId)
            return NotFound();

        return Ok(mapper.Map<SpaceImageDto>(image));
    }

    [HttpDelete("{imageId}")]
    public async Task<IActionResult> DeleteImage(Guid spaceId, Guid imageId)
    {
        var image = await imageRepository.GetByIdAsync(imageId);
        if (image == null || image.SpaceId != spaceId)
            return NotFound();

        var result = await imageRepository.DeleteAsync(imageId);
        if (!result) return BadRequest("Failed to delete image");

        return NoContent();
    }

    private void ValidateFileUpload(IFormFile file)
    {
        var allwedExtensions = new string [] { ".jpg", ".jpeg", ".png" };

        if (!allwedExtensions.Contains(Path.GetExtension(file.FileName).ToLower()))
        {
            ModelState.AddModelError("file", "File type is not allowed");
        }
        if (file.Length > 10 * 1024 * 1024)
        {
            ModelState.AddModelError("file", "File is too large");
        }
        
    }


}
