import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, subject, message, type } = body;

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    // Email regex check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // Create transporter — reads from environment variables
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const recipientEmail = "info@commerceallianceholdings.com";

    // Email to Commerce Alliance
    await transporter.sendMail({
      from: `"Commerce Alliance Website" <${process.env.SMTP_USER}>`,
      to: recipientEmail,
      replyTo: email,
      subject: `[Website Enquiry] ${subject || "New Message"} — ${name}`,
      html: `
        <div style="font-family: 'Helvetica Neue', Arial, sans-serif; max-width: 620px; margin: 0 auto; background: #08080A; color: #f0ede8; border: 1px solid rgba(201,169,110,0.2);">

          <!-- Header -->
          <div style="background: #0D1117; padding: 32px 40px; border-bottom: 1px solid rgba(201,169,110,0.15);">
            <p style="margin: 0 0 4px; font-size: 10px; letter-spacing: 0.3em; text-transform: uppercase; color: #C9A96E; font-weight: 400;">Commerce Alliance Holdings Limited</p>
            <h1 style="margin: 0; font-size: 22px; font-weight: 300; color: #ffffff;">New Website Enquiry</h1>
          </div>

          <!-- Body -->
          <div style="padding: 36px 40px;">

            <table style="width: 100%; border-collapse: collapse; margin-bottom: 28px;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid rgba(201,169,110,0.08); width: 30%;">
                  <span style="font-size: 10px; letter-spacing: 0.2em; text-transform: uppercase; color: rgba(201,169,110,0.7);">Full Name</span>
                </td>
                <td style="padding: 10px 0; border-bottom: 1px solid rgba(201,169,110,0.08);">
                  <span style="font-size: 14px; color: #f0ede8;">${name}</span>
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid rgba(201,169,110,0.08);">
                  <span style="font-size: 10px; letter-spacing: 0.2em; text-transform: uppercase; color: rgba(201,169,110,0.7);">Email</span>
                </td>
                <td style="padding: 10px 0; border-bottom: 1px solid rgba(201,169,110,0.08);">
                  <a href="mailto:${email}" style="font-size: 14px; color: #C9A96E; text-decoration: none;">${email}</a>
                </td>
              </tr>
              ${phone ? `
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid rgba(201,169,110,0.08);">
                  <span style="font-size: 10px; letter-spacing: 0.2em; text-transform: uppercase; color: rgba(201,169,110,0.7);">Phone</span>
                </td>
                <td style="padding: 10px 0; border-bottom: 1px solid rgba(201,169,110,0.08);">
                  <span style="font-size: 14px; color: #f0ede8;">${phone}</span>
                </td>
              </tr>` : ""}
              ${type ? `
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid rgba(201,169,110,0.08);">
                  <span style="font-size: 10px; letter-spacing: 0.2em; text-transform: uppercase; color: rgba(201,169,110,0.7);">Enquiry Type</span>
                </td>
                <td style="padding: 10px 0; border-bottom: 1px solid rgba(201,169,110,0.08);">
                  <span style="font-size: 14px; color: #C9A96E;">${type}</span>
                </td>
              </tr>` : ""}
              ${subject ? `
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid rgba(201,169,110,0.08);">
                  <span style="font-size: 10px; letter-spacing: 0.2em; text-transform: uppercase; color: rgba(201,169,110,0.7);">Subject</span>
                </td>
                <td style="padding: 10px 0; border-bottom: 1px solid rgba(201,169,110,0.08);">
                  <span style="font-size: 14px; color: #f0ede8;">${subject}</span>
                </td>
              </tr>` : ""}
            </table>

            <div style="background: rgba(201,169,110,0.04); border: 1px solid rgba(201,169,110,0.12); padding: 20px 24px;">
              <p style="margin: 0 0 8px; font-size: 10px; letter-spacing: 0.2em; text-transform: uppercase; color: rgba(201,169,110,0.7);">Message</p>
              <p style="margin: 0; font-size: 14px; line-height: 1.8; color: rgba(240,237,232,0.75); white-space: pre-line;">${message}</p>
            </div>

          </div>

          <!-- Footer -->
          <div style="padding: 20px 40px; border-top: 1px solid rgba(201,169,110,0.10); background: #0D1117;">
            <p style="margin: 0; font-size: 11px; color: rgba(240,237,232,0.25); letter-spacing: 0.05em;">
              Sent from the Commerce Alliance Holdings Limited website contact form.
            </p>
          </div>

        </div>
      `,
    });

    // Auto-reply to sender
    await transporter.sendMail({
      from: `"Commerce Alliance Holdings Limited" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "We've received your message — Commerce Alliance Holdings Limited",
      html: `
        <div style="font-family: 'Helvetica Neue', Arial, sans-serif; max-width: 620px; margin: 0 auto; background: #08080A; color: #f0ede8; border: 1px solid rgba(201,169,110,0.2);">

          <div style="background: #0D1117; padding: 32px 40px; border-bottom: 1px solid rgba(201,169,110,0.15);">
            <p style="margin: 0 0 4px; font-size: 10px; letter-spacing: 0.3em; text-transform: uppercase; color: #C9A96E;">Commerce Alliance Holdings Limited</p>
            <h1 style="margin: 0; font-size: 22px; font-weight: 300; color: #ffffff;">Thank you, ${name}.</h1>
          </div>

          <div style="padding: 36px 40px;">
            <p style="font-size: 15px; line-height: 1.85; color: rgba(240,237,232,0.65); margin-bottom: 20px;">
              We have received your message and a member of our team will be in touch with you shortly.
            </p>
            <p style="font-size: 15px; line-height: 1.85; color: rgba(240,237,232,0.65); margin-bottom: 32px;">
              In the meantime, feel free to explore our website to learn more about our ecosystem and investment offerings.
            </p>
            <div style="border-left: 2px solid #C9A96E; padding-left: 20px; margin-bottom: 32px;">
              <p style="margin: 0; font-size: 18px; font-weight: 300; color: #ffffff; line-height: 1.4;">
                Building Africa's Financial and Real Asset Infrastructure.
              </p>
            </div>
            <div style="border-top: 1px solid rgba(201,169,110,0.1); padding-top: 24px;">
              <p style="margin: 0 0 4px; font-size: 12px; color: rgba(240,237,232,0.4);">Commerce Alliance Holdings Limited</p>
              <p style="margin: 0 0 4px; font-size: 12px; color: rgba(240,237,232,0.4);">5th Floor, Katsina House, Ralph Shodeinde, Central Area, Abuja.</p>
              <p style="margin: 0 0 4px; font-size: 12px; color: rgba(201,169,110,0.6);">info@commerceallianceholdings.com</p>
              <p style="margin: 0; font-size: 12px; color: rgba(240,237,232,0.4);">+234 802 2226 387</p>
            </div>
          </div>

        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again or email us directly." },
      { status: 500 }
    );
  }
}
