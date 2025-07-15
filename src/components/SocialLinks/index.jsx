const SocialLinks = ({ list }) => {
    return (
        <ul className="flex gap-4"> 
        {list.map(link => (
            <li key={link.id} className="w-12">
                <a href={link.link}>
                    <img src={link.path} alt={link.name} />
                </a>
            </li>
        ))}
        </ul>
     );
}
 
export default SocialLinks;