import React, { useState } from 'react';
import axios from 'axios';
import CustomInput from '../components/CustomInput';
import RedditData from '../components/RedditData';

function Home() {
    const [word, setWord] = useState('');
    const [redditData, setRedditData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const getRedditData = async function(e) {
        e.preventDefault();
        if (word.trim() === '') {
            setError('Input cannot be empty. Please type something!');
            return;
        }
        setLoading(true);
        let obj = {
            qSearch: word
        }
        try{
            const res = await axios.post('https://node-reddit-search-app-production.up.railway.app/', obj);
            setRedditData(res.data);
            setLoading(false);
            setError(false);
        }catch(err) {
            setError(err.message);
            setLoading(false);
        }
    }

    //console.log(word);  
    return (
        <>
            <section id='reddit_search'>
                <div className='container-xxl'>
                    <form onSubmit={getRedditData}>
                        <CustomInput 
                            type="text" 
                            label="Enter search word" 
                            value={word} 
                            id="word" 
                            name="word" 
                            onChange={(e) => setWord(e.target.value)} 
                        />
                        <button type='submit' className='btn btn-search'>
                            {loading && <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>}
                            Search
                        </button>
                    </form>
                    {error && (
                        <p className='error'>{error}</p>
                    )}
                </div>
            </section>

            <section id='reddit_data'>
                <div className='container-xxl'>
                    {redditData && redditData.length !== 0 && (
                        <RedditData redditData={redditData} />
                    )}
                </div>
            </section>
        </>
    )
}

export default Home;
