using Azure.Core;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http.Connections;
using Microsoft.EntityFrameworkCore;
using SpaceFinderAPI.Data;
using SpaceFinderAPI.Models.Domain;
using SpaceFinderAPI.Repositories.Interface;

namespace SpaceFinderAPI.Repositories.Implementation
{
    public class ImageRepository: IImageRepository
    {
        private readonly IWebHostEnvironment webHostEnvironment;
        private readonly IHttpContextAccessor httpContextAccessor;
        private readonly ApplicationDbContext dbContext;
        public ImageRepository(IWebHostEnvironment webHostEnvironment, IHttpContextAccessor httpContextAccessor,
            ApplicationDbContext dbContext) {

            this.webHostEnvironment = webHostEnvironment;
            this.httpContextAccessor = httpContextAccessor;
            this.dbContext = dbContext;

        }

        public async Task<IEnumerable<SpaceImages>> GetAll()
        {
            return await dbContext.SpaceImages.ToListAsync();
        }

        public async Task<SpaceImages> UploadImageAsync(IFormFile file, SpaceImages spcaeImage)
        {
            var imagesPath = Path.Combine(webHostEnvironment.ContentRootPath, "Images");
            if (!Directory.Exists(imagesPath))
            {
                Directory.CreateDirectory(imagesPath);
            }

            // Upload image to API folder
            var localPath = Path.Combine(imagesPath, $"{spcaeImage.FileName}{spcaeImage.FileExtension}");
            using var stream = new FileStream(localPath, FileMode.Create);
            await file.CopyToAsync(stream);

            // Save image to database
            var httpRequest = httpContextAccessor.HttpContext?.Request;
            if (httpRequest == null) throw new InvalidOperationException("HTTP context is not available");
            var urlPath = $"{httpRequest.Scheme}://{httpRequest.Host}{httpRequest.PathBase}/Images/{spcaeImage.FileName}{spcaeImage.FileExtension}";

            spcaeImage.ImageUrl = urlPath;

            await dbContext.SpaceImages.AddAsync(spcaeImage);
            await dbContext.SaveChangesAsync();
            return spcaeImage;

        }

        public async Task<SpaceImages?> GetByIdAsync(Guid id)
        {
            return await dbContext.SpaceImages.FindAsync(id);
        }

        public async Task<IEnumerable<SpaceImages>> GetBySpaceIdAsync(Guid spaceId)
        {
            return await dbContext.SpaceImages
                .Where(img => img.SpaceId == spaceId)
                .ToListAsync();
        }

        public async Task<bool> DeleteAsync(Guid imageId)
        {
            var image = await dbContext.SpaceImages.FindAsync(imageId);
            if (image == null) return false;

            // Delete physical file
            var imagePath = Path.Combine(
                webHostEnvironment.ContentRootPath,
                "Images",
                $"{image.FileName}{image.FileExtension}");

            if (File.Exists(imagePath))
            {
                File.Delete(imagePath);
            }

            // Delete database record
            dbContext.SpaceImages.Remove(image);
            await dbContext.SaveChangesAsync();

            return true;
        }
    }
}
