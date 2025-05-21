using SpaceFinderAPI.DTO;
using SpaceFinderAPI.Models.Domain;
using System.Net;

namespace SpaceFinderAPI.Repositories.Interface
{
    public interface IImageRepository
    {
        Task<IEnumerable<SpaceImages>> GetAll();
        Task<SpaceImages> UploadImageAsync(IFormFile file, SpaceImages spcaeimage);
        Task<SpaceImages?> GetByIdAsync(Guid id);
        Task<IEnumerable<SpaceImages>> GetBySpaceIdAsync(Guid spaceId);
        Task<bool> DeleteAsync(Guid imageId);
    }
}
