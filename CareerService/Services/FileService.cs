using Microsoft.AspNetCore.Http;

namespace CareerService.Services
{
    public class FileService
    {
        private readonly IWebHostEnvironment _environment;

        // Allowed resume file extensions
        private readonly string[] AllowedExtensions =
        {
            ".pdf",
            ".doc",
            ".docx"
        };

        // Maximum file size: 5 MB
        private const long MaxFileSize = 5 * 1024 * 1024;

        public FileService(IWebHostEnvironment environment)
        {
            _environment = environment;
        }

        public async Task<string> SaveResumeAsync(IFormFile file)
        {
            // Check if file exists
            if (file == null || file.Length == 0)
            {
                throw new Exception("Resume file is required.");
            }

            // Validate extension
            var extension = Path.GetExtension(file.FileName).ToLowerInvariant();

            if (!AllowedExtensions.Contains(extension))
            {
                throw new Exception("Only PDF, DOC, and DOCX files are allowed.");
            }

            // Validate file size
            if (file.Length > MaxFileSize)
            {
                throw new Exception("Maximum allowed file size is 5 MB.");
            }

            // Upload folder
            var uploadsFolder = Path.Combine(
                _environment.ContentRootPath,
                "Uploads",
                "Resumes");

            // Create folder if it doesn't exist
            Directory.CreateDirectory(uploadsFolder);

            // Generate unique filename
            var fileName = $"{Guid.NewGuid()}{extension}";

            // Full file path
            var filePath = Path.Combine(uploadsFolder, fileName);

            // Save file
            using (var stream = new FileStream(filePath, FileMode.Create))
            {
                await file.CopyToAsync(stream);
            }

            // Return the full path (used for email attachment)
            return filePath;
        }
    }
}