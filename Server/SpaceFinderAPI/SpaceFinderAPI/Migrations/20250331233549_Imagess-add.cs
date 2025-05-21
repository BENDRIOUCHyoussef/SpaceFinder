using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SpaceFinderAPI.Migrations
{
    /// <inheritdoc />
    public partial class Imagessadd : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "SpaceImage");

            migrationBuilder.CreateTable(
                name: "SpaceImages",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    FileName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    FileExtesion = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Title = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ImageUrl = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    DateCreated = table.Column<DateOnly>(type: "date", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SpaceImages", x => x.Id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "SpaceImages");

            migrationBuilder.CreateTable(
                name: "SpaceImage",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    DateCreated = table.Column<DateOnly>(type: "date", nullable: false),
                    FileExtesion = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    FileName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ImageUrl = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Title = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SpaceImage", x => x.Id);
                });
        }
    }
}
