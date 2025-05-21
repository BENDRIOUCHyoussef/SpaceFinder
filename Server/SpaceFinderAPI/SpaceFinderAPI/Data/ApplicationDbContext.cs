using Microsoft.EntityFrameworkCore;
using SpaceFinderAPI.Models.Domain;

namespace SpaceFinderAPI.Data;

public class ApplicationDbContext : DbContext
{
  public ApplicationDbContext(DbContextOptions options) : base(options)
  {
  }
    public DbSet<Space> Spaces { get; set; }
    public DbSet<SpaceImages> SpaceImages { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        modelBuilder.Entity<Space>()
            .Property(space => space.SpaceType)
            .HasConversion<string>();

        modelBuilder.Entity<Space>()
            .HasMany(space => space.Images)
            .WithOne(spaceImage => spaceImage.Space)
            .HasForeignKey(spaceImage => spaceImage.SpaceId)
            .OnDelete(DeleteBehavior.Cascade);

        modelBuilder.Entity<SpaceImages>();
    }
}
