// src/components/NavBar.jsx
import { Link } from 'react-router-dom';
import { User, UserCircle, Settings, ChevronDown, Menu, Home, Folder } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import '../styles/NavBarComponent.css';

function NavBar() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 456);
    const [isSideNavOpen, setIsSideNavOpen] = useState(false);
    const dropdownRef = useRef();

    useEffect(() => {
        function handleResize() {
            setIsMobile(window.innerWidth <= 456);
        }
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        }
        window.addEventListener("resize", handleResize);
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            window.removeEventListener("resize", handleResize);
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <nav className="navbar">
            <div className="navbar-left">
                {isMobile && (
                    <button className="hamburger-icon" onClick={() => setIsSideNavOpen(true)}>
                        <Menu size={24} />
                    </button>
                )}
                <div className="navbar-brand">
                    <Link to="/" className="nav-link">Company Logo</Link>
                </div>
            </div>

            {!isMobile && (
                <div className="navbar-links">
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/projects" className="nav-link">Projects</Link>
                </div>
            )}

            <div className="dropdown-container" ref={dropdownRef}>
                <div className="dropdown-icon-trigger" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                    <UserCircle size={24} className="user-account-icon" />
                    <ChevronDown size={18} className="user-dropdown-icon" />
                </div>
                {isDropdownOpen && (
                    <div className="dropdown-card">
                        <Link to="/profile" className="dropdown-item">
                            <User size={16} className='icon' />
                            Profile
                        </Link>
                        <Link to="/settings" className="dropdown-item">
                            <Settings size={16} className='icon' />
                            Settings
                        </Link>
                    </div>
                )}
            </div>

            {/* Side Nav for Mobile */}
            {isMobile && isSideNavOpen && (
                <div className="side-nav-overlay" onClick={() => setIsSideNavOpen(false)}>
                    <div className="side-nav" onClick={(e) => e.stopPropagation()}>
                        <Link to="/" className="side-nav-item" onClick={() => setIsSideNavOpen(false)}>
                            <Home size={16} className='icon' />
                            Home
                        </Link>
                        <Link to="/projects" className="side-nav-item" onClick={() => setIsSideNavOpen(false)}>
                            <Folder size={16} className='icon'/>
                            Projects
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}

export default NavBar;
