import { NavLink } from "react-router";
import menuLinks from "./menu.json";

const NavMenuHeader = () => {
    return ( 
        <div className="flex gap-8 text-md">
            {menuLinks.map(link => 
                <NavLink key={link.id} to={link.page} className="[&.active]:font-bold [&.active]:underline [&.active]:text-tertiary">
                    {link.name}
                </NavLink>
            )}
        </div>
     );
}
 
export default NavMenuHeader;