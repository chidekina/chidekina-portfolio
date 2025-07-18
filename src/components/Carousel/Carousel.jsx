import { useState } from "react";
import useWindowSize from "../../hooks/useWindowSize";
import ArrowRight from "./Arrows/ArrowRight";
import ArrowLeft from "./Arrows/ArrowLeft";



const Carousel = ({ projects }) => {
    // Força re-render ao mudar o tamanho da tela
    const { width } = useWindowSize();
    const isMobile = width < 768;
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

    const { image, title, description, path } = projects[current];

    return (
        <div className={`${isMobile ? 'relative min-h-[340px]' : 'flex'} flex items-center justify-center w-full max-w-4xl mx-auto px-2 md:px-0`}>
            {isMobile ? (
                <>
                    <button
                        onClick={prev}
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-1 transition-colors text-white hover:text-accent bg-black/30 rounded-full"
                        style={{ fontSize: '1.5rem' }}
                    >
                        <ArrowLeft />
                    </button>
                    <a href={path} target="_blank" rel="noopener noreferrer" className="flex-1 flex justify-center">
                        <div className={`flex flex-col bg-secondary rounded-xl shadow-lg overflow-hidden w-full max-w-md min-h-[320px] transition-opacity duration-300 ${fade ? 'opacity-100' : 'opacity-0'}`}>
                            <img src={image} alt={title} className="w-full h-48 object-cover flex-shrink-0 min-h-48 max-h-48" />
                            <div className="flex flex-col justify-center p-4 text-left w-full">
                                <h3 className="text-xl font-bold text-accent mb-2">{title}</h3>
                                <p className="text-white text-sm">{description}</p>
                            </div>
                        </div>
                    </a>
                    <button
                        onClick={next}
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-1 transition-colors text-white hover:text-accent bg-black/30 rounded-full"
                        style={{ fontSize: '1.5rem' }}
                    >
                        <ArrowRight />
                    </button>
                </>
            ) : (
                <>
                    <button
                        onClick={prev}
                        className="p-2 transition-colors text-white hover:text-accent"
                        style={{ fontSize: '1.5rem' }}
                    >
                        <ArrowLeft />
                    </button>
                    <a href={path} target="_blank" rel="noopener noreferrer" className="flex-1 flex justify-center">
                        <div className={`flex flex-row bg-secondary rounded-xl shadow-lg overflow-hidden w-full max-w-3xl transition-opacity duration-300 ${fade ? 'opacity-100' : 'opacity-0'}`}>
                            <img src={image} alt={title} className="w-72 h-72 object-cover flex-shrink-0" />
                            <div className="flex flex-col justify-center p-8 text-left w-full">
                                <h3 className="text-2xl font-bold text-accent mb-2">{title}</h3>
                                <p className="text-white text-md">{description}</p>
                            </div>
                        </div>
                    </a>
                    <button
                        onClick={next}
                        className="p-2 transition-colors text-white hover:text-accent"
                        style={{ fontSize: '1.5rem' }}
                    >
                        <ArrowRight />
                    </button>
                </>
            )}
        </div>
    );
};

export default Carousel;
