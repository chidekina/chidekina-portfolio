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
            <div className="flex flex-col items-center justify-center px-8 py-12">
                <div className="w-full px-8 flex flex-col">
                    <ExperiencesList
                        list={experinces}
                        step={currentStep}
                    />
                </div>
            </div>
            <ExperienceIcons
                list={experinces}
                onClick={handleStepClick}
                step={currentStep}
            />
        </Container>
    );
};

export default Experiences;
