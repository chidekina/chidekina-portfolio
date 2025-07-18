import useWindowSize from "../../hooks/useWindowSize";

const Container = ({ children, flexDirection = "flex-col", gap = "gap-0" }) => {
    const { width, height } = useWindowSize();
    const isMobile = width < 768;
    const svgW = isMobile ? 400 : 1920;
    const svgH = isMobile ? 800 : 1080;
    const w = isMobile ? (width || svgW) : '100vw';
    const h = isMobile ? (height || svgH) : '100vh';
    return (
        <div className="h-screen w-full bg-primary text-white relative overflow-hidden md:overflow-hidden overflow-y-auto">
            {!isMobile && (
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
            )}
            {isMobile && (
                <svg
                    className="fixed top-0 left-0 w-screen h-screen pointer-events-none z-0"
                    width={w}
                    height={h}
                    viewBox={`0 0 400 800`}
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ minWidth: '100vw', minHeight: '100vh' }}
                >
                    <line x1="0" y1={svgH * 0.125} x2={svgW} y2="0" stroke="#cf023b" strokeWidth="1.5" opacity="0.18" />
                    <line x1="0" y1={svgH * 0.875} x2={svgW} y2={svgH} stroke="#cf023b" strokeWidth="1.5" opacity="0.18" />
                    <line x1="0" y1={svgH * 0.375} x2={svgW} y2={svgH * 0.375} stroke="#fff" strokeWidth="0.8" opacity="0.10" />
                    <line x1="0" y1={svgH * 0.625} x2={svgW} y2={svgH * 0.625} stroke="#fff" strokeWidth="0.8" opacity="0.10" />
                    <line x1={svgW * 0.2} y1="0" x2={svgW * 0.2} y2={svgH} stroke="#cf023b" strokeWidth="0.8" opacity="0.10" />
                    <line x1={svgW * 0.8} y1="0" x2={svgW * 0.8} y2={svgH} stroke="#cf023b" strokeWidth="0.8" opacity="0.10" />
                    {/* Linhas extras para dar mais destaque */}
                    <line x1="0" y1={svgH * 0.25} x2={svgW} y2={svgH * 0.125} stroke="#cf023b" strokeWidth="0.7" opacity="0.13" />
                    <line x1="0" y1={svgH * 0.75} x2={svgW} y2={svgH * 0.875} stroke="#cf023b" strokeWidth="0.7" opacity="0.13" />
                </svg>
            )}
            <div className={`h-full flex ${flexDirection} ${gap} relative z-10`}>
                {children}
            </div>
        </div>
    );
}

export default Container;