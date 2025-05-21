using SpaceFinderAPI.Models.Domain;

namespace SpaceFinderAPI.DTO
{
    public class GetSpaceRequestDto
    {
        public string Title { get; set; }
        public string Description { get; set; }
        //public string FeaturedimageUrl { get; set; }
        public string Address { get; set; }
        public string PostCode { get; set; }
        public string City { get; set; }
        public double Price { get; set; }
        public double Deposit { get; set; }
        public bool BillsIncluded { get; set; }
        public DateOnly AvailableFrom { get; set; }
        public SpaceType SpaceType { get; set; }
        public int NumberOfRooms { get; set; }
        public int NumberOfBathrooms { get; set; }
        public bool Furnished { get; set; }
        public List<SpaceImageDto> Images { get; set; } = new();

        //metadata
        public DateTime publishedDate { get; set; }
        //public string Author { get; set; }
        //public bool IsVisible { get; set; }
    }
}
