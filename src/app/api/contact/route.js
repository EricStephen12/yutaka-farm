import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const data = await request.json();
    const { name, email, subject, message } = data;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return new Response(
        JSON.stringify({ 
          success: false, 
          message: 'Missing required fields' 
        }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    // Configure email transporter
    // Note: For production, use environment variables for these values
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'yutakafarms2@gmail.com',
        pass: process.env.EMAIL_PASSWORD || 'your-email-app-password' // Use app password for Gmail
      },
    });

    // Setup email data
    const mailOptions = {
      from: `"Yutaka Farm Website" <yutakafarms2@gmail.com>`,
      to: 'yutakafarms2@gmail.com, info@yutakafarm.com.ng',
      replyTo: email,
      subject: `Contact Form: ${subject}`,
      text: `
        Name: ${name}
        Email: ${email}
        
        Message:
        ${message}
      `,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <h3>Message:</h3>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Your message has been sent successfully!' 
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      }
    );

  } catch (error) {
    console.error('Error sending contact email:', error);
    
    return new Response(
      JSON.stringify({ 
        success: false, 
        message: 'Error sending message. Please try again later.' 
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
} 