import Container from "../../components/Container";
import SocialLinks from "../../components/SocialLinks";

import socialLinks from "../../components/SocialLinks/social.json";
import photo from "../../assets/experience-photo.jpg";

const About = () => {
    return (
        <Container flexDirection="flex-row">
            <div className="pl-18 py-12 w-1/3">
                <img
                    className="w-sm rounded-full border-solid border-4 border-accent h-fit"
                    src={photo}
                    alt="Foto palestrando" />
            </div>
            <div className="flex flex-col justify-center items-center px-10 gap-8 text-center w-2/3">
                <h1 className="text-[1.3rem] font-bold text-accent">Desenvolvedor Full Stack | Professor | Gestor de Comunidades | Voluntário</h1>
                <p>
                    Com uma sólida base em <span className="font-bold text-accent">Comunicação </span>, trago uma perspectiva única para o desenvolvimento tecnológico, destacando-me na <span className="font-bold text-accent">resolução de problemas</span> e no <span className="font-bold text-accent">aprimoramento de habilidades sociais.</span> Sou um <span className="font-bold text-accent">entusiasta da tecnologia</span> e estou constantemente buscando novos desafios e aprofundamento em estudos que impulsionam a inovação.
                </p>
                <p className="text-tertiary font-bold">
                    Explore meu portfólio para conhecer meus projetos e como posso contribuir para o seu próximo desafio!
                </p>
                <h2 className="font-bold text-xl">Conecte-se comigo:</h2>
                <SocialLinks list={socialLinks} />
            </div>
        </Container>
    );
}

export default About;