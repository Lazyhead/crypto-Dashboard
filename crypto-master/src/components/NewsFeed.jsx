import React from 'react'
import { useEffect , useState} from 'react'
import axios from 'axios'

const NewsFeed = () => {
  const [articles, setArticles] = useState(null);

  useEffect(() => {

    const options = {
      method: 'GET',
      url: 'https://crypto-news-live3.p.rapidapi.com/news',
      headers: {
        'X-RapidAPI-Key': '811168ceb2msh1cfc98248505d8ep14e425jsn0857aa86e957',
        'X-RapidAPI-Host': 'crypto-news-live3.p.rapidapi.com'
  }
    };
    axios.request(options).then(function (response) {
      console.log(response.data);
      setArticles(response.data);
    }).catch(function (error) {
      console.error(error);
    });
  }, [])

  console.log(articles)

  const first10Articles = articles?.slice(0,5)

    return (
        <div className="news-feed">
            <h2><hr /> News Feed <hr /> </h2>
            {first10Articles?.map((article, _index) => (
                <div key={_index}>
                    <a href={article.url}><p>{article.title}</p></a>
                </div>))}
        </div>
  )
}

export default NewsFeed