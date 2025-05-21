using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SpaceFinderAPI.Migrations
{
    /// <inheritdoc />
    public partial class RemoveAuthor : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Author",
                table: "Spaces");

            migrationBuilder.DropColumn(
                name: "FeaturedimageUrl",
                table: "Spaces");

            migrationBuilder.AlterColumn<DateOnly>(
                name: "AvailableFrom",
                table: "Spaces",
                type: "date",
                nullable: false,
                oldClrType: typeof(DateTime),
                oldType: "datetime2");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<DateTime>(
                name: "AvailableFrom",
                table: "Spaces",
                type: "datetime2",
                nullable: false,
                oldClrType: typeof(DateOnly),
                oldType: "date");

            migrationBuilder.AddColumn<string>(
                name: "Author",
                table: "Spaces",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "FeaturedimageUrl",
                table: "Spaces",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }
    }
}
