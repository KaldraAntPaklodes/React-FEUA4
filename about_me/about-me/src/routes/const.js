import Home from "../pages/home/Home";
import Contacts from "../pages/contacts/Contacts";
import Resume from "../pages/myResume/MyResume";
import Layout from "../layouts/Layout";

export const HOME_ROUTE = "/";
export const CONTACTS_ROUTE = "/contacts";
export const RESUME_ROUTE = "/resume";

export const topbarNavigationItems = [
  { route: HOME_ROUTE, title: "Home" },
  { route: RESUME_ROUTE, title: "My Resume" },
  { route: CONTACTS_ROUTE, title: "Contacts" },
];

export const appRoutes = {
  Layout: Layout,
  routes: [
    {
      path: HOME_ROUTE,
      Component: Home,
    },
    {
      path: CONTACTS_ROUTE,
      Component: Contacts,
    },
    {
      path: RESUME_ROUTE,
      Component: Resume,
    },
  ],
};
