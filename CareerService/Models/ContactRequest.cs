using System.ComponentModel.DataAnnotations;

namespace CareerService.Models
{
    public class ContactRequest
    {
        [Required]
        public string FirstName { get; set; } = string.Empty;

        [Required]
        public string LastName { get; set; } = string.Empty;

        [Required]
        [EmailAddress]
        public string Email { get; set; } = string.Empty;

        public string? Company { get; set; }

        public string? Service { get; set; }

        [Required]
        public string Message { get; set; } = string.Empty;
    }
}