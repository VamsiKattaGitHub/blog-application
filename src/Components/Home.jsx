import React, { useState, useEffect } from 'react';
import choso from '../images/choso.webp';
import notavailable from "../images/not-available.jpg"
import '../Styles/home.css';
import styles from "../Styles/Bollywood.module.css";

const Home = () => {
  const [description, setDescription] = useState([]);
  const [limitedCards,setlimitedCards] = useState(3)
  const [loadMoreCards, setLoadMoreCards] = useState(11);
  const [lim,setLim] = useState(7)
  const [loading,setLoading] = useState(true);
  const hollyApi = async () => {
    const response = await fetch("https://bl0gbackend.onrender.com/home");
    const data = await response.json();
    setDescription(data);
    setLoading(false)
  };

  useEffect(() => {
    hollyApi();
  }, []);

  const limited = description.slice(0,limitedCards)
  const latestArticles = description.slice(7,loadMoreCards);
  const secondlim = description.slice(4,lim)
  const increment = () => {
    setLoadMoreCards(loadMoreCards + 4);
  };
  return (
    <>
     <div className="container">
     {loading ? (
              <div className="d-flex justify-content-center align-items-center">
                <div className="spinner-border text-warning" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            ) :
     (
      <>
      <div className="d-flex flex-conatiner gap-3 mt-4 ms-auto" width="90%">
        <div className="img-container" >
          <img src={description[0]?.urlToImage||"Image not found"} className='img-fluid main-img' alt={description[0]?.title} style={{objectFit:"cover"}} />
          <div className="para">
          <h3>{description[0]?.title}</h3>
          <p>{description[0]?.publishedAt}</p>
          </div>
        </div>
        <div class="secondary d-none d-md-block">
          <div className="secondary-1">
        {description.length > 1 && <img src={description[1]?.urlToImage || choso} className='secondary-img' alt={description[1].title} />}
         <div className="para-2">
         <h5>{description[1]?.title}</h5>
         <p>{description[1]?.publishedAt}</p>
         </div>
          </div>
        <div className="secondary-2">
        {description.length > 2 && <img src={description[2]?.urlToImage || choso} className='secondary-img mt-3' alt="Secondary 2" />}
        <div className="para-2">
         <h5>{description[2]?.title}</h5>
         <p>{description[2]?.publishedAt}</p>
         </div>
        </div>
        </div>
      </div>

      <div className="latest mt-1 mt-md-5">
        <h2>The Latest</h2>
        <div className="row row-cols-1 row-cols-md-3 g-4 mt-4">
          {secondlim.map((item, index) => (
            <div className="col" >
              <div className="card latest-1" key={index}>
                <img src={item.urlToImage || choso} className="card-img-top" alt={item.title} />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text line-clamp">{item.description}</p>
                  <p className='text-muted line-clamp'><strong className='text-dark'>{item.source.name}</strong> / {item.publishedAt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

<div className="latest-articles  mt-1 mt-md-5">
  <h2>Latest Articles</h2>
  <div className="d-flex advertisement mt-5" >
<div>
{
  latestArticles.map((item,index)=>(
    <div className={`card mb-3 ${styles.noBorder}`} style={{ maxWidth: 800, marginBottom: '1rem' }}  key={index}>
      <hr />
    <div className="row g-0" >
      <div className="col-md-4">
        <img src={item.urlToImage || notavailable} alt={item.title} style={{ width: "100%", height: "100%" }} />
      </div>
      <div className="col-md-8">
        <div className="card-body">
      
            <h5 className="card-title">{item.title}</h5>
          <p className="card-text line-clamp">{item.description}</p>
          <p className="card-text line-clamp"><small className="text-muted"><strong>Published on:</strong> {item.publishedAt ? item.publishedAt : "N/A"}</small></p>
        </div>
      </div>
    </div>
  </div>
    
  ))
}
<button className='btn btn-success' onClick={increment}>Load more</button>
</div>
<div className='top-posts d-none d-md-block '>
  <div className='text-center d-flex add' style={{height:"500px",padding:"10px"}}>
    <h2 className='ms-auto'>Advertisement</h2>
  </div>
<h2 className='mt-5'>Top Posts</h2>
</div>
</div>
</div>
      
      </>
     )}
     

     </div>
    </>
  )
}

export default Home;
