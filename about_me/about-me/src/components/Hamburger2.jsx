import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { CONTACTS_ROUTE, HOME_ROUTE, RESUME_ROUTE } from "../routes/const";
import './Hamburger2.css'

const Topbar = () => {
  return (
       <div className="hamburgerBox">
      <Menu>
        <MenuButton className="hamburgerButton"  backgroundColor={`white`} as={Button}>
          <HamburgerIcon fontSize={50} />
        </MenuButton>
        <MenuList>
          <Link to={HOME_ROUTE}>
            <MenuItem>Home</MenuItem>
          </Link>
          <Link to={RESUME_ROUTE}>
            <MenuItem>My Resume</MenuItem>
          </Link>
          <Link to={CONTACTS_ROUTE}>
            <MenuItem>Contacts</MenuItem>
          </Link>
        </MenuList>
      </Menu>
    </div>
  );
};

export default Topbar;
