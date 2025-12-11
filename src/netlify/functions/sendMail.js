import nodemailer from "nodemailer";

export async function handler(event, context) {
    const data = JSON.parse(event.body);

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    const mailOptions = {
        from: `"${data.name}" <${process.env.EMAIL_USER}>`,
        to: "roneykhan@live.com",
        subject: data.subject,
        replyTo: data.email,
        text: `
Name: ${data.name}
Email: ${data.email}

Message:
${data.message}
    `
    };

    try {
        await transporter.sendMail(mailOptions);
        return { statusCode: 200, body: JSON.stringify({ success: true }) };
    } catch (error) {
        return { statusCode: 500, body: JSON.stringify({ error }) };
    }
}
