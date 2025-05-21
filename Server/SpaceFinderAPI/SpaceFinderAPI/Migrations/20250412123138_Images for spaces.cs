using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SpaceFinderAPI.Migrations
{
    /// <inheritdoc />
    public partial class Imagesforspaces : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<Guid>(
                name: "SpaceId",
                table: "SpaceImages",
                type: "uniqueidentifier",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));

            migrationBuilder.CreateIndex(
                name: "IX_SpaceImages_SpaceId",
                table: "SpaceImages",
                column: "SpaceId");

            migrationBuilder.AddForeignKey(
                name: "FK_SpaceImages_Spaces_SpaceId",
                table: "SpaceImages",
                column: "SpaceId",
                principalTable: "Spaces",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_SpaceImages_Spaces_SpaceId",
                table: "SpaceImages");

            migrationBuilder.DropIndex(
                name: "IX_SpaceImages_SpaceId",
                table: "SpaceImages");

            migrationBuilder.DropColumn(
                name: "SpaceId",
                table: "SpaceImages");
        }
    }
}
