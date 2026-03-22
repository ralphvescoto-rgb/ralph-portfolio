"use client";

import { motion } from 'framer-motion';
import { Download, Github, Linkedin, Mail, Package, Phone } from 'lucide-react';
import { Link } from 'react-scroll';
import { ImageWithFallback } from './figma/ImageWithFallback';

const Hero = () => {
    return (
        <section id="home" aria-label="Hero — Introduction" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-20 right-0 w-96 h-96 bg-violet-600/20 rounded-full blur-[100px] -z-10" />
            <div className="absolute bottom-20 left-0 w-72 h-72 bg-pink-600/20 rounded-full blur-[100px] -z-10" />

            <div className="container mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-block px-3 py-1 mb-4 border border-violet-500/30 rounded-full bg-violet-500/10 text-violet-300 text-sm font-medium">
                        Available for work
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                        Hi, I'm <br />
                        <span className="text-gradient">Ralph Escoto</span>
                    </h1>
                    <p className="text-xl text-slate-400 mb-8 max-w-lg leading-relaxed">
                        Senior Full Stack AI Engineer specializing in building scalable production web applications with AI-integrated systems, LLM features, and workflow automation.
                    </p>

                    <div className="flex flex-wrap gap-4 mb-10">
                        <Link to="projects" smooth={true} offset={-100} className="px-8 py-3 bg-violet-600 hover:bg-violet-700 text-white rounded-lg font-medium transition-all shadow-lg shadow-violet-600/20 cursor-pointer">
                            View Work
                        </Link>
                        <a href="/Resume.pdf" download className="px-8 py-3 border border-slate-700 hover:border-violet-500 hover:text-violet-400 text-slate-300 rounded-lg font-medium transition-all flex items-center gap-2 group">
                            <Download className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                            Download CV
                        </a>
                    </div>

                    <div className="flex gap-6" role="list" aria-label="Social profiles">
                        {[
                            { icon: <Phone aria-hidden="true" />, href: 'https://wa.me/639269663658', label: 'Phone' },
                            { icon: <Linkedin aria-hidden="true" />, href: 'https://www.linkedin.com/in/ralph-escoto-4055593b2/', label: 'LinkedIn profile — Ralph Escoto' },
                            { icon: <Mail aria-hidden="true" />, href: 'mailto:ralphvescoto@gmail.com', label: 'Mail' },
                        ].map((social, index) => (
                            <a
                                key={index}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={social.label}
                                role="listitem"
                                className="p-3 bg-slate-800/50 hover:bg-violet-600/20 hover:text-violet-400 text-slate-400 rounded-full transition-all border border-slate-700/50 hover:border-violet-500/50"
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative hidden md:block"
                >
                    <div className="flex justify-center order-1 lg:order-2">
                        <div className="relative">
                            {/* Main Image Container */}
                            <div className="relative z-10 group">
                                <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden bg-linear-to-br from-primary/10 to-secondary/10 backdrop-blur-sm border-4 border-background/50 shadow-2xl">
                                    <ImageWithFallback
                                        src="/images/Ralph.png"
                                        alt="Ralph Full Stack AI Engineer"
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    
                                    {/* Overlay linear */}
                                    <div className="absolute inset-0 bg-linear-to-t from-primary/20 via-transparent to-transparent"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
