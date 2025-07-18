const Footer = () => {
    return (
        <footer className="bg-secondary flex flex-col justify-center items-center py-2 px-2 w-full">
            <h2 className="text-xs md:text-sm text-center font-normal">© 2025 Cesar Hideki. Todos os direitos reservados.</h2>
            <div className="flex flex-wrap justify-center items-center gap-2 mt-1 text-xs md:text-sm">
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/in/cesar-hideki-nagano-326b75115/"
                    className="hover:text-accent transition-colors"
                >
                    LinkedIn
                </a>
                <span className="hidden md:inline">|</span>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/chidekina"
                    className="hover:text-accent transition-colors"
                >
                    GitHub
                </a>
                <span className="hidden md:inline">|</span>
                <a href="mailto:cesar.nagano1@gmail.com" className="hover:text-accent transition-colors">cesar.nagano1@gmail.com</a>
            </div>
        </footer>
    );
}

export default Footer;