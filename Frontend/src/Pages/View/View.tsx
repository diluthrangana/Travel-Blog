import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import styles from './View.module.css';

interface Blog {
    _id: string;
    BlogImgUrl: string;
    BlogTitle: string;
    BlogIntro: string;
    BlogDesc: string;
}

const View: React.FC = () => {
    const [Blog, setBlog] = useState<Blog | null>(null); // Initialize as null
    const [Loading, setLoading] = useState(false);
    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        setLoading(true);
        axios.get(`http://localhost:5555/Blogs/${id}`).then((res) => {
            setBlog(res.data);
            setLoading(false);
        }).catch((error) => {
            console.log(error);
            setLoading(false);
        });
    }, [id]); // Add 'id' as a dependency

    if (Loading) {
        return <div>Loading...</div>;
    }

    if (!Blog) {
        return <div>No Blog Found</div>;
    }

    return (
        <section className={styles.ViewBlog}>
            <img src={Blog.BlogImgUrl} alt="" />
            <div className={styles.ViewBlog_Content}>
                <h6>{Blog.BlogTitle}</h6>
                <p className={styles.Intro}>{Blog.BlogIntro}</p>
                <p className={styles.Desc}>{Blog.BlogDesc}</p>
            </div>
        </section>
    );
};

export default View;
