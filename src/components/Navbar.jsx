import { Link } from "react-router-dom";

export default function Navbar() {
    const navItems = [
        { label: "Home", path: "/" },
        { label: "About", path: "/about" },
        { label: "Services", path: "/services" },
        { label: "Portfolio", path: "/portfolio" },
        { label: "Contact", path: "/contact" },
    ];

    return (
        <header className="fixed top-0 left-0 w-full bg-white shadow p-4 flex justify-between items-center z-50">
            <h1 className="text-2xl font-bold">My Freelancer Services</h1>
            <nav className="flex gap-6">
                {navItems.map(({ label, path }) =>
                    label === "Portfolio" ? (
                        <a
                            key={label}
                            href="https://odportfolio.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative group pb-1"
                        >
                            {label}
                            <span className="absolute left-0 -bottom-1 w-0 h-1 bg-sky-500 transition-all group-hover:w-full"></span>
                        </a>
                    ) : (
                        <Link
                            key={path}
                            to={path}
                            className="relative group pb-1"
                        >
                            {label}
                            <span className="absolute left-0 -bottom-1 w-0 h-1 bg-sky-500 transition-all group-hover:w-full"></span>
                        </Link>
                    )
                )}
            </nav>
        </header>
    );
}