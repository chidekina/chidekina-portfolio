import { useEffect, useState } from "react";

const ExperiencesList = ({ list, step }) => {
    const [fadeState, setFadeState] = useState('in');
    const [displayedStep, setDisplayedStep] = useState(step);

    useEffect(() => {
        if (step !== displayedStep) {
            setFadeState('out');
            const timeout = setTimeout(() => {
                setDisplayedStep(step);
                setFadeState('in');
            }, 300);
            return () => clearTimeout(timeout);
        }
    }, [step, displayedStep]);

    const currentCategory = list[displayedStep];

    return (
        <div className={`text-center mb-6 transition-opacity duration-300 ${fadeState === 'in' ? 'opacity-100' : 'opacity-0'}`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-accent">{currentCategory.title}</h2>
            <div className="text-base md:text-lg leading-relaxed max-w-4xl mx-auto px-2 md:px-4 min-h-24 flex items-center justify-center">
                <ul className="flex flex-col w-full max-w-4xl space-y-3 pt-1 text-center list-disc pl-6 md:pl-40 gap-2">
                    {currentCategory.experiences.map(achievement => (
                        <li key={achievement.id} className="text-left px-2 md:px-0">
                            <div className="font-bold text-tertiary text-base md:text-lg mb-1">{achievement.name}</div>
                            <div className="text-white leading-relaxed text-xs md:text-sm">{achievement.description}</div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ExperiencesList;