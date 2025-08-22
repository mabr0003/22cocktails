import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !subject || !message) {
      return new Response(JSON.stringify({ message: "All fields are required" }), { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: email,
      to: "info@22cocktails.dk",
      subject: `Ny besked fra website: `,
      text: `Navn: ${name}\nEmail: ${email}\nBesked:\n${message}\nTelefon: ${subject}`,
    });

    return new Response(JSON.stringify({ message: "Email sent successfully" }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ message: "Error sending email", error: error.message }), { status: 500 });
  }
}
