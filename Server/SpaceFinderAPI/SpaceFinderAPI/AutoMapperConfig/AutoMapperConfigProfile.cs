using AutoMapper;
using SpaceFinderAPI.DTO;
using SpaceFinderAPI.Models.Domain;

namespace SpaceFinderAPI.AutoMapperConfig;

public class AutoMapperConfigProfile : Profile
{
    public AutoMapperConfigProfile()
    {
        CreateMap<CreateSpaceRequestDto, Space>()
            .AfterMap((src, dest) => { 
                dest.PublishedAt = DateTime.Now; 
                dest.UpdatedAt = DateTime.Now;
                dest.IsVisible = true; 
            });
            

        CreateMap<UpdateSpaceRequestDto, Space>()
            .AfterMap((src, dest) => dest.UpdatedAt = DateTime.Now);

        CreateMap<SpaceImageDto, SpaceImages>()
            .ForMember(dest => dest.CreatedAt, opt => opt.MapFrom(src => DateTime.Now));

        CreateMap<Space, GetSpaceRequestDto>();
        CreateMap<SpaceImages, SpaceImageDto>();

        CreateMap<ImageUploadDto, SpaceImages>()
            .ForMember(dest => dest.FileName, opt => opt.Ignore()) // We'll set this manually
            .ForMember(dest => dest.FileExtension, opt => opt.Ignore()) // We'll set this manually
            .ForMember(dest => dest.CreatedAt, opt => opt.MapFrom(_ => DateTime.Now))
            .ForMember(dest => dest.ImageUrl, opt => opt.Ignore()); // Will be set by repository
    }
}

