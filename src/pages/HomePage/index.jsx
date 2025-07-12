import profileImage from "../../assets/profile-image.png"
import Stacks from "../../components/Stacks";
const HomePage = () => {
    return (
        <main className=" flex-1 bg-primary w-full flex gap-24 pt-12">
            <img
                src={profileImage}
                alt="Imagem do Perfil"
                className="overflow-hidden w-92"
            />
            <div className="flex-1 flex flex-col mt-12 gap-2">
                <h1 className="text-4xl">Bem vindo ao meu Portfolio</h1>
                <h1 className="text-6xl">Eu sou o <span className="font-bold text-accent">Cesar Hideki</span></h1>
                <h1 className="text-4xl">FullStack Developer</h1>
                <Stacks />
            </div>
        </main>
    );
}

export default HomePage;