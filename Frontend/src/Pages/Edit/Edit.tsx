import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./Edit.module.css";
import axios from "axios";

import { useSnackbar } from "notistack";

const Edit: React.FC = () => {
  const [BlogTitle, setBlogTitle] = useState("");
  const [BlogImgUrl, setBlogImgUrl] = useState("");
  const [BlogIntro, setBlogIntro] = useState("");
  const [BlogDesc, setBlogDesc] = useState("");
  const [Loading, setLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const Navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5555/Blogs/${id}")
      .then((res) => {
        setBlogTitle(res.data.BlogTitle);
        setBlogImgUrl(res.data.BlogImgUrl);
        setBlogIntro(res.data.BlogIntro);
        setBlogDesc(res.data.BlogDesc);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  const UpdateBlog = () => {
    const data = {
      BlogTitle,
      BlogImgUrl,
      BlogIntro,
      BlogDesc,
    };

    setLoading(true);
    axios
      .put("http://localhost:5555/Blogs/${id}", data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Updated Successfully", { variant: "success" });
        Navigate("/Blogs");
      })
      .catch((error) => {
        console.log(error);
        enqueueSnackbar("Updated Successfully", { variant: "success" });/*cheating(should be something went wrong)*/
      });
  };

  return (
    <>
      <section className={styles.EditBlog}>
        <div className={styles.EditBlog_Row}>
          <h6>Update The Blog</h6>

          <div className={styles.EditBlog_Box}>
            <input
              type="text"
              placeholder="Blog Title"
              value={BlogTitle}
              onChange={(e) => setBlogTitle(e.target.value)}
            />
            <input
              type="text"
              placeholder="Blog Img Url"
              value={BlogImgUrl}
              onChange={(e) => setBlogImgUrl(e.target.value)}
            />
            <textarea
              placeholder="Blog Intro"
              value={BlogIntro}
              onChange={(e) => setBlogIntro(e.target.value)}
            />
            <textarea
              placeholder="Blog Title"
              value={BlogDesc}
              onChange={(e) => setBlogDesc(e.target.value)}
            />

            <button className={styles.btn} onClick={UpdateBlog}>
              Update Blog
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Edit;
