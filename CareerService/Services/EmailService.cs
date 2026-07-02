using CareerService.Configuration;
using MailKit.Net.Smtp;
using MailKit.Security;
using Microsoft.Extensions.Options;
using MimeKit;
using CareerService.Models;

namespace CareerService.Services
{
    public class EmailService
    {
        private readonly SmtpSettings _smtp;

        public EmailService(IOptions<SmtpSettings> smtp)
        {
            _smtp = smtp.Value;
        }

        public async Task SendApplicationEmail(
            string fullName,
            string email,
            string about,
            string resumePath)
        {
            var message = new MimeMessage();

            message.From.Add(new MailboxAddress(
                _smtp.FromName,
                _smtp.FromEmail));

            message.To.Add(MailboxAddress.Parse(_smtp.HrEmail));

            message.Subject = $"New Career Application - {fullName}";

            var builder = new BodyBuilder();

            builder.HtmlBody = $@"
                <h2>New Career Application</h2>

                <p><strong>Name:</strong> {fullName}</p>

                <p><strong>Email:</strong> {email}</p>

                <p><strong>About:</strong></p>

                <p>{about}</p>";

            if (File.Exists(resumePath))
            {
                builder.Attachments.Add(resumePath);
            }

            message.Body = builder.ToMessageBody();

            using var smtp = new SmtpClient();

            await smtp.ConnectAsync(
                _smtp.Host,
                _smtp.Port,
                SecureSocketOptions.StartTls);

            await smtp.AuthenticateAsync(
                _smtp.Username,
                _smtp.Password);

            await smtp.SendAsync(message);

            await smtp.DisconnectAsync(true);
        }

public async Task SendConfirmationEmail(string applicantName, string applicantEmail)
{
    var message = new MimeMessage();

    message.From.Add(new MailboxAddress(
        _smtp.FromName,
        _smtp.FromEmail));

    message.To.Add(MailboxAddress.Parse(applicantEmail));

    message.Subject = "Application Received - AMNIKON Careers";

    var builder = new BodyBuilder();

    builder.HtmlBody = $@"
        <h2>Thank You, {applicantName}!</h2>

        <p>We have successfully received your application.</p>

        <p>Our recruitment team will review your profile and contact you if your qualifications match our requirements.</p>

        <br/>

        <p>Regards,</p>

        <b>AMNIKON Careers Team</b>";

    message.Body = builder.ToMessageBody();

    using var smtp = new SmtpClient();

    await smtp.ConnectAsync(
        _smtp.Host,
        _smtp.Port,
        MailKit.Security.SecureSocketOptions.StartTls);

    await smtp.AuthenticateAsync(
        _smtp.Username,
        _smtp.Password);

    await smtp.SendAsync(message);

    await smtp.DisconnectAsync(true);
}
public async Task SendContactEmail(ContactRequest request)
{
    var message = new MimeMessage();

    message.From.Add(new MailboxAddress(
        _smtp.FromName,
        _smtp.FromEmail));

    message.To.Add(MailboxAddress.Parse("info@amnikontechnologies.com"));

    message.Subject = $"New Contact Request - {request.FirstName} {request.LastName}";

    var builder = new BodyBuilder();

    builder.HtmlBody = $@"
    <h2>New Contact Request</h2>

    <p><strong>Name:</strong> {request.FirstName} {request.LastName}</p>

    <p><strong>Email:</strong> {request.Email}</p>

    <p><strong>Company:</strong> {request.Company}</p>

    <p><strong>Service:</strong> {request.Service}</p>

    <p><strong>Message:</strong></p>

    <p>{request.Message}</p>";

    message.Body = builder.ToMessageBody();

    using var smtp = new SmtpClient();

    await smtp.ConnectAsync(
        _smtp.Host,
        _smtp.Port,
        SecureSocketOptions.StartTls);

    await smtp.AuthenticateAsync(
        _smtp.Username,
        _smtp.Password);

    await smtp.SendAsync(message);

    await smtp.DisconnectAsync(true);
}
public async Task SendContactConfirmation(ContactRequest request)
{
    var message = new MimeMessage();

    message.From.Add(new MailboxAddress(
        _smtp.FromName,
        _smtp.FromEmail));

    message.To.Add(MailboxAddress.Parse(request.Email));

    message.Subject = "Thank You For Contacting AMNIKON";

    var builder = new BodyBuilder();

    builder.HtmlBody = $@"
    <h2>Hello {request.FirstName},</h2>

    <p>Thank you for contacting AMNIKON.</p>

    <p>We have received your enquiry.</p>

    <p>Our team will contact you shortly.</p>

    <br>

    Regards,<br>

    <b>AMNIKON Team</b>";

    message.Body = builder.ToMessageBody();

    using var smtp = new SmtpClient();

    await smtp.ConnectAsync(
        _smtp.Host,
        _smtp.Port,
        SecureSocketOptions.StartTls);

    await smtp.AuthenticateAsync(
        _smtp.Username,
        _smtp.Password);

    await smtp.SendAsync(message);

    await smtp.DisconnectAsync(true);
}



public async Task SendSupportEmail(SupportRequest request)
{
    var message = new MimeMessage();

    message.From.Add(new MailboxAddress(
        _smtp.FromName,
        _smtp.FromEmail));

    message.To.Add(MailboxAddress.Parse("info@amnikontechnologies.com"));

    message.Subject = $"Support Ticket - {request.Subject}";

    var builder = new BodyBuilder();

    builder.HtmlBody = $@"
    <h2>New Support Ticket</h2>

    <p><b>Name:</b> {request.Name}</p>

    <p><b>Email:</b> {request.Email}</p>

    <p><b>Priority:</b> {request.Priority}</p>

    <p><b>Category:</b> {request.Category}</p>

    <p><b>Subject:</b> {request.Subject}</p>

    <p><b>Issue:</b></p>

    <p>{request.Message}</p>";

    message.Body = builder.ToMessageBody();

    using var smtp = new SmtpClient();

    await smtp.ConnectAsync(
        _smtp.Host,
        _smtp.Port,
        SecureSocketOptions.StartTls);

    await smtp.AuthenticateAsync(
        _smtp.Username,
        _smtp.Password);

    await smtp.SendAsync(message);

    await smtp.DisconnectAsync(true);
}

public async Task SendSupportConfirmation(SupportRequest request)
{
    var message = new MimeMessage();

    message.From.Add(new MailboxAddress(
        _smtp.FromName,
        _smtp.FromEmail));

    message.To.Add(MailboxAddress.Parse(request.Email));

    message.Subject = "Support Ticket Received";

    var builder = new BodyBuilder();

    builder.HtmlBody = $@"
    <h2>Hello {request.Name},</h2>

    <p>Thank you for contacting AMNIKON Support.</p>

    <p>Your support ticket has been received.</p>

    <p><b>Subject:</b> {request.Subject}</p>

    <p><b>Priority:</b> {request.Priority}</p>

    <p>Our support team will contact you shortly.</p>

    <br>

    Regards,<br>

    <b>AMNIKON Support Team</b>";

    message.Body = builder.ToMessageBody();

    using var smtp = new SmtpClient();

    await smtp.ConnectAsync(
        _smtp.Host,
        _smtp.Port,
        SecureSocketOptions.StartTls);

    await smtp.AuthenticateAsync(
        _smtp.Username,
        _smtp.Password);

    await smtp.SendAsync(message);

    await smtp.DisconnectAsync(true);
}
    }
}