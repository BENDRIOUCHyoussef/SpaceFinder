using SpaceFinderAPI.Models.Domain;

namespace SpaceFinderAPI.Repositories.Interface;

public interface ISpaceRepository
{
    Task<Space> CreateSpaceAsync(Space space);
    Task<IEnumerable<Space>> GetAllSpacesAsync();
    Task<Space?> GetSpaceByIdAsync(Guid id);
    Task<Space> DeleteAllSpacesAsync();
    Task<Space?> DeleteSpaceByIdAsync(Guid id);
    Task UpdateSpaceAsync(Space space);

    // Add this new method for image relationship
    Task<bool> SpaceExistsAsync(Guid spaceId);
}
