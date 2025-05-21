using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Identity.Client;
using SpaceFinderAPI.Data;
using SpaceFinderAPI.DTO;
using SpaceFinderAPI.Models.Domain;
using SpaceFinderAPI.Repositories.Interface;

namespace SpaceFinderAPI.Controllers;

[Route("api/[controller]")]
[ApiController]
public class SpacesController : ControllerBase
{
      private readonly ISpaceRepository spaceRepository;
      private IMapper _mapper { get; }

      public SpacesController(ISpaceRepository spaceRepository, IMapper mapper)
      {
           this.spaceRepository = spaceRepository;
           _mapper = mapper;

        }

      [HttpPost]
      public async Task<IActionResult> CreateSpace(CreateSpaceRequestDto Request)
      {
            var space = _mapper.Map<Space>(Request);

            await spaceRepository.CreateSpaceAsync(space);

        return CreatedAtAction(nameof(GetSpaceById), new { id = space.Id }, new { id = space.Id });

      }

    [HttpGet]
    public async Task<IActionResult> GetAllSpace()
    {
        var spaces = await spaceRepository.GetAllSpacesAsync();
        return Ok(spaces);
    }

    [HttpGet]
    [Route("{id:Guid}")]
    public async Task<IActionResult> GetSpaceById([FromRoute] Guid id)
    {
        var space = await spaceRepository.GetSpaceByIdAsync(id);
        if (space == null)
        {
            return NotFound();
        }
        return Ok(space);
    }

    //[HttpDelete]
    //public async Task<IActionResult> DeleteAllSpace()
    //{


    //    await spaceRepository.DeleteAllSpacesAsync();
    //    return Ok("Spaces Deleted Successfully !");
    //}

    [HttpDelete]
    [Route("{id:Guid}")]
    public async Task<IActionResult> DeleteSpaceById([FromRoute] Guid id)
    {
        var space = await spaceRepository.DeleteSpaceByIdAsync(id);

        if (space == null)
        {
            return NotFound();
        }

        return Ok(space);
    }

    [HttpPut]
    [Route("{id:Guid}")]
    public async Task<IActionResult> UpdateSpaceById([FromRoute] Guid id, UpdateSpaceRequestDto dto)
    {
        if (dto == null)
        {
            return BadRequest("Invalid data.");
        }

        var existingSpace = await spaceRepository.GetSpaceByIdAsync(id);

        if (existingSpace == null)
        {
            return NotFound($"Space with ID {id} not found.");
        }

        // Map DTO to the existing entity
        _mapper.Map(dto, existingSpace);

        await spaceRepository.UpdateSpaceAsync(existingSpace);

        return Ok(existingSpace);
    }
}
