import stacks from "./stacks.json"

const Stacks = () => {
    return ( 
        <ul className="flex gap-4 mt-4">
            {stacks.map(stack => 
                <li key={stack.id}>
                    <img
                        className="w-8"
                        src={stack.path}
                        alt={stack.alt}
                    />
                </li>
            )}
        </ul>
     );
}
 
export default Stacks;