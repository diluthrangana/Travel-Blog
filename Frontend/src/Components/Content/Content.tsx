import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Content.module.css'

interface ContentProps {
    h6Text: string,
    LinkTo: string,
    LinkText: string
}

const Content: React.FC<ContentProps> = ({h6Text, LinkText, LinkTo}) => {
    return (
        <>
            <div className={styles.content}>
                <div>
                    <h6>{h6Text}</h6>
                </div>

                <Link to={LinkTo} >{LinkText}</Link>
            </div>
        </>
    )
}

export default Content