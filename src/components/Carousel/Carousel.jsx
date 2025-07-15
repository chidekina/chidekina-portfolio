import { useState } from "react";
import ArrowRight from "./Arrows/ArrowRight";
import ArrowLeft from "./Arrows/ArrowLeft";



const Carousel = ({ projects }) => {
    const [current, setCurrent] = useState(0);
    const [fade, setFade] = useState(true);
    const total = projects.length;

    const prev = () => {
        setFade(false);
        setTimeout(() => {
            setCurrent((prev) => (prev - 1 + total) % total);
            setFade(true);
        }, 200);
    };
    const next = () => {
        setFade(false);
        setTimeout(() => {
            setCurrent((prev) => (prev + 1) % total);
            setFade(true);
        }, 200);
    };

    const { image, title, description } = projects[current];

    return (
        <div className="flex items-center justify-center gap-12 w-full max-w-4xl mx-auto">
            <button
                onClick={prev}
                className="p-2 transition-colors text-white hover:text-accent"
            >
                <ArrowLeft />
            </button>
            <div className={`flex bg-secondary rounded-xl shadow-lg overflow-hidden w-full max-w-2xl transition-opacity duration-300 ${fade ? 'opacity-100' : 'opacity-0'}`}>
                <img src={image} alt={title} className="w-64 h-64 object-cover flex-shrink-0" />
                <div className="flex flex-col justify-center p-8 text-left w-full">
                    <h3 className="text-2xl font-bold text-accent mb-2">{title}</h3>
                    <p className="text-white text-md">{description}</p>
                </div>
            </div>
            <button
                onClick={next}
                className="p-2 transition-colors text-white hover:text-accent"
            >
                <ArrowRight />
            </button>
        </div>
    );
};

export default Carousel;
