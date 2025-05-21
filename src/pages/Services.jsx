import Layout from "../components/Layout";
import {
    CodeBracketIcon,
    Cog6ToothIcon,
    EyeIcon,
    RocketLaunchIcon,
} from "@heroicons/react/24/outline";
//eslint-disable-next-line
import { motion } from "framer-motion";

export default function Services() {
    const services = [
        {
            icon: <CodeBracketIcon className="h-6 w-6" />,
            title: "Custom Web Solutions",
            desc: "Full-stack websites using React and Node.js. Designed from scratch or rebuilt to match your brand and performance goals.",
            note: "Includes responsive design, accessibility, and optional CMS integration.",
            delay: 0.2,
        },
        {
            icon: <Cog6ToothIcon className="h-6 w-6" />,
            title: "Software Engineering Services",
            desc: "Automation scripts, compilers, data tools, and backend logic. I can help streamline workflows and solve custom technical problems.",
            note: "Languages: JavaScript, Python, C++, Bash.",
            delay: 0.4,
        },
        {
            icon: <EyeIcon className="h-6 w-6" />,
            title: "AI & Computer Vision",
            desc: "Models and pipelines for classifying images, analyzing datasets, and automating visual tasks. Built with PyTorch or TensorFlow.",
            note: "Used in projects involving bulk image categorization and detection.",
            delay: 0.6,
        },
        {
            icon: <RocketLaunchIcon className="h-6 w-6" />,
            title: "UX & Performance Tuning",
            desc: "Audit and improve existing apps or websites for usability and speed, or just looks!. Focus on core web vitals and improving the user experience.",
            note: "Tools: Lighthouse, DevTools, Figma for mockups.",
            delay: 0.8,
        },
    ];

    return (
        <Layout>
            <section className="relative py-20 px-6 md:px-12 bg-white overflow-hidden">
                <div className="absolute inset-0 -z-10 pointer-events-none">
                    <div className="absolute top-10 left-10 w-32 h-32 bg-sky-100 rounded-full blur-xl opacity-30"></div>
                    <div
                        className="absolute top-1/3 right-20 w-24 h-24 bg-sky-100 rounded-full blur-lg opacity-20"></div>
                    <div
                        className="absolute bottom-10 left-1/2 w-20 h-20 bg-sky-100 rounded-full blur-lg opacity-20"></div>
                    <div
                        className="absolute bottom-24 right-10 w-36 h-36 bg-sky-100 rounded-full blur-2xl opacity-30"></div>
                </div>
                <div className="max-w-4xl mx-auto text-center mb-12">
                    <h1 className="text-4xl font-bold mb-4">My Services</h1>
                    <p className="text-lg text-gray-700">
                        I specialize in building custom software that’s fast, scalable, and user-focused.
                        Below are some of the services I offer.
                    </p>
                </div>

                <div className="flex flex-col gap-10 max-w-2xl mx-auto">
                    {services.map((service, idx) => (
                        <motion.div
                            key={idx}
                            initial={{opacity: 0, y: 40}}
                            whileInView={{opacity: 1, y: 0}}
                            viewport={{once: true}}
                            transition={{duration: 0.6, delay: service.delay}}
                            className="bg-gray-100 text-left px-8 py-6 shadow-lg relative rounded-[50px] border border-sky-100"
                            style={{
                                boxShadow: "0 10px 20px rgba(0,0,0,0.05)",
                            }}
                        >
                            <div className="flex items-center gap-3 mb-4 text-sky-500">
                                {service.icon}
                                <h2 className="text-2xl font-bold">{service.title}</h2>
                            </div>
                            <p className="mb-2">{service.desc}</p>
                            <p className="text-sm text-gray-500">{service.note}</p>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center mt-16">
                    <a
                        href="/contact"
                        className="bg-sky-500 text-white px-6 py-3 rounded-full shadow hover:bg-sky-600 transition"
                    >
                        Contact Me About a Project
                    </a>
                </div>
            </section>

        </Layout>
    );
}
