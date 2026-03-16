"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Calendar, ChevronDown, ChevronUp } from "lucide-react";

const Experience = () => {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(0); // First item expanded by default

    const toggleExpand = (index: number) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    const jobs = [
        {
            role: "Senior Full Stack AI Engineer & Automation Architect",
            company: "Frequency Digital | Bali, Indonesia (Remote)",
            period: "April 2022 - Dec 2025",
            tech: ["React", "TypeScript", "Node.js", "FastAPI", "Python", "GPT-4o", "Claude 3.5", "AI Agents", "n8n", "AWS", "Docker", "API Design"],
            points: [
                "Built full stack web applications with React/TypeScript frontends and FastAPI/Python backends, integrating GPT-4o and Claude 3.5 directly into core product features — serving 50K+ monthly users at <500ms average latency",
                "Designed and implemented RAG systems (Pinecone vector DB + semantic chunking) that improved AI response accuracy by 45%, replacing hallucination-prone vanilla LLM calls with grounded, document-aware responses",
                "Architected n8n-first automation layer connecting AI agents, CRMs, and internal APIs through event-driven workflows — replaced tightly coupled code and cut manual operations by 85%",
                "Built production voice AI systems (Retell AI, VAPI, Twilio) processing 1,000+ daily calls, with full pipeline: speech-to-text, intent classification, LLM response, sentiment analysis, and CRM sync",
                "Developed admin dashboards with real-time WebSocket data, RBAC, audit logs, and live analytics for internal teams managing AI agent performance and conversion metrics",
                "Implemented ML inference infrastructure with FastAPI model serving, Redis caching, and load balancing handling 10K+ daily API calls with A/B testing framework",
                "Created reusable AI architecture templates adopted across 3 client implementations — reduced onboarding and deployment time from 2 weeks to 3 days",
                "Team Collaboration: architectural decisions, code reviews, vendor evaluation, technical roadmap, and stakeholder communication"
            ],
        },
        {
            role: "Full Stack AI Engineer",
            company: "Leads2Closings | Florida, US (Remote)",
            period: "July 2019 – Feb 2022",
            tech: ["React", "Django", "FastAPI", "GraphQL", "FAISS", "Recommendation Engine", "Stripe", "Webhooks", "A/B Testing", "PostgreSQL", "Redis"],
            points: [
                "Built full stack SaaS applications with Django/FastAPI backend and React frontend, including RAG pipeline for internal knowledge base (FAISS + GPT-3.5) that cut support ticket resolution time by 40%",
                "Implemented recommendation engine (collaborative filtering + matrix factorization via scikit-learn) improving user engagement by 25%",
                "Optimized PostgreSQL through strategic indexing + Redis caching layer, reducing query latency by 70% and database load by 60%",
                "Designed A/B testing framework for ML model evaluation with statistical significance testing and automated dashboards",
                "Integrated Stripe webhook automation handling $2M+ ARR in subscription billing and payment processing",
                "Built internal admin dashboard with RBAC, audit logging, and custom reporting serving 200+ internal users",
            ],
        },
        {
            role: "Freelance Full Stack Developer",
            company: "Upwork | Freelancer | Fiverr | Guru (Remote)",
            period: "Aug 2018 – June 2019",
            tech: ["Flask", "PostgreSQL", "SQLAlchemy", "Collaborative Filtering", "REST APIs"],
            points: [
                "Completed 25+ client projects: REST APIs, data pipelines, backend systems, and early ML automation for startups and solo founders using Flask, PostgreSQL, and Celery",
                "Delivered recommendation engine prototype using scikit-learn and collaborative filtering for e-commerce client; maintained 5-star ratings across platforms",
                "Delivered recommendation engine prototype using scikit-learn and collaborative filtering algorithms for e-commerce client"
            ],
        },
    ];

    return (
        <section id="experience" aria-label="Professional Experience" className="py-20 relative">
            <div className="container mx-auto px-4 md:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Professional Experience
                    </h2>
                    <div className="w-20 h-1 bg-violet-500 rounded-full"></div>
                </motion.div>

                <div className="relative border-l-2 border-slate-800 ml-4 md:ml-10 space-y-8">
                    {jobs.map((job, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative pl-8 md:pl-12"
                        >
                            {/* Timeline Dot */}
                            <div className="absolute -left-2.25 top-0 w-4 h-4 rounded-full bg-slate-900 border-2 border-violet-500 z-10" />

                            <div
                                className="bg-slate-800/20 rounded-xl border border-slate-700/50 p-6 cursor-pointer hover:bg-slate-800/40 transition-colors"
                                onClick={() => toggleExpand(index)}
                            >
                                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-100">
                                            {job.role}
                                        </h3>
                                        <p className="text-violet-400 font-medium text-lg">
                                            {job.company}
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-slate-500 bg-slate-900/50 px-3 py-1.5 rounded-full whitespace-nowrap">
                                        <Calendar className="w-4 h-4" />
                                        {job.period}
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {job.tech.map((t, i) => (
                                        <span
                                            key={i}
                                            className="text-xs px-2 py-1 rounded-full border border-slate-700 bg-slate-900/30 text-slate-400"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                {/* Always visible brief or first item? No, let's just toggle the list */}
                                <div className="flex items-center gap-2 text-sm text-slate-400 font-medium mt-2">
                                    {expandedIndex === index ? (
                                        <>
                                            Hide Responsibilities <ChevronUp className="w-4 h-4" />
                                        </>
                                    ) : (
                                        <>
                                            View Responsibilities <ChevronDown className="w-4 h-4" />
                                        </>
                                    )}
                                </div>

                                <AnimatePresence>
                                    {expandedIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="overflow-hidden"
                                        >
                                            <ul className="mt-4 space-y-3 pt-4 border-t border-slate-700/50">
                                                {job.points.map((point, i) => (
                                                    <li
                                                        key={i}
                                                        className="flex items-start gap-3 text-slate-300 text-sm leading-relaxed"
                                                    >
                                                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-violet-500 shrink-0" />
                                                        <span>{point}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
