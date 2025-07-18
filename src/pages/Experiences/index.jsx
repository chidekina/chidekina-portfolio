import { useState } from "react";

import Container from "../../components/Container";
import ExperiencesList from "../../components/ExperiencesList";

import experinces from "../../components/ExperiencesList/experiences.json";
import ExperienceIcons from "../../components/ExperienceIcons";
const Experiences = () => {
    const [currentStep, setCurrentStep] = useState(0);


    const handleStepClick = (index) => {
        setCurrentStep(index);
    };

    return (
        <Container>
            <div className="flex flex-col md:flex-col items-center justify-center px-2 md:px-8 py-8 md:py-12 w-full">
                <div className="w-full flex flex-col md:flex-col">
                    <div className="block md:hidden mb-8">
                        <ExperienceIcons
                            list={experinces}
                            onClick={handleStepClick}
                            step={currentStep}
                        />
                    </div>
                    <ExperiencesList
                        list={experinces}
                        step={currentStep}
                    />
                    <div className="hidden md:block mt-8">
                        <ExperienceIcons
                            list={experinces}
                            onClick={handleStepClick}
                            step={currentStep}
                        />
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Experiences;
