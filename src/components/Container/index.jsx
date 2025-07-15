const Container = ({ children, flexDirection = "flex-col", gap = "gap-0" }) => {
    return (
        <div className="h-screen w-full bg-primary text-white relative overflow-hidden">
            <svg
                className="fixed top-0 left-0 w-screen h-screen pointer-events-none z-0"
                width="100vw"
                height="100vh"
                viewBox="0 0 1920 1080"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ minWidth: '100vw', minHeight: '100vh' }}
            >
                <line x1="0" y1="200" x2="1920" y2="0" stroke="#999" strokeWidth="1.2" opacity="0.18" />
                <line x1="0" y1="800" x2="1920" y2="1080" stroke="#999" strokeWidth="1.2" opacity="0.18" />
                <line x1="0" y1="400" x2="1920" y2="400" stroke="#999" strokeWidth="1" opacity="0.10" />
                <line x1="0" y1="700" x2="1920" y2="700" stroke="#999" strokeWidth="1" opacity="0.10" />
                <line x1="400" y1="0" x2="400" y2="1080" stroke="#999" strokeWidth="1" opacity="0.10" />
                <line x1="1520" y1="0" x2="1520" y2="1080" stroke="#999" strokeWidth="1" opacity="0.10" />
  
            </svg>
            <div className={`h-full flex ${flexDirection} ${gap} relative z-10`}>
                {children}
            </div>
        </div>
    );
}

export default Container;