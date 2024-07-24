import React, { useState, useEffect } from 'react';
import styles from "../Styles/Bollywood.module.css";
import { NavLink } from "react-router-dom";

const BollywoodNews = () => {
  const [description, setDescription] = useState([]);
  const [loadMoreCards, setLoadMoreCards] = useState(10);
  const [loading, setLoading] = useState(true);
  const [topPosts, setTopPosts] = useState([]);

  const bollywoodApi = async () => {
    const response = await fetch("https://bl0gbackend.onrender.com/bollywood");
    const data = await response.json();
    setDescription(data);
    setLoading(false);
    setTopPosts(data.slice(2, 8)); // Assuming top posts are the first 5 posts
  };

  useEffect(() => {
    bollywoodApi();
  }, []);

  const displayedCards = description.slice(2, loadMoreCards);
  const increment = () => {
    setLoadMoreCards(loadMoreCards + 8);
  };

  return (
    <>
      <div className="container pb-5">
        <h2 className='mb-4'>Bollywood News</h2>
        <div className="row">
          <div className="col-md-8">
            {loading ? (
              <div className="d-flex justify-content-center align-items-center">
                <div className="spinner-border text-warning" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            ) : (
              <>
                {displayedCards.map((item, index) =>
                !item.urlToImage ? "" :
                (
                  <div className={`card mb-3 ${styles.noBorder}`} style={{ maxWidth: 800 }} key={index}>
                    <div className="row g-0">
                      <div className="col-md-4">
                        <img src={item.urlToImage} alt={item.title} style={{ width: "100%", height: "100%" }} />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                      
                            <h5 className="card-title">{item.title}</h5>
                          <p className="card-text">{item.description}</p>
                          <p className="card-text"><strong>Author</strong>: {item.author ? item.author : "N/A"}</p>
                          <p className="card-text"><strong>Source</strong>: {item.source.name ? item.source.name : "N/A"}</p>
                          <p className="card-text"><small className="text-muted"><strong>Published on:</strong> {item.publishedAt ? item.publishedAt : "N/A"}</small></p>
                        </div>
                      </div>
                    </div>
                    <hr />
                  </div>
                ))}
                <button className='btn btn-success text-white' type='button' onClick={increment}>Load more</button>
              </>
            )}
          </div>
          <div className="col-md-4">
            <h4 className='mb-4'>Top Posts</h4>
            {topPosts.map((post, index) => !post.urlToImage ?"" : (
              <div className="card mb-3" key={index}>
                <img src={post.urlToImage} className="card-img-top" alt={post.title} height={150} style={{objectFit:'cover'}} />
                <div className="card-body">
                    <h5 className="card-title">{post.title}</h5>
           
                  <p className="card-text"><small className="text-muted">{post.publishedAt}</small></p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BollywoodNews;
