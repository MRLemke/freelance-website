import Layout from "../components/Layout";

export default function Portfolio() {
    return (
        <Layout>
            <section className="py-20 px-6 md:px-12 text-center bg-white">
                <div className="max-w-2xl mx-auto">
                    <h1 className="text-4xl font-bold mb-6">Portfolio</h1>
                    <p className="text-lg mb-8">
                        Interested in my previous work? Take a look!
                    </p>
                    <a
                        href="https://your-portfolio-url.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-sky-500 text-white px-6 py-3 rounded shadow hover:bg-sky-600 transition"
                    >
                        Visit My Portfolio
                    </a>
                </div>
            </section>
        </Layout>
    );
}
