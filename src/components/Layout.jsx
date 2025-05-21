import Navbar from "./Navbar";

export default function Layout({ children }) {
    return (
        <div className="min-h-screen bg-white text-gray-800">
            <Navbar />
            {children} {/* No global centering */}
            <footer className="text-center p-4 text-sm text-gray-500">
                &copy; {new Date().getFullYear()} My Freelancer Services. All rights reserved.
            </footer>
        </div>
    );
}