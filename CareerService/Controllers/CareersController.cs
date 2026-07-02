using CareerService.Models;
using CareerService.Services;
using Microsoft.AspNetCore.Mvc;

namespace CareerService.Controllers
{
    [ApiController]
    [Route("api/careers")]
    public class CareersController : ControllerBase
    {
        private readonly FileService _fileService;
        private readonly EmailService _emailService;

        public CareersController(
            FileService fileService,
            EmailService emailService)
        {
            _fileService = fileService;
            _emailService = emailService;
        }

        [HttpPost]
        public async Task<IActionResult> Apply([FromForm] CareerApplication application)
        {
            try
            {
                // Save the uploaded resume
                var resumePath = await _fileService.SaveResumeAsync(application.Resume);

                // Send email to HR
                await _emailService.SendApplicationEmail(
                    application.FullName,
                    application.Email,
                    application.About ?? string.Empty,
                    resumePath);
await _emailService.SendConfirmationEmail(
    application.FullName,
    application.Email);
                return Ok(new
                {
                    Success = true,
                    Message = "Application submitted successfully."
                });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new
                {
                    Success = false,
                    Message = ex.Message
                });
            }
        }
    }
}