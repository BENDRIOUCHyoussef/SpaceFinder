namespace SpaceFinderAPI.Models.Domain;

  public class Space
  {
    public Guid Id { get; set; }
    public string Title { get; set; }
    public string Description { get; set; }
    public string Price { get; set; }
    public string Address { get; set; }
    public string Postcode { get; set; }
    public string City { get; set; }
    public double Price { get; set; }
    public double Deposit { get; set; }
    public bool BillsIncluded { get; set; }
    public DateTime AvailableFrom { get; set; }
  }



