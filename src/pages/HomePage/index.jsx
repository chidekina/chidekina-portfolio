import { React, useState, useEffect } from "react";
import profileImage from "../../assets/profile-image.png"
import Stacks from "../../components/Stacks";
import Container from "../../components/Container";

const HomePage = () => {
    const [displayedText1, setDisplayedText1] = useState('');
    const [displayedText2, setDisplayedText2] = useState('');
    const [displayedName, setDisplayedName] = useState('');
    const [currentIndex1, setCurrentIndex1] = useState(0);
    const [currentIndex2, setCurrentIndex2] = useState(0);
    const [currentIndex3, setCurrentIndex3] = useState(0);
    const [showSecondLine, setShowSecondLine] = useState(false);
    const [showName, setShowName] = useState(false);
    const [showTitle, setShowTitle] = useState(false);
    const [showPhoto, setShowPhoto] = useState(false);

    const text1 = "Bem vindo ao meu Portfolio";
    const text2 = "Eu sou o ";
    const nameText = "Cesar Hideki";

    useEffect(() => {
        if (currentIndex1 < text1.length) {
            const timeout = setTimeout(() => {
                setDisplayedText1(prev => prev + text1[currentIndex1]);
                setCurrentIndex1(prev => prev + 1);
            }, 100);
            return () => clearTimeout(timeout);
        } else if (!showSecondLine) {
            setShowSecondLine(true);
        }
    }, [currentIndex1, text1, showSecondLine]);

    useEffect(() => {
        if (showSecondLine && currentIndex2 < text2.length) {
            const timeout = setTimeout(() => {
                setDisplayedText2(prev => prev + text2[currentIndex2]);
                setCurrentIndex2(prev => prev + 1);
            }, 100);
            return () => clearTimeout(timeout);
        } else if (showSecondLine && currentIndex2 >= text2.length && !showName) {
            setShowName(true);
        }
    }, [currentIndex2, text2, showSecondLine, showName]);

    useEffect(() => {
        if (showName && currentIndex3 < nameText.length) {
            const timeout = setTimeout(() => {
                setDisplayedName(prev => prev + nameText[currentIndex3]);
                setCurrentIndex3(prev => prev + 1);
            }, 100);
            return () => clearTimeout(timeout);
        } else if (showName && currentIndex3 >= nameText.length && !showTitle) {
            setTimeout(() => {
                setShowTitle(true);
            }, 500); // pequena pausa antes de mostrar o título
        }
    }, [currentIndex3, nameText, showName, showTitle]);

    useEffect(() => {
        setTimeout(() => setShowPhoto(true), 200);
    }, []);

    return (
        <Container flexDirection="flex-row" gap="gap-24">
            <img
                src={profileImage}
                alt="Imagem do Perfil"
                className={`w-92 h-full flex-shrink-0 object-cover object-right transition-all duration-1000 ease-out rounded-2xl shadow-lg
                    ${showPhoto ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 -translate-x-10 scale-95'}`}
                style={{ aspectRatio: 'auto' }}
            />
            <div className="flex-1 flex flex-col pt-20 gap-2 min-w-0">
                <h1 className="text-4xl leading-tight">
                    {displayedText1}
                    {currentIndex1 < text1.length && <span className="animate-pulse">|</span>}
                </h1>
                <h1 className="text-6xl leading-tight">
                    {displayedText2}
                    {showName && (
                        <span className="font-bold text-accent">{displayedName}</span>
                    )}
                    {showSecondLine && currentIndex2 < text2.length && <span className="animate-pulse">|</span>}
                    {showName && currentIndex3 < nameText.length && <span className="animate-pulse">|</span>}
                </h1>
                <h1 className={`text-4xl leading-tight transition-opacity duration-1000 ${showTitle ? 'opacity-100' : 'opacity-0'}`}>
                    Full Stack Developer
                </h1>
                <div className={`transition-opacity duration-1000 delay-300 ${showTitle ? 'opacity-100' : 'opacity-0'}`}>
                    <Stacks />
                </div>
            </div>
        </Container>
    );
}

export default HomePage;