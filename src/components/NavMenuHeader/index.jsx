import { NavLink } from "react-router";
import menuLinks from "./menu.json";

const NavMenuHeader = () => {
    return (
        <div className="flex gap-8 text-md">
            {menuLinks.map(link =>
                <NavLink
                    key={link.id}
                    to={link.page}
                    className={({ isActive }) => `relative transition-all duration-300 px-1
                        ${isActive ? 'font-bold text-accent' : 'text-white'}
                        hover:text-accent
                        hover:-translate-y-0.5
                        after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-accent after:rounded-full after:transition-all after:duration-300
                        after:w-0 hover:after:w-full
                        ${isActive ? 'after:w-full after:bg-accent' : ''}
                    `}
                >
                    {link.name}
                </NavLink>
            )}
        </div>
    );
}

export default NavMenuHeader;