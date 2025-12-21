import { Outlet } from "react-router-dom";
import PortfolioNav from "../components/PortfolioNav";
import HomeButton from "../components/HomeButton";
import ThemeToggle from "../components/ThemeToggle";

export default function PortfolioLayout() {
  return (
    <>
      <HomeButton />
      <ThemeToggle />
      <PortfolioNav />
      <main className="portfolio-content">
        <Outlet />
      </main>
    </>
  );
}
