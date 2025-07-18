import { useEffect, useState } from "react";

import Carousel from "../../components/Carousel/Carousel";
import projectsData from "../../components/Carousel/projects.json";
import Container from "../../components/Container";

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        setProjects(projectsData);
    }, []);

    return (
        <Container>
            <div className="flex-1 w-full flex flex-col items-center justify-center py-8 md:py-8 px-2 md:px-4 gap-5 md:gap-20rounded-xl">
                <h1 className="text-3xl md:text-4xl font-bold text-accent mt-4 md:mt-4 text-center">Projetos em Destaque</h1>
                {projects.length > 0 && <Carousel projects={projects} />}
            </div>
        </Container>
    );
}

export default Projects;