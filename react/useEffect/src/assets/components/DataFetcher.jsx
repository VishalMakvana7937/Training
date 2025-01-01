import React, { useEffect } from 'react';

const DataFetcher = () => {
    const [data, setData] = React.useState([]);
    const [loading, setLoading] = React.useState(true);


    //  it will run only on 1st render
    useEffect(() => {
        fetch('https://jsonPlaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => {
                setData(data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching data:", error);

            });
    }, []);

    return (
        <div>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <ul>
                    {data.map(item => (
                        <>
                            <li key={item.id}>{item.id}</li>
                            <li key={item.id}>{item.title}</li>
                            <li key={item.id}>{item.body}</li>
                        </>

                    ))}
                </ul>
            )}
        </div>
    );
}

export default DataFetcher;
