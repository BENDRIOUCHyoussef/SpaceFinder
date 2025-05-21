using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SpaceFinderAPI.Migrations
{
    /// <inheritdoc />
    public partial class CreatedAt : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "DateCreated",
                table: "SpaceImages");

            migrationBuilder.RenameColumn(
                name: "FileExtesion",
                table: "SpaceImages",
                newName: "FileExtension");

            migrationBuilder.AddColumn<DateTime>(
                name: "CreatedAt",
                table: "SpaceImages",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CreatedAt",
                table: "SpaceImages");

            migrationBuilder.RenameColumn(
                name: "FileExtension",
                table: "SpaceImages",
                newName: "FileExtesion");

            migrationBuilder.AddColumn<DateOnly>(
                name: "DateCreated",
                table: "SpaceImages",
                type: "date",
                nullable: false,
                defaultValue: new DateOnly(1, 1, 1));
        }
    }
}
