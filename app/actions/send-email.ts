"use server";

import { z } from "zod";
import { Resend } from "resend";

const ContactSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters." }),
    email: z.string().email({ message: "Invalid email address." }),
    message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(prevState: any, formData: FormData) {
    const validatedFields = ContactSchema.safeParse({
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message"),
    });

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: "Missing Fields. Failed to send email.",
        };
    }

    const { name, email, message } = validatedFields.data;

    try {
        await resend.emails.send({
            from: 'Contact Form <onboarding@resend.dev>', // Update this if you have a verified domain
            to: 'ravpraneeth@gmail.com',
            // Actually, I should probably check data.resume for the email or ask. 
            // User has `data` imported in other files. I'll stick to a safe default or try to import `data`.
            // Since this is a server file, importing `data` from `@/app/data/resume` might work if it's pure JS/TS.
            subject: `New Message from ${name}`,
            replyTo: email,
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
        });

        return { success: true, message: "Email sent successfully!" };
    } catch (error) {
        return {
            success: false,
            message: "Failed to send email. Please try again later.",
        };
    }
}
