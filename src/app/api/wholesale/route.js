import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const data = await request.json();
    const { fullName, phone, email, businessName, products, quantity, deliveryDate, notes } = data;

    // Validate required fields
    if (!fullName || !phone || !email || !products || !quantity || !deliveryDate) {
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

    // Format products array for email
    const productsList = Array.isArray(products) ? products.join(', ') : products;

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
      subject: `Wholesale Inquiry from ${fullName}`,
      text: `
        Name: ${fullName}
        Phone: ${phone}
        Email: ${email}
        Business Name: ${businessName || 'N/A'}
        
        Products: ${productsList}
        Quantity: ${quantity}
        Preferred Delivery Date: ${deliveryDate}
        
        Additional Notes:
        ${notes || 'None provided'}
      `,
      html: `
        <h2>New Wholesale Inquiry</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Business Name:</strong> ${businessName || 'N/A'}</p>
        
        <h3>Order Details:</h3>
        <p><strong>Products:</strong> ${productsList}</p>
        <p><strong>Quantity:</strong> ${quantity}</p>
        <p><strong>Preferred Delivery Date:</strong> ${deliveryDate}</p>
        
        <h3>Additional Notes:</h3>
        <p>${notes ? notes.replace(/\n/g, '<br>') : 'None provided'}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Your wholesale inquiry has been sent successfully!' 
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      }
    );

  } catch (error) {
    console.error('Error sending wholesale inquiry:', error);
    
    return new Response(
      JSON.stringify({ 
        success: false, 
        message: 'Error sending inquiry. Please try again later.' 
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
} 