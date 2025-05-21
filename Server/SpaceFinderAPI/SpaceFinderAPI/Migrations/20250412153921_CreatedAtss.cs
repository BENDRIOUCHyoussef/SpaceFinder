using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SpaceFinderAPI.Migrations
{
    /// <inheritdoc />
    public partial class CreatedAtss : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "publishedDate",
                table: "Spaces",
                newName: "UpdatedAt");

            migrationBuilder.AddColumn<DateTime>(
                name: "PublishedAt",
                table: "Spaces",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "PublishedAt",
                table: "Spaces");

            migrationBuilder.RenameColumn(
                name: "UpdatedAt",
                table: "Spaces",
                newName: "publishedDate");
        }
    }
}
