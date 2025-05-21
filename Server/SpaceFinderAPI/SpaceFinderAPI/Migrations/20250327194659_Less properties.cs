using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SpaceFinderAPI.Migrations
{
    /// <inheritdoc />
    public partial class Lessproperties : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Address",
                table: "Spaces");

            migrationBuilder.DropColumn(
                name: "Author",
                table: "Spaces");

            migrationBuilder.DropColumn(
                name: "AvailableFrom",
                table: "Spaces");

            migrationBuilder.DropColumn(
                name: "BillsIncluded",
                table: "Spaces");

            migrationBuilder.DropColumn(
                name: "City",
                table: "Spaces");

            migrationBuilder.DropColumn(
                name: "Deposit",
                table: "Spaces");

            migrationBuilder.DropColumn(
                name: "FeaturedimageUrl",
                table: "Spaces");

            migrationBuilder.DropColumn(
                name: "Furnished",
                table: "Spaces");

            migrationBuilder.DropColumn(
                name: "IsVisible",
                table: "Spaces");

            migrationBuilder.DropColumn(
                name: "NumberOfBathrooms",
                table: "Spaces");

            migrationBuilder.DropColumn(
                name: "NumberOfRooms",
                table: "Spaces");

            migrationBuilder.DropColumn(
                name: "PostCode",
                table: "Spaces");

            migrationBuilder.DropColumn(
                name: "Price",
                table: "Spaces");

            migrationBuilder.DropColumn(
                name: "SpaceType",
                table: "Spaces");

            migrationBuilder.DropColumn(
                name: "publishedData",
                table: "Spaces");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Address",
                table: "Spaces",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Author",
                table: "Spaces",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<DateTime>(
                name: "AvailableFrom",
                table: "Spaces",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<bool>(
                name: "BillsIncluded",
                table: "Spaces",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<string>(
                name: "City",
                table: "Spaces",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<double>(
                name: "Deposit",
                table: "Spaces",
                type: "float",
                nullable: false,
                defaultValue: 0.0);

            migrationBuilder.AddColumn<string>(
                name: "FeaturedimageUrl",
                table: "Spaces",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<bool>(
                name: "Furnished",
                table: "Spaces",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "IsVisible",
                table: "Spaces",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<int>(
                name: "NumberOfBathrooms",
                table: "Spaces",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "NumberOfRooms",
                table: "Spaces",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<string>(
                name: "PostCode",
                table: "Spaces",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<double>(
                name: "Price",
                table: "Spaces",
                type: "float",
                nullable: false,
                defaultValue: 0.0);

            migrationBuilder.AddColumn<int>(
                name: "SpaceType",
                table: "Spaces",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<DateTime>(
                name: "publishedData",
                table: "Spaces",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));
        }
    }
}
