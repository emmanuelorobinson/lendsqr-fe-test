
import Home from '../assets/svgs/sidebar/Home.svg';
import Users from '../assets/svgs/sidebar/Users.svg';
import UsersGuarantors from '../assets/svgs/sidebar/UsersGuarantors.svg';

const color = "#213F7D";

export const dashboardRoutes = {
  path: "/users",
  name: "Dashboard",
  icon: Home,
};

export const customerRoutes = [
  {
    path: "/users",
    name: "Users",
    icon: Users,
  },
  {
    path: "/users",
    name: "Guarantors",
    icon: UsersGuarantors,
  },
];
