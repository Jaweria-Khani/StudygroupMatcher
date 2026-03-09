import { createBrowserRouter } from "react-router";
import Login from "./pages/Login";
import Home from "./pages/Home";
import SubjectSelection from "./pages/SubjectSelection";
import GroupList from "./pages/GroupList";
import GroupDetails from "./pages/GroupDetails";
import MyGroups from "./pages/MyGroups";
import Profile from "./pages/Profile";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Login,
  },
  {
    path: "/home",
    Component: Home,
  },
  {
    path: "/subjects",
    Component: SubjectSelection,
  },
  {
    path: "/groups/:subject",
    Component: GroupList,
  },
  {
    path: "/group/:id",
    Component: GroupDetails,
  },
  {
    path: "/my-groups",
    Component: MyGroups,
  },
  {
    path: "/profile",
    Component: Profile,
  },
]);
