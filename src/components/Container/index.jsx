const Container = ({ children }) => {
    return (
        <div className="h-screen w-full bg-primary text-white">
            <div className="h-full flex flex-col">
                {children}
            </div>
        </div>
    );
}

export default Container;