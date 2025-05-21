using AutoMapper;
using Microsoft.EntityFrameworkCore;
using SpaceFinderAPI.Data;
using SpaceFinderAPI.DTO;
using SpaceFinderAPI.Models.Domain;
using SpaceFinderAPI.Repositories.Interface;

namespace SpaceFinderAPI.Repositories.Implementation;

public class SpaceRepository : ISpaceRepository
{
      private ApplicationDbContext dbContext;

      public SpaceRepository(ApplicationDbContext dbContext)
      {
        this.dbContext = dbContext;
      }

    public async Task<bool> SpaceExistsAsync(Guid spaceId)
    {
        return await dbContext.Spaces.AnyAsync(s => s.Id == spaceId);
    }

    public async Task<Space> CreateSpaceAsync(Space space)
      {
        await dbContext.Spaces.AddAsync(space);
        await dbContext.SaveChangesAsync();
        return space;

      }
        
    public async Task<IEnumerable<Space>> GetAllSpacesAsync()
    {
        return await dbContext.Spaces.ToListAsync();
    }

    public async Task<Space?> GetSpaceByIdAsync(Guid id)
    {
        return await dbContext.Spaces.FirstOrDefaultAsync(space => space.Id == id);
    }

    public async Task<Space> DeleteAllSpacesAsync()
    {
        var spaces = await dbContext.Spaces.ToListAsync();
        dbContext.Spaces.RemoveRange(spaces);
        await dbContext.SaveChangesAsync();
        return null;
    }

    public async Task<Space?> DeleteSpaceByIdAsync(Guid id)
    {
        var space = await dbContext.Spaces.FirstOrDefaultAsync(space => space.Id == id);
        if (space != null)
        {
            dbContext.Spaces.Remove(space);
            await dbContext.SaveChangesAsync();
            return space;
        }
        return null;

    }

    public async Task UpdateSpaceAsync(Space space)
    {
        dbContext.Spaces.Update(space);
        await dbContext.SaveChangesAsync();
    }

}



