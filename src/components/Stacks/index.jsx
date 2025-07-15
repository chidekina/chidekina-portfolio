import stacks from "./stacks.json"

const Stacks = () => {
    return (
        <ul className="flex gap-4 mt-4">
            {stacks.map((stack, index) =>
                <li
                    key={stack.id}
                    className="opacity-0"
                    style={{
                        animation: `slideInFromRight 0.6s ease-out ${(index * 150) + 800}ms forwards`
                    }}
                >
                    <img
                        className="w-8 transition-transform hover:scale-110"
                        src={stack.path}
                        alt={stack.alt}
                    />
                </li>
            )}
        </ul>
    );
}

export default Stacks;