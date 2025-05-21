using Microsoft.AspNetCore.Mvc.ModelBinding;
using System.Text.Json.Serialization;

namespace SpaceFinderAPI.DTO;

public class SpaceImageDto
{
    public Guid Id { get; set; }
    public IFormFile File { get; set; }
    public string FileName { get; set; }
    public string Title { get; set; }
    
    public string ImageUrl { get; set; }
    
    public string FileExtension { get; set; }
    
    public DateTime CreatedAt { get; set; }
}
