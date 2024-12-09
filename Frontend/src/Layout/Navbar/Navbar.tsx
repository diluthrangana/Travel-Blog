import React from 'react';
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';

const NavLinks = [
    {
        LinkText: "Home",
        LinkTo:"/",
    },
    {
        LinkText: "Blogs",
        LinkTo:"/Blogs",
    },
    {
        LinkText: "Planning a Trip",
        LinkTo:"/Plan",
    }
];

const Navbar: React.FC = () => {
    return (
        <nav className={styles.Navbar}>
            <div className={styles.Logo}>
                <Link to={"/"}>
                    <img src="/assets/logo.png" alt="Logo" />
                </Link>
            </div>

            {/* Search Bar */}
            <div className={styles.SearchBar}>
                <input type="text" placeholder="Search..." />
                <button className={styles.SearchButton}>Search</button>
            </div>

            <div className={styles.NavTabs}>
                {
                    NavLinks.map(({LinkText, LinkTo }, index) => (
                        <Link to={LinkTo} key={index} className={styles.NavTab}>{LinkText}</Link>
                    ))
                }
            </div>
        </nav>
    );
};

export default Navbar;
