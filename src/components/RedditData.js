import React, { useState } from 'react';

const RedditData = ({ redditData }) => {
    const [expanded, setExpanded] = useState([]);

    const toggleText = (index) => {
        const newExpanded = [...expanded];
        newExpanded[index] = !newExpanded[index];
        setExpanded(newExpanded);
    };

    return (
        <div className='row'>
            {redditData && redditData.length !== 0 && (
                redditData.map((el, i) => {
                    console.log(el);
                    const { author, url, title, selftext, thumbnail } = el.data;
                    const isExpanded = expanded[i];
                    const truncatedText = selftext.slice(0, 200);
                    return (
                        <div className='col-md-4 pt-3 pb-3' key={i}>
                            <div className='card_reddit'>
                                <h5>{title}</h5>
                                <p>
                                    {isExpanded ? selftext : (
                                        <>
                                            {truncatedText}
                                        </>
                                    )}
                                </p>
                                {selftext.length > truncatedText.length && (
                                    <i className='read_more' onClick={() => toggleText(i)}>
                                        {isExpanded ? '... Read Less' : '... Read More'}
                                    </i>
                                )}
                                <h6 className='author'>Author: {author}</h6>
                                <a href={url} target='_blank' className='btn-details'>More Details</a>
                                {thumbnail && thumbnail !== 'self' && thumbnail !== null && (
                                    <img className='img-fluid' alt='reddit-thumbnail' src={thumbnail} />
                                )}
                            </div>
                        </div>
                    );
                })
            )}
        </div>
    );
};

export default RedditData;
