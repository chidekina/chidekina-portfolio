import { useState, useEffect } from "react";
import Container from "../../components/Container";
import SocialLinks from "../../components/SocialLinks";

import socialLinks from "../../components/SocialLinks/social.json";
import photo from "../../assets/experience-photo.jpg";

const About = () => {
    const [showPhoto, setShowPhoto] = useState(false);
    const [showTitle, setShowTitle] = useState(false);
    const [showFirstParagraph, setShowFirstParagraph] = useState(false);
    const [showSecondParagraph, setShowSecondParagraph] = useState(false);
    const [showConnectTitle, setShowConnectTitle] = useState(false);
    const [showSocialLinks, setShowSocialLinks] = useState(false);

    useEffect(() => {
        const sequence = [
            { action: () => setShowPhoto(true), delay: 200 },
            { action: () => setShowTitle(true), delay: 600 },
            { action: () => setShowFirstParagraph(true), delay: 1000 },
            { action: () => setShowSecondParagraph(true), delay: 1400 },
            { action: () => setShowConnectTitle(true), delay: 1800 },
            { action: () => setShowSocialLinks(true), delay: 2200 },
        ];

        sequence.forEach(({ action, delay }) => {
            setTimeout(action, delay);
        });
    }, []);
    return (
        <Container flexDirection="flex-col md:flex-row">
            <div className="w-full md:w-1/3 flex justify-center items-center py-8 md:py-12">
                <img
                    className={`w-40 h-40 md:w-sm md:h-auto rounded-full border-solid border-4 border-accent transition-all duration-700 ease-out hover:scale-105 hover:shadow-2xl hover:border-white ${showPhoto
                        ? 'transform translate-x-0 opacity-100'
                        : 'transform -translate-x-full opacity-0'
                        }`}
                    src={photo}
                    alt="Foto palestrando" />
            </div>
            <div className="w-full md:w-2/3 flex flex-col justify-center items-center px-4 md:px-10 gap-6 md:gap-8 text-center">
                <h1 className={`text-xl md:text-[1.3rem] font-bold text-accent transition-all duration-700 ease-out ${showTitle
                    ? 'transform translate-y-0 opacity-100'
                    : 'transform translate-y-8 opacity-0'
                    }`}>
                    Desenvolvedor Full Stack | Professor | Gestor de Comunidades | Voluntário
                </h1>
                <p className={`transition-all duration-700 ease-out ${showFirstParagraph
                    ? 'transform translate-y-0 opacity-100'
                    : 'transform translate-y-8 opacity-0'
                    }`}>
                    Com uma sólida base em <span className="font-bold text-accent">Comunicação </span>, trago uma perspectiva única para o desenvolvimento tecnológico, destacando-me na <span className="font-bold text-accent">resolução de problemas</span> e no <span className="font-bold text-accent">aprimoramento de habilidades sociais.</span> Sou um <span className="font-bold text-accent">entusiasta da tecnologia</span> e estou constantemente buscando novos desafios e aprofundamento em estudos que impulsionam a inovação.
                </p>
                <p className={`text-tertiary font-bold transition-all duration-700 ease-out ${showSecondParagraph
                    ? 'transform translate-y-0 opacity-100'
                    : 'transform translate-y-8 opacity-0'
                    }`}>
                    Explore meu portfólio para conhecer meus projetos e como posso contribuir para o seu próximo desafio!
                </p>
                <h2 className={`font-bold text-lg md:text-xl transition-all duration-700 ease-out ${showConnectTitle
                    ? 'transform translate-y-0 opacity-100'
                    : 'transform translate-y-8 opacity-0'
                    }`}>
                    Conecte-se comigo:
                </h2>
                <div className={`transition-all duration-700 ease-out ${showSocialLinks
                    ? 'transform translate-y-0 opacity-100'
                    : 'transform translate-y-12 opacity-0'
                    }`}>
                    <SocialLinks list={socialLinks} />
                </div>
            </div>
        </Container>
    );
}

export default About;