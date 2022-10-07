import {
  AiOutlineDashboard,
  AiOutlineUser,
  AiOutlineUsergroupAdd,
} from "react-icons/ai";

const color = "#213F7D";

export const dashboardRoutes = {
  path: "/dashboard",
  name: "Dashboard",
  icon: <AiOutlineDashboard color={color} />,
};

export const customerRoutes = [
  {
    path: "/users",
    name: "Users",
    icon: <AiOutlineUser color={color} />,
  },
  {
    path: "/users",
    name: "Guarantors",
    icon: <AiOutlineUsergroupAdd color={color} />,
  },
];
