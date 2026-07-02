using Microsoft.AspNetCore.Http;
using System.ComponentModel.DataAnnotations;

namespace CareerService.Models
{
    public class CareerApplication
    {
        [Required]
        public string FullName { get; set; } = string.Empty;

        [Required]
        [EmailAddress]
        public string Email { get; set; } = string.Empty;

        public string? About { get; set; }

        [Required]
        public IFormFile Resume { get; set; } = default!;
    }
}