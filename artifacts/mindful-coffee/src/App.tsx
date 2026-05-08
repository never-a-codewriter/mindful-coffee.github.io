import Home from "@/pages/home";
import Admin from "@/pages/admin";

export default function App() {
  const isAdmin = window.location.pathname === "/admin" || window.location.search.includes("admin");
  return isAdmin ? <Admin /> : <Home />;
}
