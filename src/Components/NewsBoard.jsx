import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const NewsBoard = ({category}) => {
  const [articles, setArticles] = useState([]);

useEffect(() => {
  const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=000e1e9ded38485c8a4c58123dccb102`;
  fetch(url)
    .then(response => response.json())
    .then(data => {
      setArticles(data.articles);
    })
    .catch(error => console.error("Error fetching news:", error));
}, [category]);

  return (
    <div>
      <h2 className="text-center mt-3 mb-3">
        Latest <span className="badge bg-danger">News</span>
      </h2>
      {articles.map((news, index) => (
        <NewsItem
          key={index}
          title={news.title}
          description={news.description}
          src={news.urlToImage}
          url={news.url}
        />
      ))}
    </div>
  );
};

export default NewsBoard;
