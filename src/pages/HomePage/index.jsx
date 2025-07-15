import profileImage from "../../assets/profile-image.png"
import Stacks from "../../components/Stacks";
const HomePage = () => {
    return (
        <main className="flex-1 bg-primary w-full flex gap-24 pt-12 pr-8" style={{ minHeight: '0' }}>
            <img
                src={profileImage}
                alt="Imagem do Perfil"
                className="w-92 flex-shrink-0 object-cover object-right"
                style={{ aspectRatio: 'auto', maxHeight: '80vh' }}
            />
            <div className="flex-1 flex flex-col mt-12 gap-2 min-w-0">
                <h1 className="text-4xl leading-tight">Bem vindo ao meu Portfolio</h1>
                <h1 className="text-6xl leading-tight">Eu sou o <span className="font-bold text-accent">Cesar Hideki</span></h1>
                <h1 className="text-4xl leading-tight">Full Stack Developer</h1>
                <Stacks />
            </div>
        </main>
    );
}

export default HomePage;