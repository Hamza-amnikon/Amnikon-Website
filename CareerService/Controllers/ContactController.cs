using CareerService.Models;
using CareerService.Services;
using Microsoft.AspNetCore.Mvc;

namespace CareerService.Controllers
{
    [ApiController]
    [Route("api/contact")]
    public class ContactController : ControllerBase
    {
        private readonly EmailService _emailService;

        public ContactController(EmailService emailService)
        {
            _emailService = emailService;
        }

        [HttpPost]
        public async Task<IActionResult> Send([FromBody] ContactRequest request)
        {
            try
            {
                await _emailService.SendContactEmail(request);

                await _emailService.SendContactConfirmation(request);

                return Ok(new
                {
                    success = true,
                    message = "Message sent successfully."
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