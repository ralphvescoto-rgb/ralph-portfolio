"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Tag, X } from 'lucide-react';

interface Project {
	title: string;
	role: string;
	desc: string;
	fullDesc?: string[];
	tags: string[];
	link?: { label: string; url: string; icon?: React.ReactNode };
}

const Projects = () => {
	const [selectedProject, setSelectedProject] = useState<Project | null>(null);
	const [visibleCount, setVisibleCount] = useState<number>(6);

	const projects: Project[] = [
		{
			title: "AI-Based Customer Support System",
			role: "AI Engineer",
			desc: "AI-driven solution for automating customer support using natural language processing.",
			fullDesc: [
				"Integrated GPT-4o to handle customer queries and provide contextual responses.",
				"Implemented AI agents for ticket routing and escalation.",
				"Built an intuitive admin interface for monitoring AI interactions.",
				"Integrated with CRM systems to log customer interactions.",
				"Developed a sentiment analysis module to assess customer feedback."
			],
			tags: ["GPT-4o", "AI Agents", "NLP", "CRM Integration", "Backend APIs"],
			link: { label: "aicustomersupport.com", url: "http://www.aicustomersupport.com" }
		},
		{
			title: "Supply Chain Tracker",
			role: "Senior Full Stack Developer",
			desc: "Platform for tracking shipments, managing warehouse operations, and optimizing delivery schedules.",
			fullDesc: [
				"Developed real-time shipment tracking with dynamic updates.",
				"Integrated predictive analytics for optimized delivery routes.",
				"Built an intuitive dashboard for managing orders and stock levels.",
				"Coordinated backend services using Node.js and Express.",
				"Implemented AI-powered recommendation systems for supply chain optimization."
			],
			tags: ["Node.js", "Express", "AI-powered systems", "Dashboard Development"],
			link: { label: "supplychaintracker.com", url: "http://www.supplychaintracker.com" } 
		},
		{
			title: "E-commerce Analytics Dashboard",
			role: "Full Stack Developer",
			desc: "Dashboard that aggregates data from various e-commerce platforms to provide analytics and insights.",
			fullDesc: [
				"Built dashboards using React and Redux to visualize sales data.",
				"Integrated Shopify, WooCommerce, and custom APIs for seamless data aggregation.",
				"Developed custom reporting tools and user role management (RBAC).",
				"Implemented caching using Redis to optimize report generation.",
				"Used GraphQL for querying product data efficiently."
			],
			tags: ["React", "Redux", "GraphQL", "E-commerce", "Redis"],
			link: { label: "ecomanalytics.com", url: "http://www.ecomanalytics.com" } 
		},
		{
			title: "Employee Performance Dashboard",
			role: "Full Stack Developer",
			desc: "Platform for tracking and visualizing employee performance metrics and KPIs.",
			fullDesc: [
				"Built real-time dashboards for tracking individual and team KPIs.",
				"Integrated performance data from HR systems and external APIs.",
				"Developed automated reports for performance reviews.",
				"Implemented custom scoring algorithms for employee evaluation.",
				"Integrated with Slack for performance alerts and notifications."
			],
			tags: ["React", "API Integration", "HR Systems", "Real-time Dashboards"],
			link: { label: "performance-dashboard.com", url: "http://www.performance-dashboard.com" } 
		},
		{
			title: "Subscription Management System",
			role: "Backend Developer",
			desc: "System for managing subscriptions and recurring billing.",
			fullDesc: [
				"Implemented a billing system with Stripe integration for subscription payments.",
				"Built an admin dashboard for managing user subscriptions and billing cycles.",
				"Automated payment reminders and invoices for customers.",
				"Integrated with internal CRM for user management and tracking.",
				"Developed a custom API for subscription status and renewal alerts."
			],
			tags: ["Python", "Django", "Stripe"],
			link: { label: "subscriptionmanagement.com", url: "http://www.subscriptionmanagement.com" } 
		},
		{
			title: "AI-Powered Fraud Detection System",
			role: "Full Stack AI Engineer",
			desc: "AI system for detecting and preventing fraud in financial transactions.",
			fullDesc: [
				"Developed fraud detection algorithms using machine learning models.",
				"Integrated with financial systems via REST APIs for real-time transaction analysis.",
				"Built real-time alerting system for suspicious activity using WebSockets.",
				"Implemented A/B testing framework to fine-tune model performance.",
				"Developed a user interface for administrators to manage and monitor fraud cases."
			],
			tags: ["AI Agents", "REST APIs", "A/B Testing", "Fraud Detection"],
			link: { label: "aifraudprotection.com", url: "http://www.aifraudprotection.com" } 
		},
		{
			title: "AI-Powered Customer Feedback System",
			role: "Full Stack AI Engineer",
			desc: "A system for collecting and analyzing customer feedback through AI.",
			fullDesc: [
				"Developed AI models to analyze sentiment and intent in customer reviews.",
				"Built real-time dashboards for visualizing feedback trends and metrics.",
				"Integrated the system with popular customer feedback platforms (e.g., SurveyMonkey).",
				"Implemented automated reports to help businesses improve their products.",
				"Used Redis to cache frequently accessed feedback data for quick analysis."
			],
			tags: ["NLP", "AI Models", "Redis", "OpenAI API"],
			link: { label: "customerfeedback.ai", url: "http://www.customerfeedback.ai" } 
		},
		{
			title: "Real-Time Collaboration Platform",
			role: "Full Stack Developer",
			desc: "Web-based platform enabling real-time collaboration on documents and projects.",
			fullDesc: [
				"Built collaborative document editing tools using WebSockets for real-time updates.",
				"Integrated file storage and version control for seamless project management.",
				"Developed user authentication and role-based access control (RBAC).",
				"Implemented chat and notifications for team collaboration.",
				"Designed an intuitive UI with React and Material UI."
			],
			tags: ["React", "WebSockets", "RBAC", "Collaboration"],
			link: { label: "realtimecollaboration.com", url: "http://www.realtimecollaboration.com" } 
		},
		{
			title: "Real-Time AI Chatbot Platform",
			role: "AI Engineer",
			desc: "Platform for building and deploying real-time AI-powered chatbots.",
			fullDesc: [
				"Integrated GPT-4o and Claude 3.5 for natural language understanding and response.",
				"Built a real-time chat interface using React and WebSocket for seamless communication.",
				"Implemented CRM integrations for syncing customer interactions and ticketing.",
				"Developed chatbot analytics dashboards to track performance and improve responses.",
				"Automated ticket creation and escalation workflows through AI."
			],
			tags: ["GPT-4o", "React", "WebSocket", "CRM Integration"],
			link: { label: "aichatbots.com", url: "http://www.aichatbots.com" } 
		},
		{
			title: "AI-Driven Supply Chain Optimization",
			role: "Full Stack AI Engineer",
			desc: "Platform for optimizing supply chain management using AI-driven forecasting and analytics.",
			fullDesc: [
				"Built machine learning models for demand forecasting and inventory optimization.",
				"Integrated supply chain data from external APIs (e.g., FedEx, UPS).",
				"Developed a real-time dashboard for monitoring and managing the supply chain.",
				"Implemented AI algorithms for route optimization and delivery predictions.",
				"Used TensorFlow for building predictive models and FastAPI for serving them."
			],
			tags: ["AI Models", "n8n", "TensorFlow", "FastAPI"],
			link: { label: "supplychainai.com", url: "http://www.supplychainai.com" } 
		},
		{
			title: "AI-Powered Marketing Automation",
			role: "AI Engineer",
			desc: "Platform to automate marketing campaigns using AI for customer segmentation and content generation.",
			fullDesc: [
				"Integrated GPT-4o for automatic content generation for email campaigns.",
				"Implemented AI-based customer segmentation and targeting models.",
				"Built real-time analytics dashboards for campaign performance monitoring.",
				"Automated the reporting and email list management processes.",
				"Developed API integrations for popular email marketing platforms."
			],
			tags: ["GPT-4o", "AI Models", "Marketing Automation", "Email Campaigns"],
			link: { label: "aimarketingautomation.com", url: "http://www.aimarketingautomation.com" } 
		},
		{
			title: "Automated Financial Reporting System",
			role: "Backend Developer",
			desc: "Backend system for automating the generation of financial reports.",
			fullDesc: [
				"Designed a flexible financial report generation engine.",
				"Integrated with accounting software (QuickBooks, Xero) via APIs.",
				"Implemented data aggregation from multiple sources using SQL and Python.",
				"Automated monthly and quarterly reporting cycles.",
				"Developed an export system for reports in various formats (PDF, Excel)."
			],
			tags: ["Python", "SQL", "API Integration", "Financial Reporting"],
			link: { label: "financialreports.com", url: "http://www.financialreports.com" } 
		},
		{
			title: "AI-Powered Content Moderation System",
			role: "AI Engineer",
			desc: "Real-time content moderation platform using AI to detect offensive content.",
			fullDesc: [
				"Built NLP and image recognition models to identify inappropriate content.",
				"Integrated system with social media platforms via REST APIs for real-time moderation.",
				"Developed a moderation dashboard for admins to review flagged content.",
				"Used TensorFlow for training and deploying machine learning models.",
			],
			tags: ["NLP", "Python", "TensorFlow", "n8n"],
			link: { label: "contentmoderation.ai", url: "http://www.contentmoderation.ai" } 
		},
		{
			title: "AI-Based Product Recommendation Engine",
			role: "AI Engineer",
			desc: "Engine for providing personalized product recommendations on e-commerce platforms.",
			fullDesc: [
				"Developed collaborative filtering and content-based recommendation algorithms.",
				"Integrated with e-commerce platforms like Shopify and WooCommerce for product data.",
				"Optimized recommendation model using user behavior data from past purchases.",
				"Implemented real-time product recommendations on the homepage using GraphQL.",
				"Built custom reporting tools for performance tracking and optimization."
			],
			tags: ["GPT-4o", "Zapier", "LangChain", "GraphQL"],
			link: { label: "productrecommendations.ai", url: "http://www.productrecommendations.ai" } 
		},
		{
			title: "AI-Based Document Classification",
			role: "AI Engineer",
			desc: "Automated document classification system for organizing business documents.",
			fullDesc: [
				"Built NLP models for text classification and entity extraction.",
				"Integrated the system with cloud storage solutions for document access.",
				"Developed an API to classify new documents as they are uploaded.",
				"Implemented a real-time dashboard to track document processing progress.",
				"Used FastAPI to serve the model for scalable and fast predictions."
			],
			tags: ["NLP", "Machine Learning", "FastAPI", "Document Classification"],
			link: { label: "documentclassifier.ai", url: "http://www.documentclassifier.ai" } 
		},
		{
			title: "AI-Enhanced Marketing Insights Dashboard",
			role: "Full Stack AI Engineer",
			desc: "Dashboard for analyzing marketing campaigns with AI-driven insights.",
			fullDesc: [
				"Developed AI models to analyze customer demographics and campaign performance.",
				"Integrated with Google Ads and Facebook API for importing marketing data.",
				"Built a real-time analytics dashboard using React and WebSockets.",
				"Implemented predictive analytics to forecast campaign ROI.",
				"Integrated automated reporting for campaign metrics.",
			],
			tags: ["AI Models", "Python", "React", "WebSockets"],
			link: { label: "marketinginsights.ai", url: "http://www.marketinginsights.ai" } 
		},
		{
			title: "AI-driven Lead Generation Platform",
			role: "Full Stack Developer",
			desc: "Platform for automating lead generation and scoring using AI models.",
			fullDesc: [
				"Developed AI-based lead scoring model to prioritize high-value leads.",
				"Integrated CRM for seamless lead transfer and tracking.",
				"Built user-friendly dashboards for sales teams to manage leads.",
				"Created custom automation workflows using n8n for lead nurturing.",
				"Implemented advanced reporting and analytics for lead performance."
			],
			tags: ["n8n", "AI Models", "CRM Integration", "Dashboard"],
			link: { label: "aisalesleads.com", url: "http://www.aisalesleads.com" }
		},
		{
			title: "B2B E-commerce Platform",
			role: "Senior Full Stack Developer",
			desc: "E-commerce platform for bulk B2B transactions and custom product configurations.",
			fullDesc: [
				"Designed and developed a custom product configuration tool for bulk orders.",
				"Implemented real-time order tracking and invoicing features.",
				"Integrated payment processing for bulk transactions via custom API.",
				"Developed a client management dashboard for order insights.",
				"Coordinated API integrations for inventory updates and shipping info."
			],
			tags: ["Node.js", "Express", "E-commerce", "API Integration"],
			link: { label: "b2becommerceplatform.com", url: "http://www.b2becommerceplatform.com" } 
		}
	];

	return (
		<section id="projects" aria-label="Featured Software Projects" className="py-20 bg-slate-900/30">
			<div className="container mx-auto px-4 md:px-8">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="mb-12"
				>
					<h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
					<p className="text-slate-400 max-w-2xl">
						A selection of complex enterprise applications and systems I've engineered.
					</p>
				</motion.div>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{projects.slice(0, visibleCount).map((project, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, scale: 0.9 }}
							whileInView={{ opacity: 1, scale: 1 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							whileHover={{ y: -5 }}
							className="bg-slate-800/40 rounded-xl overflow-hidden border border-slate-700/50 hover:border-violet-500/50 group transition-all flex flex-col"
						>
							<div className="h-48 bg-linear-to-br from-slate-800 to-slate-900 flex items-center justify-center p-8 group-hover:from-slate-800 group-hover:to-violet-900/20 transition-colors">
								<div className="text-center">
									<h3 className="text-xl font-bold text-slate-200 mb-1">{project.title}</h3>
									<span className="text-sm text-violet-400 font-medium">{project.role}</span>
								</div>
							</div>

							<div className="p-6 flex flex-col grow">
								<p className="text-slate-400 mb-6 text-sm leading-relaxed">
									{project.desc}
								</p>

								<div className="flex flex-wrap gap-2 mb-6 mt-auto">
									{project.tags.map((tag, i) => (
										<span key={i} className="flex items-center gap-1 text-xs px-2 py-1 bg-slate-900 text-slate-300 rounded border border-slate-700">
											<Tag className="w-3 h-3" />
											{tag}
										</span>
									))}
								</div>

								<button
									onClick={() => setSelectedProject(project)}
									className="w-full mt-2 py-2 rounded-lg bg-slate-700/50 hover:bg-violet-600 hover:text-white text-slate-300 text-sm font-medium transition-all flex items-center justify-center gap-2"
								>
									View Details <ExternalLink className="w-4 h-4" />
								</button>
							</div>
						</motion.div>
					))}
				</div>

				{visibleCount < projects.length && (
					<div className="flex justify-center mt-10">
						<button
							onClick={() => setVisibleCount(prev => Math.min(prev + 3, projects.length))}
							className="px-6 py-3 rounded-lg bg-violet-600 hover:bg-violet-500 text-white text-sm font-medium transition-all"
						>
							Load More
						</button>
					</div>
				)}

				{/* Project Modal */}
				<AnimatePresence>
					{selectedProject && (
						<div className="fixed inset-0 z-50 flex items-center justify-center p-4">
							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								onClick={() => setSelectedProject(null)}
								className="absolute inset-0 bg-black/60 backdrop-blur-sm"
							/>
							<motion.div
								initial={{ opacity: 0, scale: 0.9, y: 20 }}
								animate={{ opacity: 1, scale: 1, y: 0 }}
								exit={{ opacity: 0, scale: 0.9, y: 20 }}
								className="relative bg-slate-900 border border-slate-700 rounded-2xl p-6 md:p-8 max-w-2xl w-full shadow-2xl max-h-[80vh] overflow-y-auto"
							>
								<button
									onClick={() => setSelectedProject(null)}
									className="absolute top-4 right-4 p-2 bg-slate-800 rounded-full hover:bg-slate-700 transition-colors"
								>
									<X className="w-5 h-5 text-slate-400" />
								</button>

								<h3 className="text-2xl font-bold text-white mb-2">{selectedProject.title}</h3>
								<p className="text-violet-400 font-medium mb-6">{selectedProject.role}</p>

								<div className="space-y-4 mb-8">
									<h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Key Responsibilities & Features</h4>
									<ul className="space-y-2">
										{selectedProject.fullDesc?.map((item, i) => (
											<li key={i} className="flex items-start gap-3 text-slate-300">
												<span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-violet-500 shrink-0" />
												<span className="leading-relaxed">{item}</span>
											</li>
										))}
									</ul>
								</div>

								<div className="space-y-4">
									<h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Technologies Used</h4>
									<div className="flex flex-wrap gap-2">
										{selectedProject.tags.map((tag, i) => (
											<span key={i} className="px-3 py-1.5 bg-slate-800 text-slate-300 rounded-md border border-slate-700 text-sm">
												{tag}
											</span>
										))}
									</div>
								</div>


								{selectedProject.link && (
									<div className="space-y-4 mt-8 pt-6 border-t border-slate-800">
										<h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Link</h4>
										<div className="flex flex-wrap gap-3">
										<a
											href={selectedProject.link.url}
											target="_blank"
											rel="noopener noreferrer"
											className="flex items-center gap-2 px-4 py-2 bg-violet-600/10 hover:bg-violet-600/20 text-violet-400 hover:text-violet-300 rounded-lg transition-colors border border-violet-500/20 hover:border-violet-500/40 text-sm font-medium"
										>
											{selectedProject.link.label}
											<ExternalLink className="w-4 h-4" />
										</a>
										</div>
									</div>
								)}
							</motion.div>
						</div>
					)}
				</AnimatePresence>
			</div>
		</section>
	);
};

export default Projects;
