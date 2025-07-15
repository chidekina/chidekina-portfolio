const Container = ({ children, flexDirection = "flex-col", gap = "gap-0" }) => {
    return (
        <div className="h-screen w-full bg-primary text-white">
            <div className={`h-full flex ${flexDirection} ${gap}`}>
                {children}
            </div>
        </div>
    );
}

export default Container;