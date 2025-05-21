using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.FileProviders;
using SpaceFinderAPI.AutoMapperConfig;
using SpaceFinderAPI.Data;
using SpaceFinderAPI.Repositories.Implementation;
using SpaceFinderAPI.Repositories.Interface;
using System.Text.Json.Serialization;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers()
    .AddJsonOptions(options =>
    {
        options.JsonSerializerOptions.Converters.Add(new JsonStringEnumConverter());
    });
builder.Services.AddHttpContextAccessor();

// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("SpaceFinderConnectionString")));

//AutoMapperConfiguration

builder.Services.AddAutoMapper(typeof(AutoMapperConfigProfile));

builder.Services.AddScoped<ISpaceRepository, SpaceRepository>();
builder.Services.AddScoped<IImageRepository, ImageRepository>();


var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
  app.UseSwagger();
  app.UseSwaggerUI();
  
}

app.UseHttpsRedirection();

app.UseCors(options =>
{
    options.AllowAnyOrigin();
    options.AllowAnyMethod();
    options.AllowAnyHeader();
});

app.UseAuthorization();

app.UseStaticFiles(new StaticFileOptions
{
    FileProvider = new PhysicalFileProvider(
        Path.Combine(Directory.GetCurrentDirectory(), "images")),
    RequestPath = "/Images"
});

app.MapControllers();



app.Run();
