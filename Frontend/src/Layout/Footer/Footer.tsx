import React from 'react'
import styles from './Footer.module.css'

import {Link} from 'react-router-dom'

import { FaSquareInstagram, FaGithub, FaLinkedin, FaTwitter, FaFacebook, FaInstagram} from "react-icons/fa6";

const Footer: React.FC = () => {
    return(
        <>
        <div className={styles.Footer}>
            <div className={styles.footerContent}>
                <div className={styles.aboutSection}>
                    <h3>About Us</h3>
                    <p>
                        Welcome to our travel blog where we share our adventures from around the world.
                        Discover tips, guides, and inspiration for your next journey.
                    </p>
                </div>
                <div className={styles.linksSection}>
                    <h3>Popular Posts</h3>
                    <ul>
                        <li><Link to="/post1">Top 10 Destinations for 2024</Link></li>
                        <li><Link to="/post2">How to Travel on a Budget</Link></li>
                        <li><Link to="/post3">A Guide to Solo Travel</Link></li>
                    </ul>
                </div>
                <div className={styles.contactSection}>
                    <h3>Contact Us</h3>
                    <p>Email: contact@travelblog.com</p>
                    <p>Phone: (123) 456-7890</p>
                </div>
                <div className={styles.socialMediaSection}>
                    <h3>Follow Us</h3>
                    <div className={styles.socialLinks}>
                        <Link to="https://instagram.com" target='_blank'>
                            <FaInstagram />
                        </Link>
                        <Link to="https://github.com" target='_blank'>
                            <FaGithub />
                        </Link>
                        <Link to="https://linkedin.com" target='_blank'>
                            <FaLinkedin />
                        </Link>
                        <Link to="https://twitter.com" target='_blank'>
                            <FaTwitter />
                        </Link>
                        <Link to="https://facebook.com" target='_blank'>
                            <FaFacebook />
                        </Link>
                    </div>
                </div>
            </div>
            <div className={styles.footerBottom}>
                <p>&copy; 2024 Travel Blog. All Rights Reserved.</p>
            </div>
        </div>
        
        
        </>
    )
}

export default Footer;