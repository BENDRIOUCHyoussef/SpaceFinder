using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SpaceFinderAPI.Migrations
{
    /// <inheritdoc />
    public partial class PublishedDatetypo : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "publishedData",
                table: "Spaces",
                newName: "publishedDate");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "publishedDate",
                table: "Spaces",
                newName: "publishedData");
        }
    }
}
