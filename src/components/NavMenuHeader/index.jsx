import { NavLink } from "react-router";
import menuLinks from "./menu.json";

const NavMenuHeader = ({ mobile, vertical }) => {
    const isVertical = vertical || mobile;
    return (
        <div className={isVertical ? "flex flex-col gap-2 items-center w-full" : "flex gap-8 text-md"}>
            {menuLinks.map(link => (
                <NavLink
                    key={link.id}
                    to={link.page}
                    className={({ isActive }) =>
                        isVertical
                            ? `navlink-mobile relative block w-full text-lg py-1 px-2 text-center ${isActive ? 'font-bold text-accent active' : 'text-white'} hover:text-accent`
                            : `relative transition-all duration-300 px-1 ${isActive ? 'font-bold text-accent' : 'text-white'} hover:text-accent hover:-translate-y-0.5 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-accent after:rounded-full after:transition-all after:duration-300 after:w-0 hover:after:w-full ${isActive ? 'after:w-full after:bg-accent' : ''}`
                    }
                >
                    {link.name}
                </NavLink>
            ))}
        </div>
    );
}

export default NavMenuHeader;