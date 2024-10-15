import { useState, useEffect } from 'react';

const QuoteComponent = () => {
    const [quote, setQuote] = useState('Placeholder quote');

    useEffect(() => {
        const apiUrl = 'https://api.chucknorris.io/jokes/random?category=dev';
        const getQuote = async () => {
            const data = await fetch(apiUrl).then((response) => response.json());
            setQuote(data.value);
        };
        getQuote();
    }, []);

    return (
            <p>{quote}</p>

    );
};

export default QuoteComponent;
