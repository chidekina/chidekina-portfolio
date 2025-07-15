const SocialLinks = ({ list }) => {
    return (
        <ul className="flex gap-4">
            {list.map((link, index) => (
                <li
                    key={link.id}
                    className="w-12 opacity-0"
                    style={{
                        animation: `bounceInUp 0.6s ease-out ${index * 150}ms forwards`
                    }}
                >
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={link.link}
                        className="block transition-transform hover:scale-110 hover:-translate-y-1"
                    >
                        <img src={link.path} alt={link.name} className="w-full h-full" />
                    </a>
                </li>
            ))}
        </ul>
    );
}

export default SocialLinks;