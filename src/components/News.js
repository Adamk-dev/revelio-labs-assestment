import React from 'react';

const Link = ({ url, title }) => (
  <a href={url} target="_blank" rel="noreferrer">
    {title}
  </a>
);

const News = ({ story: { id, by, title, kids, time, url,score } }) => 
{
  return (
    <div className="story">
      <div className="story-title">
        <Link url={url} title={title} />
        <span className="story-info">
          {' '}
         ({url?.split("/")?.[2]})
        </span>
      </div>
      <div className="story-info">
       
      <span>
        
          <Link
            url={`https://news.ycombinator.com/item?id=${by}`}
            title={`${score} points by ${by}`}
          />
        </span>
        |
        <span>
          {new Date(time * 1000).toLocaleDateString('en-US', {
            hour: 'numeric',
            minute: 'numeric'
          })}
        </span>
        |
        <span>
          <Link
            url={`https://news.ycombinator.com/item?id=${id}`}
            title={`${kids && kids.length > 0 ? kids.length : 0} comments`}
          />
        </span>
      </div>
    </div>
  );
};

export default News;
