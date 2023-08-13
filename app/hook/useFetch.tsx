import React, { useEffect, useState } from 'react'

interface type {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

const useFetch = (url: string) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => setData(data));
    }, [url]);

    return [data];
}

export default useFetch