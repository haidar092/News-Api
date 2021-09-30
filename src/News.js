import React, { useState,useEffect } from 'react'
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props)=> {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0)

    

   
    const CapitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    
    const update= async ()=> {
        props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pagesize=${props.size}`;
        setLoading(true)
        let data = await fetch(url);
        props.setProgress(30);
        let parseData = await data.json();
        props.setProgress(60);
        setArticles(parseData.articles)
        setTotalResults(parseData.totalResults)
        setLoading(false)
        console.log(parseData);
        props.setProgress(100);


    }
    useEffect(() => {
         document.title = `${CapitalizeFirstLetter(props.category)} _ NewsMonkey`;
        update();
        
        
    },[])
   
        
    

   const fetchMoreData = async () => {
       setPage(page+1)
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page+1}&pagesize=${props.size}`;
        let data = await fetch(url);
        let parseData = await data.json();
       setArticles(articles.concat(parseData.articles));
       setTotalResults(parseData.totalResults)
       
    };




    
        return (
            <>

                <h2 className="text-center my-5">NewsMonkey - Top  { CapitalizeFirstLetter(props.category)} Headlines </h2>
                {loading && <Spinner />}
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalResults}

                    loader={<Spinner />} >


                    <div className="container my-5">
                        <div className="row">
                            {articles.map((elment) => {
                                return <div className="col-md-4" key={elment.url}>
                                    <NewsItem title={elment.title ? elment.title.slice(0, 45) : ""} description={elment.description ? elment.description.slice(0, 120) : ""} url={elment.urlToImage} newsUrl={elment.url} author={elment.author} date={elment.publishedAt} source={elment.source.name} />
                                </div>


                            })
                            }

                        </div>
                    </div>
                </InfiniteScroll>





            </>
        )
    }

News.defaultProps = {
    country: 'in',
    size: 6,
    category: 'general'
}

News.propTypes = {
    country: PropTypes.string,
    size: PropTypes.number,
    category: PropTypes.string,
}
export default News;
