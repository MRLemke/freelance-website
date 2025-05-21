import { useState } from "react";
import Layout from "../components/Layout";
export default function Contact() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:5000/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const result = await response.json();
            alert(result.message);
        } catch (error) {
            console.error("Error sending message:", error);
            alert("Something went wrong. Please try again later.");
        }

        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <Layout>
        <div className="max-w-xl mx-auto p-8">
            <h1 className="text-3xl font-bold mb-6">Contact Me</h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="p-2 border rounded"
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="p-2 border rounded"
                />
                <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="p-2 border rounded h-32"
                />
                <button type="submit" className="p-2 bg-blue-500 text-white rounded">
                    Send Message
                </button>
            </form>
        </div>
        </Layout>
    );
}