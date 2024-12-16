import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/BlogList.css";
import img1 from "../images/blog-1_1200x.png";
import img2 from "../images/blog-2_1200x.png";
import img3 from "../images/blog-3_1200x.png";

function BlogList() {
    const blogs = [
      {
        id: 1,
        date: "August 01, 2023",
        title: "The Art of Layering: Creating Stylish and Functional Outfits",
        image: img1, 
      },
      {
        id: 2,
        date: "August 01, 2023",
        title: "A Glimpse into Men's Fashion Trends: What's Hot and What's Not",
        image: img2, 
      },
      {
        id: 3,
        date: "August 01, 2023",
        title: "Fashion Dos and Don'ts Every Woman Should Know",
        image: img3, 
      },
    ];
  
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };
  
    return (
      <div className="blog-section">
        <h2 className="section-heading" style={{ textAlign: "center" }}>
          Latest Blog
        </h2>
        <Slider {...settings} className="blog-slider">
          {blogs.map((blog) => (
            <div key={blog.id} className="blog-card">
              <img src={blog.image} alt={blog.title} className="blog-image" />
              <div className="blog-content">
                <p className="blog-date">
                  <i className="fa fa-calendar" aria-hidden="true"></i> {blog.date}
                </p>
                <h3 className="blog-title">{blog.title}</h3>
                <a href="#" className="blog-read-more">
                  Read More
                </a>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
  
  export default BlogList;