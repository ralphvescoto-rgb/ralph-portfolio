"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, Linkedin } from "lucide-react";

const contactIconMap: Record<string, typeof Mail> = {
	Email: Mail,
	WhatsApp: Phone,
	LinkedIn: Linkedin,
	Location: MapPin,
};

export default function ContactSection() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [subject, setSubject] = useState("");
	const [message, setMessage] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const [status, setStatus] = useState<{ type: "success" | "error" | null; message: string }>({
		type: null,
		message: "",
	});

	const footerContacts = [
		{
			label: "Email",
			value: "ralphvescoto@gmail.com",
			href: "mailto:ralphvescoto@gmail.com",
		},
		{
			label: "WhatsApp",
			value: "+63 926 966 3658",
			href: "https://wa.me/639269663658",
		},
		{
			label: "LinkedIn",
			value: "linkedin.com/in/ralph-escoto-4055593b2",
			href: "https://www.linkedin.com/in/ralph-escoto-4055593b2/",
		},
		{
			label: "Location",
			value: "Angeles, Pampanga · Remote Worldwide",
		},
	];

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsLoading(true);
		setStatus({ type: null, message: "" });

		try {
			const res = await fetch("/api/contact", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ name, email, subject, message }),
			});

			const data = await res.json();

			if (!res.ok) {
				throw new Error(data.error || "Failed to send message.");
			}

			setStatus({
				type: "success",
				message: "Message sent! I'll get back to you as soon as possible.",
			});

			setName(""); setEmail(""); setSubject(""); setMessage("");
		} catch (error: any) {
			setStatus({
				type: "error",
				message: error.message || "Something went wrong. Please try again.",
			});
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<section className="py-20 px-4" id="contact">
			<div className="max-w-4xl mx-auto">
				<div className="text-center space-y-4 mb-12">
					<h2 className="text-3xl md:text-4xl font-bold mb-4">
						Let&apos;s Work Together
					</h2>
					<p className="text-slate-400 text-muted-foreground max-w-2xl mx-auto">
						Ready to bring your next project to life? Let&apos;s discuss how my expertise
						in full-stack development and DevOps can help achieve your goals.
					</p>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
					<div className="space-y-6">
						{footerContacts.map((contact) => {
							const IconComponent = contactIconMap[contact.label] || Mail;
							return (
								<Card key={contact.label}>
									<CardContent className="p-6">
										<div className="flex items-center gap-4">
											<IconComponent className="h-5 w-5 text-primary" />
											<div>
												<h4>{contact.label}</h4>
												{contact.href ? (
													<a
														href={contact.href}
														className="text-slate-400 text-muted-foreground hover:text-primary transition-colors"
													>
														{contact.value}
													</a>
												) : (
													<p className="text-slate-400 text-muted-foreground">{contact.value}</p>
												)}
											</div>
										</div>
									</CardContent>
								</Card>
							);
						})}
					</div>

					<Card>
						<CardHeader>
							<CardTitle>Send a Message</CardTitle>
						</CardHeader>
						<CardContent>
							<form onSubmit={handleSubmit} className="space-y-4">
								<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
									<Input
										placeholder="Your Name"
										value={name}
										onChange={(e) => setName(e.target.value)}
										disabled={isLoading}
										required
									/>
									<Input
										placeholder="Your Email"
										type="email"
										value={email}
										onChange={(e) => setEmail(e.target.value)}
										disabled={isLoading}
										required
									/>
								</div>
								<Input
									placeholder="Subject"
									value={subject}
									onChange={(e) => setSubject(e.target.value)}
									disabled={isLoading}
									required
								/>
								<Textarea
									placeholder="Your Message"
									rows={5}
									value={message}
									onChange={(e) => setMessage(e.target.value)}
									disabled={isLoading}
									required
								/>
								{status.message && (
									<div
										className={`p-3 rounded-md text-sm ${status.type === "success"
											? "bg-green-50 text-green-800 border border-green-200"
											: "bg-red-50 text-red-800 border border-red-200"
											}`}
									>
										{status.message}
									</div>
								)}
								<Button
									type="submit"
									className="w-full gap-2"
									disabled={isLoading}
								>
									<Send className="h-4 w-4" />
									{isLoading ? "Sending..." : "Send Message"}
								</Button>
							</form>
						</CardContent>
					</Card>
				</div>
			</div>
		</section>
	);
}

