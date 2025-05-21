import Layout from "../components/Layout";
import {
    CodeBracketIcon,
    Cog6ToothIcon,
    EyeIcon,
} from "@heroicons/react/24/outline";

import { Link } from "react-router-dom";
export default function Home() {

    return (
        <>
            {/* Floating Bubble Layer that scrolls with the page and always starts after Hero */}

            <Layout>
                {/* Hero Section */}
                <section
                    id="hero"
                    className="bg-sky-500 text-white pt-32 py-20 px-6 md:px-12 w-full relative"
                >
                    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
                        <div className="md:w-1/2 mb-10 md:mb-0">
                            <h1 className="text-5xl font-bold mb-4">Bringing Your Ideas to Life</h1>
                            <p className="text-xl mb-6">
                                I build fast, responsive, and professional websites tailored to your business.
                            </p>
                            <Link
                                to="/services"
                                className="bg-white text-sky-600 px-6 py-3 rounded shadow hover:bg-sky-100 transition"
                            >
                                View My Services
                            </Link>
                        </div>
                        <div className="md:w-1/2 flex justify-center">
                            <img
                                src="/mockup2.png"
                                alt="Laptop with example webpage"
                                className="max-w-full rounded shadow-lg"
                            />
                        </div>
                    </div>
                </section>

                {/* Waves */}
                <div className="relative -mt-px">
                    <svg
                        viewBox="0 0 1440 320"
                        className="w-full transform rotate-180 absolute top-0 left-0 z-0"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill="#0ea5e9"
                            fillOpacity="0.7"
                            d="M0,160C120,120,240,80,360,80C480,80,600,120,720,130C840,140,960,100,1080,90C1200,80,1320,120,1380,140L1440,160L1440,320L0,320Z"
                        />
                    </svg>
                    <svg
                        viewBox="0 0 1440 320"
                        className="w-full transform rotate-180 relative z-10"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill="#0ea5e9"
                            fillOpacity="1"
                            d="M0,96C120,120,240,140,360,145C480,150,600,130,720,120C840,110,960,130,1080,140C1200,150,1320,130,1380,120L1440,110L1440,320L0,320Z"
                        />
                    </svg>
                </div>

                {/* About Section */}
                <section className="relative py-20 px-6 md:px-12 bg-white overflow-visible">
                    <div className="relative z-10 max-w-4xl mx-auto text-center">
                        <div className="w-16 h-1 bg-sky-500 mx-auto mb-4 rounded"></div>
                        <h2 className="text-4xl font-bold mb-6">About Me</h2>
                        <p className="text-lg mb-6">
                            I’m Owen, a freelance software engineer passionate about turning ideas into real, working
                            solutions. From fully custom websites and web apps to automation scripts and AI models, I help
                            businesses and creators solve problems with clean, reliable code.
                        </p>
                        <p className="text-lg">
                            Whether you’re launching your first product or improving an existing system, I’m here to help
                            you build something that works, looks great, and delivers value to your users.
                        </p>
                    </div>
                </section>

                {/* Services Section */}
                <section className="relative py-20 px-6 md:px-12 bg-white overflow-visible">
                    <div className="relative z-10 max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl font-bold mb-8">What I Offer</h2>

                        <div className="flex flex-col gap-8">
                            {/* Custom Web Solutions */}
                            <div className="bg-gray-100 text-left px-8 py-6 shadow-lg relative rounded-[50px] border border-sky-100">
                                <div className="flex items-center gap-3 mb-4 text-sky-500">
                                    <CodeBracketIcon className="h-6 w-6" />
                                    <h3 className="text-2xl font-bold">Custom Web Solutions</h3>
                                </div>
                                <p>
                                    Full-stack websites, UX improvements, and performance-focused web development using React
                                    and Node.js.
                                </p>
                            </div>

                            {/* Software Engineering Services */}
                            <div className="bg-gray-100 text-left px-8 py-6 shadow-lg relative rounded-[50px] border border-sky-100">
                                <div className="flex items-center gap-3 mb-4 text-sky-500">
                                    <Cog6ToothIcon className="h-6 w-6" />
                                    <h3 className="text-2xl font-bold">Software Engineering Services</h3>
                                </div>
                                <p>
                                    Automation scripts, compilers, data processors, and custom solutions to optimize
                                    workflows and solve technical challenges.
                                </p>
                            </div>

                            {/* AI & Computer Vision */}
                            <div className="bg-gray-100 text-left px-8 py-6 shadow-lg relative rounded-[50px] border border-sky-100">
                                <div className="flex items-center gap-3 mb-4 text-sky-500">
                                    <EyeIcon className="h-6 w-6" />
                                    <h3 className="text-2xl font-bold">AI & Computer Vision</h3>
                                </div>
                                <p>
                                    Custom AI models for image classification, data labeling, and pipeline development using
                                    deep learning techniques.
                                </p>
                            </div>
                        </div>

                        <div className="mt-10">
                            <Link
                                to="/services"
                                className="bg-sky-500 text-white px-6 py-3 rounded-full shadow hover:bg-sky-600 transition"
                            >
                                See All Services
                            </Link>
                        </div>
                    </div>
                </section>


                {/* Contact Section */}
                <section className="relative py-20 px-6 md:px-12 bg-white overflow-visible">
                    <div className="relative z-10 max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
                        <p className="text-lg max-w-2xl mx-auto mb-6">
                            Let’s bring your ideas to life with custom software solutions.
                        </p>
                        <Link
                            to="/contact"
                            className="bg-sky-500 text-white px-6 py-3 rounded-full shadow hover:bg-sky-600 transition"
                        >
                            Contact me
                        </Link>
                    </div>
                </section>
            </Layout>
        </>
    );
}
