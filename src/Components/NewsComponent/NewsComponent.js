import React, { useState, useEffect } from 'react'
import NewsItem from '../NewsItem/NewsItem'
import InfiniteScroll from "react-infinite-scroll-component";


function NewsComponent(props) {

  const articlesObj = {
    article: [],
    loading: false,
    page: 1,
    totalResults: 0
  }

  const [articles, setArticle] = useState(articlesObj);

  const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  const upadteNews = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.api}&page=${articles.page}&pageSize=${props.pageSize}`;
    const res = await fetch(url)
    const data = await res.json();
    console.log(data);
    let parsedData = data.articles;
    setArticle({ article: parsedData, page: 1, loading: false, totalResults: parsedData.totalResults })
    //   .then((res) => await res.json())
    //   .then((a) => {
    //     let parsedData = a.articles
    //     setArticle({ article: parsedData, page: 1, loading: false, totalResults: parsedData.totalResults });
    //   });
    // console.log(articles.totalResults);
  }


  useEffect(() => {
    document.title = `${capitalize(props.category)} - News Daily`
    upadteNews();
  }, []);

  const fetchMoreData = async () => {
    // setArticle({ article: articles.article, page: articles.page + 1, totalResults: articles.totalResults });

    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.api}&page=${articles.page + 1}&pageSize=${props.pageSize}`;
    await fetch(url)
      .then((res) => res.json())
      .then((a) => {
        let parsedData = a.articles
        setArticle({
          article: articles.article.concat(parsedData),
          page: articles.page + 1,
          loading: false,
          totalResults: parsedData.totalResults
        });
      });
  }


  return (

    <div className='container my-4'>
      <h2 className={`mb-3 text-light`} style={{ marginTop: "90px" }}> {`News Daily -${props.heading}`} </h2>

      <InfiniteScroll
        dataLength={articles.article.length}
        next={fetchMoreData}
        hasMore={articles.article.length !== articles.totalResults}
      >

        <div className="container">

          <div className="row">
            {articles.article.map((elem) => {
              return <div className="col-md-4 col-12" key={elem.url}>
                <NewsItem title={elem.title ? elem.title.slice(0, 180) : ""} description={elem.description ? elem.description.slice(0, 200) : ""} imageUrl={elem.urlToImage ? elem.urlToImage : "https://i.cdn.newsbytesapp.com/images/l88920220703152019.jpeg"} url={elem.url} author={elem.source.name} date={elem.publishedAt} enabledarkMode={props.enabledarkMode} />
              </div>
            })};
          </div>

        </div>

      </InfiniteScroll>
    </div>
  )
}

export default NewsComponent