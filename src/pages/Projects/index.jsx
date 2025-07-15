import { useEffect, useState } from "react";
import Carousel from "../../components/Carousel/Carousel";
import projectsData from "../../components/Carousel/projects.json";

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        setProjects(projectsData);
    }, []);

    return (
        <main className="flex-1 w-full flex flex-col items-center justify-center py-12 px-4 gap-20">
            <h1 className="text-4xl font-bold text-accent mt-8">Projetos em Destaque</h1>
            {projects.length > 0 && <Carousel projects={projects} />}
        </main>
    );
}

export default Projects;