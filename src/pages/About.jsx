import Layout from "../components/Layout";

import FloatingBubble from "../components/FloatingBubble";

export default function About() {

    return (


            <Layout>
                <section className="relative py-20 px-6 md:px-12 bg-white overflow-visible z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl font-bold mb-6">About Me</h1>
                        <img
                            src="/src/assets/about-photo.jpg"
                            alt="Owen Donohue headshot"
                            className="w-40 h-40 mx-auto mb-6 rounded-full object-cover shadow-lg"
                        />
                        <p className="text-lg mb-4">
                            I'm Owen Donohue, a recent Computer Science graduate from Sonoma State University. I have a passion
                            for building things — whether it's websites, software tools, or fun projects that challenge how I think.
                        </p>
                        <p className="text-lg mb-4">
                            I love learning, experimenting with new technologies, and solving real-world problems with clean code.
                            Beyond the screen, you’ll often find me hiking through California’s trails or playing jazz on my trumpet.
                        </p>
                        <p className="text-lg">
                            Whether it’s developing apps, fine-tuning user experiences, or creating something from scratch,
                            I’m always eager to take on the next creative challenge.
                        </p>
                    </div>
                </section>
            </Layout>
        
    );
}
