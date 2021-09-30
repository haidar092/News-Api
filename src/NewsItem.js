import React from 'react'
import "./index.css";
const NewsItem = (props) => {
    
        let { title, description, url, newsUrl, author, date,source } = props;
        return (
            <>

                <div className="card" >
                    <span className="position-absolute top-0  translate-middle badge bg-danger  rounded-pill"style={{left:"90%" ,marginTop :"10px", zIndex: "1"}}>
                    {source}</span>
                    <img src={!url ? "https://images.unsplash.com/photo-1508919801845-fc2ae1bc2a28?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1685&q=80" : url} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description} </p>
                        <p className="card-text"><small className="text-muted">By {author ? author : "Unkown"} on {new Date(date).toGMTString()}</small></p>
                        <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-success">Read More</a>
                    </div>

                </div>




            </>
        )
    
}

export default NewsItem;
