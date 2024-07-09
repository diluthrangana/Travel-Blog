import React, {useState} from 'react'
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios'
import styles from './Delete.module.css'

import {useSnackbar} from 'notistack'





const Delete: React.FC = () => {

    const [Loading, setLoading] = useState(false)
    const {enqueueSnackbar} = useSnackbar()
    const Navigate = useNavigate()
    const { id } = useParams()

    const DeleteBlog = () =>{
        setLoading(true)
        axios.delete('http://localhost:5555/Blogs/${id}').then(() => {
            setLoading(false)
            enqueueSnackbar("Blog Deleted Successfully", {variant:"success"})
            Navigate( "/Blogs")
        }).catch((error) => {
            console.log(error)
            enqueueSnackbar("Something Went Wrong", {variant:"error"})
        })
    }
    
    return (
        <>
        <section className={styles.DeleteWrapper}>
            <div className={styles.DeleteMain}>
                <h6>Are You Sure</h6>
                <button className={styles.btn} onClick={DeleteBlog}>Delete Blog Now</button>
            </div>
        </section>
        </>
    )
}

export default Delete
