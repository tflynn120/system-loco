import { ListGroup } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";
import { SIDEBAR_ITEMS } from "../constants";
export default function Sidebar() {
  const route = useLocation();

  //If I had more time, would conditionally render the sidebar rather than make it hidden for mobile
  return (
    <div className="sidebar">
      <ListGroup className="sidebar-list">
        {SIDEBAR_ITEMS.map((item) => (
          <ListGroup.Item
            active={route.pathname === item.route}
            className="sidebar-listitems"
            key={item.name}
          >
            {item.icon}
            <NavLink to={item.route}>{item.name}</NavLink>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}
