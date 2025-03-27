import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const data = await request.json();
    const { email } = data;

    // Validate required fields
    if (!email) {
      return new Response(
        JSON.stringify({ 
          success: false, 
          message: 'Email is required' 
        }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    // Configure email transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'yutakafarms2@gmail.com',
        pass: process.env.EMAIL_PASSWORD || 'your-email-app-password' // Use app password for Gmail
      },
    });

    // Setup email data for notification to admin
    const adminMailOptions = {
      from: `"Yutaka Farm Website" <yutakafarms2@gmail.com>`,
      to: 'yutakafarms2@gmail.com, info@yutakafarm.com.ng',
      subject: `New Newsletter Subscription`,
      text: `
        A new user has subscribed to your newsletter:
        
        Email: ${email}
        Date: ${new Date().toLocaleString()}
      `,
      html: `
        <h2>New Newsletter Subscription</h2>
        <p>A new user has subscribed to your newsletter.</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
      `,
    };

    // Setup email data for confirmation to subscriber
    const subscriberMailOptions = {
      from: `"Yutaka Farm" <yutakafarms2@gmail.com>`,
      to: email,
      subject: `Welcome to Yutaka Farm Newsletter`,
      text: `
        Thank you for subscribing to the Yutaka Farm newsletter!
        
        You will now receive updates on our latest products, special offers, and farming tips.
        
        If you did not subscribe to this newsletter, please disregard this email.
        
        Best regards,
        The Yutaka Farm Team
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2e7d32;">Welcome to Yutaka Farm Newsletter!</h2>
          <p>Thank you for subscribing to our newsletter.</p>
          <p>You will now receive updates on our latest products, special offers, and farming tips.</p>
          <p>If you did not subscribe to this newsletter, please disregard this email.</p>
          <p>Best regards,<br>The Yutaka Farm Team</p>
          <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #eaeaea; font-size: 12px; color: #666;">
            <p>Yutaka Farm | 2 Leha Road, Karu, Abuja | 08174006548</p>
          </div>
        </div>
      `,
    };

    // Send emails
    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(subscriberMailOptions);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Thank you for subscribing to our newsletter!' 
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      }
    );

  } catch (error) {
    console.error('Error processing newsletter subscription:', error);
    
    return new Response(
      JSON.stringify({ 
        success: false, 
        message: 'Error processing your subscription. Please try again later.' 
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
} 