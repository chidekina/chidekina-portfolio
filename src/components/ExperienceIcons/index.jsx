const ExperienceIcons = ({ list, onClick, step }) => {
    return (
        <div className="fixed bottom-30 left-1/2 transform -translate-x-1/2 w-full max-w-2xl z-50">
            <div className="relative flex items-center justify-between px-12">
                <div className="absolute top-1/2 left-12 right-12 h-0.5 bg-tertiary transform -translate-y-1/2 z-0"></div>
                {list.map((item, index) => (
                    <div key={index} className="relative z-10">
                        <button
                            onClick={() => onClick(index)}
                            className={`flex items-center justify-center w-16 h-16 rounded-full border-2 transition-all duration-300 hover:scale-110 ${index === step
                                    ? 'bg-accent border-accent text-white shadow-lg'
                                    : 'bg-primary border-tertiary text-white hover:border-accent'
                                }`}
                        >
                            <img
                                src={item.path}
                                alt={item.title}
                                className="w-8 h-8"
                            />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ExperienceIcons;