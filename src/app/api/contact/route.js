import { EmailTemplate } from "../../../components/EmailTemplate/EmailTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export async function POST(req) {
	const { firstName, email, subject, message } = await req.json();
	try {
		const data = await resend.emails.send({
			from: "Acme <onboarding@resend.dev>",
			to: ["kweku.moses@hotmail.com"],
			subject: subject,
			react: EmailTemplate({ firstName, message, subject, email }),
		});

		return new Response(JSON.stringify(data), {
			headers: { "Content-Type": "application/json" },
		});
	} catch (error) {
		return new Response(JSON.stringify({ error: error.message }), {
			headers: { "Content-Type": "application/json" },
			status: 500,
		});
	}
}
