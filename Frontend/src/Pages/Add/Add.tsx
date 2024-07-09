import React, { useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import styles from './Add.module.css'
import axios from 'axios'


import { useSnackbar } from 'notistack';
const Add: React.FC = () => {

    const [BlogTitle, setBlogTitle] = useState('')
    const [BlogImgUrl, setBlogImgUrl] = useState('')
    const [BlogIntro, setBlogIntro] = useState('')
    const [BlogDesc, setBlogDesc] = useState('')
    const [Loading, setLoading] = useState(false)
    const {enqueueSnackbar} = useSnackbar()
    const Navigate = useNavigate()

    const AddNewBlog = () => {

        const data = {
        BlogTitle,BlogImgUrl,BlogIntro,BlogDesc
        }

        setLoading(true)

        axios.post('http://localhost:5555/Blogs',data).then(() => {
            setLoading(false)
            enqueueSnackbar("Blog Created Successfully", {variant:'success'})
            Navigate("/Blogs")
        }).catch((error) => {
            console.log(error)
            enqueueSnackbar("something Went Wrong", {variant:'error'})
        })

    }

    return (
        <>
        <section className={styles.EditBlog}>

        <div className={styles.EditBlog_Row}>
            <h6>Add New Blog</h6>
            
            <div className={styles.EditBlog_Box}>
                <input type="text" placeholder='Blog Title' value={BlogTitle} onChange={(e)=>setBlogTitle(e.target.value)} />
                <input type="text" placeholder='Blog Img Url' value={BlogImgUrl} onChange={(e)=>setBlogImgUrl(e.target.value)} />
                <textarea placeholder='Blog Intro' value={BlogIntro} onChange={(e)=>setBlogIntro(e.target.value)} />
                <textarea placeholder='Blog Title' value={BlogDesc} onChange={(e)=>setBlogDesc(e.target.value)} />

                <button className={styles.btn} onClick={AddNewBlog}>Add New Blog</button>
                
            </div> 
        </div>
        
    
        </section>
        </>
    )

}

export default Add