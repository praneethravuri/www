import { data } from "@/app/data/resume";

export function About() {
    return (
        <section id="about" className="py-20 max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-serif mb-8 text-neutral-200">About Me</h2>
            <div className="prose prose-invert prose-lg text-neutral-400 max-w-none">
                <p className="leading-relaxed">
                    {data.about}
                </p>
            </div>
        </section>
    );
}
