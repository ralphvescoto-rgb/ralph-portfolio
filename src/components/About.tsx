"use client";

import { motion } from 'framer-motion';
import { Database, Globe, Server, Cpu, Brain, Settings } from 'lucide-react';

const About = () => {
    const skills = [
        {
            category: "Automation & Orchestration",
            icon: <Settings className="w-6 h-6 text-slate-400" />,
            items: ["n8n", "Zapier", "Webhook Architecture", "ETL Pipelines", "GHL", "HubSpot", "Salesforce", "15+ API platforms"]
        },
        {
            category: "Backend & APIs",
            icon: <Brain className="w-6 h-6 text-amber-300" />,
            items: ["GPT-4o", "Claude 3.5/4", "Anthropic API", "OpenAI API", "Prompt Engineering", "LangChain", "AI Agents", "Microservices"]
        },
        {
            category: "Frontend Development",
            icon: <Globe className="w-6 h-6 text-violet-400" />,
            items: ["React", "Next.js", "TypeScript", "Vue.js", "WebSockets", "Tailwind CSS", "SSE", "Responsive Design", "RBAC Dashboards"]
        },
        {
            category: "Backend & APIs",
            icon: <Server className="w-6 h-6 text-pink-400" />,
            items: ["Node.js/Express", "FastAPI", "Django", "Flask", "Python", "RESTful APIs", "GraphQL", "Microservices", "Async/Celery", "Event-Driven"]
        },
        {
            category: "Database & Cloud",
            icon: <Database className="w-6 h-6 text-blue-400" />,
            items: ["Pinecone", "Weaviate", "FAISS", "MongoDB", "Redis", "MySQL", "PostgreSQL", "Deployment"]
        },
        {
            category: "DevOps & AI Dev.",
            icon: <Cpu className="w-6 h-6 text-emerald-400" />,
            items: ["Git/GitHub", "Postman", "CI/CD", "Performance Optimization", "Scalable Architecture", "AWS", "Docker", "Kubernetes", "MLflow", "Claude Code", "Cursor", "Replit"]
        }
    ];

    return (
        <section id="about" aria-label="About Ralph Escoto" className="py-20 bg-slate-900/30 relative">
            <div className="container mx-auto px-4 md:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
                    <p className="text-lg text-slate-400 leading-relaxed">
                        Senior Full Stack AI Engineer with 7+ years building production systems
                        end-to-end, from React/TypeScript frontends and FastAPI backends to
                        LLM-powered features, RAG pipelines, and AI-integrated workflow
                        automation. I don't just "add AI" to apps; I architect how AI sits in the system:
                        which model handles what, how prompts stay reliable at scale, where
                        automation replaces manual work, and how all of it holds up in production.
                        Whether the stack uses Claude API, OpenAI, voice AI, or multi-agent
                        orchestration, I've built it and shipped it to real users.<br/>
                        <span className='font-bold text-slate-300'>Core Value Proposition:</span> Deliver production-ready, scalable web
                        applications through clean architecture, API Design excellence, and
                        comprehensive full stack expertise from database to UI

                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-slate-800/40 p-6 rounded-xl border border-slate-700/50 hover:border-violet-500/50 transition-colors group"
                        >
                            <div className="mb-4 bg-slate-900/50 w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                                {skill.icon}
                            </div>
                            <h3 className="text-xl font-semibold mb-4 text-slate-200">{skill.category}</h3>
                            <div className="flex flex-wrap gap-2">
                                {skill.items.map((item, i) => (
                                    <span key={i} className="text-sm px-2 py-1 bg-slate-700/50 text-slate-300 rounded hover:text-white transition-colors">
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
