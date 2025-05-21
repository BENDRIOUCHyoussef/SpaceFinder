namespace SpaceFinderAPI.Models.Domain;

public class SpaceImages
{
    public Guid Id { get; set; }
    public string FileName { get; set; }
    public string FileExtension { get; set; }
    public string Title{ get; set; }
    public string ImageUrl { get; set; }
    public DateTime CreatedAt { get; set; }
    public Guid SpaceId { get; set; }
    public Space Space { get; set; }
}
