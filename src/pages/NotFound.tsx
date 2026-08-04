import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  useEffect(() => {
    console.error("404: user attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 bg-background text-foreground bg-grid">
      <p className="font-mono text-primary text-sm">404</p>
      <h1 className="font-display font-bold text-3xl">Page not found</h1>
      <a href="/" className="font-mono text-sm text-primary hover:underline">
        &larr; Back to home
      </a>
    </div>
  );
};

export default NotFound;
