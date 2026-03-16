"use client";

import { Github, Linkedin, Package, Code2 } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer
            role="contentinfo"
            aria-label="Site footer"
            className="py-10 border-t border-slate-800 bg-slate-950"
        >
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex flex-col items-center justify-between gap-4">

                    {/* Brand */}
                    <div className="flex items-center gap-2">
                        <Code2 className="text-violet-500 w-5 h-5" aria-hidden="true" />
                        <span className="font-bold text-slate-300">
                            Ralph<span className="text-violet-500">.</span>
                        </span>
                    </div>
                    <div className='text-slate-600'>Software Engineer</div>
                    {/* Copyright */}
                    <p className="text-slate-600 text-sm">
                        <span aria-label={`Copyright ${currentYear} Ralph Escoto`}>
                            &copy; {currentYear}{" "}
                            <span className="text-slate-500 font-medium">Ralph Escoto</span>
                            . All rights reserved.
                        </span>
                    </p>
                </div>

                {/* SEO: Hidden but accessible description for crawlers */}
                <p className="sr-only">
                    Ralph Escoto is a Full Stack Developer based in Bangalore, India.
                    Specializing in React, Next.js, Node.js, TypeScript, and enterprise web application development.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
