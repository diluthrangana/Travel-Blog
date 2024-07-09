import React, { useEffect, useState } from "react";

import styles from "./Blogs.module.css";

import Content from "../../Components/Content/Content";
import axios from "axios";

import { Link } from "react-router-dom";

import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import { MdPreview } from "react-icons/md";

interface Blog {
  _id: number;
  BlogTitle: string;
  BlogImgUrl: string;
  BlogIntro: string;
  BlogDesc: string;
}

interface Person {
  id: number;
  name: string;
  photoUrl: string;
}

const Blogs: React.FC = () => {
  const [Blog, setBlogs] = useState<Blog[]>([]);
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5555/Blogs")
      .then((res) => {
        setBlogs(res.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  const persons: Person[] = [
    {
      id: 1,
      name: "John Doe",
      photoUrl:
        "https://media.istockphoto.com/id/1410538853/photo/young-man-in-the-public-park.webp?b=1&s=170667a&w=0&k=20&c=pGdjFVdK-_BhTa6PMy5VNcXdbxVNngzg-OPzMfJKrG8=",
    },
    {
      id: 2,
      name: "Jane Smith",
      photoUrl:
        "https://media.istockphoto.com/id/660150716/photo/young-businessman-with-beard-smiling-towards-camera.jpg?s=612x612&w=0&k=20&c=bmOLrjsgfJziLXsfquG87i_tvjD4GsPj41HAvzRcflQ=",
    },
    {
      id: 3,
      name: "Alice Johnson",
      photoUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOMKBJS4tspMKuCu6_r6aUGsF5s2Lg2FTvwhStS_DUhdVIZltYV1yymxoGZmr2cMxWs88&usqp=CAU",
    },
    {
      id: 4,
      name: "Robert Brown",
      photoUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi54ZeaeEBCAmHOFzU_gPvjpAwPPDsdVjWsQ&s",
    },
    {
      id: 5,
      name: "Emily Davis",
      photoUrl:
        "https://img.freepik.com/free-photo/medium-shot-man-holding-racket_23-2149907984.jpg",
    },
    {
      id: 6,
      name: "Michael Wilson",
      photoUrl:
        "https://live.staticflickr.com/5281/5283412326_0fa2b4f976_b.jpg",
    },
    {
      id: 7,
      name: "Michael Wilson",
      photoUrl:
        "https://www.srilankaecotourism.lk/activity_img/1490075160Camping%20158.jpg",
    },
    {
      id: 8,
      name: "Jessica Garcia",
      photoUrl:
        "https://www.ceylonexpeditions.com/medias/package_places/big/134/depositphotos-181997958-xl-2015-1.jpg",
    },
  ];

  const travelCards = [
    {
      title: "Exploring the Mountains",
      description: "Discover the beauty of the rugged mountains.",
      imageUrl:
        "https://www.holidify.com/images/cmsuploads/compressed/shutterstock_562419604_20191120103528.png",
    },
    {
      title: "City Lights and Nights",
      description: "Experience the vibrant nightlife of the city.",
      imageUrl:
        "https://molon.de/galleries/Sri_Lanka/Galle/images01/18%20Street%20in%20Galle%20fort%20at%20night.jpg",
    },
    {
      title: "Beach Vibes",
      description: "Relax on the sunny beaches of the coast.",
      imageUrl:
        "https://destinationlesstravel.com/wp-content/uploads/2019/04/DSC_8786-1024x684.jpg",
    },
    {
      title: "Historical Landmarks",
      description: "Explore the rich history and culture.",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Galle_Fort.jpg/1200px-Galle_Fort.jpg",
    },
    {
      title: "Adventure Trails",
      description: "Find thrilling adventures on various trails.",
      imageUrl:
        "https://images.squarespace-cdn.com/content/v1/5c94ab21a09a7e443410d831/1590078849853-IIGCWD8A82AFEGX72JSH/adam%27s+peak+climb+sri+lanka",
    },
  ];

  return (
    <>
      <section>
        <div className={styles.TopBloggers}>
          {persons.map((person) => (
            <div key={person.id} className={styles.Profile}>
              <img
                src={person.photoUrl}
                alt={person.name}
                className={styles.ProfileImage}
              />
              <p>{person.name}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.Home}>
        <section className={styles.ButtonSection}>
          <Link to="/add" className={styles.AddButton}>
            ADD BLOG
          </Link>
        </section>
        <video className={styles.Video} autoPlay muted loop>
          <source src="/assets/video1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>


    


      {Loading ? (
        console.log("Loading")
      ) : (
        <>
          <section className={styles.AllBlogs}>
            <div className={styles.AllBlogs_Row}>
              {Blog.map((Item) => (
                <div className={styles.AllBlogs_Box}>
                  <img src={Item.BlogImgUrl} alt={Item.BlogTitle} />
                  <div className={styles.AllBlogs_BoxContent}>
                    <h6>{Item.BlogTitle}</h6>
                    <p className={styles.Intro}>{Item.BlogIntro}</p>
                  </div>

                  <div className={styles.AllBlogs_BoxContent_Icons}>
                    <Link to={"/View/${Item._id}"}>
                      <MdPreview />
                    </Link>

                    <Link to={"/Edit/${Item._id}"}>
                      <CiEdit />
                    </Link>

                    <Link to={"/Delete/${Item._id}"}>
                      <MdDeleteOutline />
                    </Link>
                  </div>
                </div>
              ))}

              <div className={styles.AllBlogs_Box}>
                <img
                  src="https://images.squarespace-cdn.com/content/v1/5a3bb03b4c326d76de73ddaa/9732566d-6b33-4a1a-ba0c-1b73ed8848a4/The+Common+Wanderer-9888.jpg"
                  alt=""
                />

                <div className={styles.AllBlogs_BoxContent}>
                  <h6>Upcoming Blogs</h6>
                  <p className={styles.Intro}>
                    Ella is a dynamic and innovative professional with a passion
                    for technology and design. With a background in machine
                    learning and deep learning, she excels at creating
                    cutting-edge solutions that merge functionality with
                    aesthetic appeal. Her expertise extends to web development,
                    where she focuses on crafting responsive, user-friendly
                    interfaces. Known for her attention to detail and
                    creativity, Ella continually seeks new challenges to expand
                    her skills. She is dedicated to staying current with
                    industry trends and advancements, ensuring her projects are
                    always at the forefront of technology. Outside of work, Ella
                    enjoys exploring new design concepts and contributing to
                    open-source projects.
                  </p>
                </div>
              </div>

              <div className={styles.AllBlogs_Box}>
                <img
                  src="https://images.squarespace-cdn.com/content/v1/5c94ab21a09a7e443410d831/1590078849853-IIGCWD8A82AFEGX72JSH/adam%27s+peak+climb+sri+lanka"
                  alt=""
                />

                <div className={styles.AllBlogs_BoxContent}>
                  <h6>Upcoming Blogs</h6>
                  <p className={styles.Intro}>
                    AdamSpeak is a pioneering communication platform designed to
                    revolutionize the way we connect and collaborate. Combining
                    cutting-edge technology with user-centric design, it offers
                    seamless, intuitive interactions for both personal and
                    professional use. With robust features like real-time
                    translation, secure messaging, and collaborative tools,
                    AdamSpeak empowers users to bridge language barriers and
                    enhance productivity. Experience the future of communication
                    with AdamSpeak, where every conversation matters.
                  </p>
                </div>
              </div>

              <div className={styles.AllBlogs_Box}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Galle_Fort.jpg/1200px-Galle_Fort.jpg"
                  alt=""
                />

                <div className={styles.AllBlogs_BoxContent}>
                  <h6>Galle Fort</h6>
                  <p className={styles.Intro}>
                    Galle Fort, a UNESCO World Heritage site in Sri Lanka, is a
                    stunning testament to colonial history and architecture.
                    Established by the Portuguese in the 16th century and later
                    fortified by the Dutch, it features well-preserved ramparts,
                    charming cobblestone streets, and historic buildings.
                    Visitors can explore its vibrant mix of museums, cafes, and
                    boutiques, all set against the backdrop of the Indian Ocean,
                    making it a must-see destination.
                  </p>
                </div>
              </div>

              <div className={styles.AllBlogs_Box}>
                <img
                  src="https://www.ceylonexpeditions.com/medias/destination_places/big/106/temple-of-the-sacred-tooth-relic-kandy.jpg"
                  alt=""
                />

                <div className={styles.AllBlogs_BoxContent}>
                  <h6>Temple of Tooth Relic</h6>
                  <p className={styles.Intro}>
                  The Temple of the Tooth Relic, or Sri Dalada Maligawa, is a sacred Buddhist temple in Kandy, Sri Lanka. It houses the revered relic of the tooth of the Buddha, making it a major pilgrimage site. Renowned for its architectural beauty and spiritual significance, the temple plays a vital role in Sri Lankan culture and history, hosting the annual Esala Perahera festival, which attracts numerous visitors worldwide.
                  </p>
                </div>
              </div>


            </div>
          </section>
        </>
      )}
    </>
  );
};

export default Blogs;
