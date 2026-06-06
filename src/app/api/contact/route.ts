import { NextRequest, NextResponse } from 'next/server';

// Resend integration - uncomment when RESEND_API_KEY is configured
// import { resend, CONTACT_EMAIL } from '@/lib/resend';

const CONTACT_EMAIL = process.env.CONTACT_EMAIL || 'primestackus@gmail.com';

interface ContactFormData {
  name: string;
  company: string;
  email: string;
  phone?: string;
  businessType?: string;
  budget?: string;
  message: string;
  preferredContact?: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();

    // Validate required fields
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    // Check if Resend is configured
    if (process.env.RESEND_API_KEY) {
      // Dynamic import to avoid errors when not configured
      const { Resend } = await import('resend');
      const resend = new Resend(process.env.RESEND_API_KEY);

      const { data, error: sendError } = await resend.emails.send({
        from: 'PrimeStack US <onboarding@resend.dev>',
        to: [CONTACT_EMAIL],
        replyTo: body.email,
        subject: `New Inquiry from ${body.name} - ${body.company || 'N/A'}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #E5E7EB; border-radius: 12px;">
            <h2 style="color: #0A0A0A; border-bottom: 1px solid #E5E7EB; padding-bottom: 12px; margin-top: 0;">
              New Business Inquiry
            </h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; color: #6B7280; width: 180px;">Name</td>
                <td style="padding: 8px 0; color: #0A0A0A; font-weight: 600;">${body.name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6B7280;">Company</td>
                <td style="padding: 8px 0; color: #0A0A0A; font-weight: 600;">${body.company || 'Not provided'}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6B7280;">Email</td>
                <td style="padding: 8px 0; color: #0A0A0A; font-weight: 600;">
                  <a href="mailto:${body.email}" style="color: #0A0A0A; text-decoration: none;">${body.email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6B7280;">Phone</td>
                <td style="padding: 8px 0; color: #0A0A0A; font-weight: 600;">${body.phone || 'Not provided'}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6B7280;">Business Type</td>
                <td style="padding: 8px 0; color: #0A0A0A; font-weight: 600;">${body.businessType || 'Not specified'}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6B7280;">Budget</td>
                <td style="padding: 8px 0; color: #0A0A0A; font-weight: 600;">${body.budget || 'Not specified'}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6B7280;">Preferred Contact</td>
                <td style="padding: 8px 0; color: #0A0A0A; font-weight: 600; text-transform: uppercase; font-size: 11px; letter-spacing: 0.5px;">${body.preferredContact || 'Email'}</td>
              </tr>
            </table>
            <div style="margin-top: 20px; padding: 20px; background-color: #FAFAFA; border: 1px solid #E5E7EB; border-radius: 8px;">
              <p style="color: #6B7280; margin: 0 0 8px 0; font-size: 13px; font-weight: bold; uppercase;">Project Description</p>
              <p style="color: #0A0A0A; margin: 0; line-height: 1.6; font-size: 14.5px;">${body.message}</p>
            </div>
            <p style="color: #6B7280; font-size: 11px; margin-top: 24px; text-align: center; border-t: 1px solid #E5E7EB; padding-top: 16px;">
              Sent from PrimeStack website contact form
            </p>
          </div>
        `,
      });

      if (sendError) {
        console.error('Resend send error:', sendError);
        return NextResponse.json(
          { error: `Email delivery failed: ${sendError.message}` },
          { status: 500 }
        );
      }

      console.log('Email sent successfully:', data?.id);
    } else {
      // Log to console when Resend is not configured (development)
      console.log('📧 Contact form submission (Resend not configured):');
      console.log('To:', CONTACT_EMAIL);
      console.log('From:', body.name, `<${body.email}>`);
      console.log('Company:', body.company);
      console.log('Phone:', body.phone);
      console.log('Business Type:', body.businessType);
      console.log('Budget:', body.budget);
      console.log('Preferred Contact Method:', body.preferredContact);
      console.log('Message:', body.message);
    }

    return NextResponse.json(
      { success: true, message: 'Your message has been sent successfully. We\'ll get back to you within 24 hours.' },
      { status: 200 }
    );
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    console.error('Contact form error:', message);
    return NextResponse.json(
      { error: `Something went wrong: ${message}` },
      { status: 500 }
    );
  }
}
