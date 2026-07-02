using CareerService.Models;
using CareerService.Services;
using Microsoft.AspNetCore.Mvc;

namespace CareerService.Controllers
{
    [ApiController]
    [Route("api/support")]
    public class SupportController : ControllerBase
    {
        private readonly EmailService _emailService;

        public SupportController(EmailService emailService)
        {
            _emailService = emailService;
        }

        [HttpPost]
        public async Task<IActionResult> Submit([FromBody] SupportRequest request)
        {
            try
            {
                await _emailService.SendSupportEmail(request);

                await _emailService.SendSupportConfirmation(request);

                return Ok(new
                {
                    success = true,
                    message = "Support ticket submitted successfully."
                });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new
                {
                    success = false,
                    message = ex.Message
                });
            }
        }
    }
}