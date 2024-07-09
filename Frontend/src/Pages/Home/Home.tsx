import React, { useState, useEffect } from "react";
import Typical from "react-typical";
import "./Home.css";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  const titles = ["Welcome to My Site", "Learn with Us", "Join Our Community"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, []);

  const blogPosts = [
    {
      id: 1,
      title: "Exploring the Mountains",
      description: "A thrilling journey through the rugged mountains.",
      imageUrl:
        "https://www.holidify.com/images/cmsuploads/compressed/shutterstock_562419604_20191120103528.png",
    },
    {
      id: 2,
      title: "City Lights and Nights",
      description: "Discovering the vibrant nightlife of the city.",
      imageUrl:
        "https://molon.de/galleries/Sri_Lanka/Galle/images01/18%20Street%20in%20Galle%20fort%20at%20night.jpg",
    },
    {
      id: 3,
      title: "Beach Vibes",
      description: "Relaxing on the sunny beaches of the coast.",
      imageUrl:
        "https://destinationlesstravel.com/wp-content/uploads/2019/04/DSC_8786-1024x684.jpg",
    },
  ];

  const gallery = [
    "https://glennmckimmin.com/wp-content/uploads/2019/09/Day-5-672x372.jpg",
    "https://d25bj6yx3nvsy8.cloudfront.net/2017/10/lone-lepoard-2.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDj83ae7QasNEpbtuw7WhPMvtP_-xbvKwL0w&s",
    "https://bmkltsly13vb.compat.objectstorage.ap-mumbai-1.oraclecloud.com/cdn.hitv.lk/media/images/image_8340d960c4.jpg",
    "https://media-cdn.tripadvisor.com/media/photo-s/1d/78/63/3d/beautiful-nature-in-srilanka.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7Lvw0QYhS6KGSOwX3oTgW-dviLtNjmlhnYA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2rJ5X9DgAh0QZDU5c6RlVYpNa5uLiE1EUzg&s",
    "https://d25bj6yx3nvsy8.cloudfront.net/2016/02/Great-Gathering-1.jpg",
    "https://www.holidify.com/images/cmsuploads/compressed/shutterstock_562419604_20191120103528.png",
    
  ];

  return (
    <div>
      <div className="home-container">
        <h1 className="home-title">
          <Typical steps={[titles[index]]} wrapper="span" />
        </h1>

        <div className="container">
          <div className="paragraph left animate-left">
            <p className="discrifont">
              Welcome to [Your Travel Blog Name], where wanderlust meets
              practical advice. Join us as we explore the world's hidden gems,
              share travel tips, and inspire your next adventure. Whether you're
              a seasoned globetrotter or planning your first getaway
            </p>
          </div>
          <div className="vertical-line"></div>
          <div className="paragraph right">
            <p className="righttext">
              Discover the World,
              <br />
              One Adventure at a Time
            </p>
          </div>
        </div>

        <div>
          <section className="ButtonSection">
            <Link to="/Blogs" className="ViewButton">
              View Blogs
            </Link>
          </section>
        </div>

        <div className="blog-posts">
          {blogPosts.map((post) => (
            <div key={post.id} className="blog-post">
              <img
                src={post.imageUrl}
                alt={post.title}
                className="blog-image"
              />
              <h2 className="blog-title">{post.title}</h2>
              <p className="blog-description">{post.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="gallery-container">
          <h2 className="h2"></h2>
          <div className="horizontal-scroll">
            {gallery.map((photo, index) => (
              <img key={index} src={photo} alt={`Photo ${index}`} className="gallery-image" />
            ))}
          </div>
        </div>

    </div>
  );
};

export default Home;
