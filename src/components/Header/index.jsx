import { useState } from "react";
import NavMenuHeader from "../NavMenuHeader";

const Header = () => {
    const [open, setOpen] = useState(false);
    return (
        <header className="bg-secondary px-12 py-4 text-white flex items-center justify-between">
            <div className="hidden md:block w-full">
                <NavMenuHeader />
            </div>
            <div className="md:hidden w-full flex items-center justify-between">
                <span className="font-bold text-lg">Menu</span>
                <button
                    className="p-2 focus:outline-none group"
                    onClick={() => setOpen(!open)}
                    aria-label="Abrir menu"
                >
                    <span className="relative w-8 h-8 flex items-center justify-center">
                        <span className={`block absolute h-0.5 w-8 bg-white rounded transition-all duration-300 ease-in-out ${open ? 'rotate-45 top-4' : 'top-2'}`}></span>
                        <span className={`block absolute h-0.5 w-8 bg-white rounded transition-all duration-300 ease-in-out ${open ? 'opacity-0' : 'top-4'}`}></span>
                        <span className={`block absolute h-0.5 w-8 bg-white rounded transition-all duration-300 ease-in-out ${open ? '-rotate-45 top-4' : 'top-6'}`}></span>
                    </span>
                </button>
            </div>
            {open && (
                <div className="fixed inset-0 bg-gradient-to-br from-black/30 via-black/10 to-transparent z-50 flex flex-col items-center justify-center backdrop-blur-sm transition-all duration-300" onClick={() => setOpen(false)}>
                    <div className="bg-secondary rounded-xl p-8 w-4/5 max-w-xs shadow-lg animate-fade-in-up flex flex-col items-center" onClick={e => e.stopPropagation()}>
                        <nav className="flex flex-col gap-2 w-full items-center">
                            <NavMenuHeader mobile vertical />
                        </nav>
                        <button className="mt-12 text-accent font-bold" onClick={() => setOpen(false)}>
                            Fechar
                        </button>
                    </div>
                </div>
            )}
            <style>{`
                @keyframes fade-in-up {
                    0% { opacity: 0; transform: translateY(30px); }
                    100% { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in-up {
                    animation: fade-in-up 0.4s cubic-bezier(.39,.58,.57,1) both;
                }
                /* Mobile NavLink vertical, linha ativa próxima */
                @media (max-width: 768px) {
                    .navlink-mobile {
                        display: block;
                        text-align: center;
                        margin-bottom: 0.5rem;
                        position: relative;
                    }
                    .navlink-mobile.active::after {
                        content: '';
                        display: block;
                        margin: 0.15rem auto 0 auto;
                        width: 2rem;
                        height: 2px;
                        background: #cf023b;
                        border-radius: 2px;
                        transition: width 0.8s cubic-bezier(.39,.58,.57,1);
                    }
                }
            `}</style>
        </header>
    );
}

export default Header;