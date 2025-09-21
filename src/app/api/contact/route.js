import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, phone, message, date, people } = await req.json();

    if (!name || !email || !phone) {
      return new Response(JSON.stringify({ message: "All fields are required" }), { status: 400 });
    }

    let emailText = `Navn: ${name}\nEmail: ${email}\nTelefon: ${phone}\n`;

    if (people) emailText += `Antal gæster: ${people}\n`;
    if (date) emailText += `Dato: ${date}\n`;
    if (message) emailText += `Besked:\n${message}\n`;

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
      text: emailText,
    });

    return new Response(JSON.stringify({ message: "Email sent successfully" }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ message: "Error sending email", error: error.message }), { status: 500 });
  }
}
