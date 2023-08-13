import React, { useEffect, useState } from 'react'

const usePageBottom = () => {
    const [isPageBottom, setIsPageBottom] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrolledToBottom =
                window.innerHeight + window.scrollY >= document.body.offsetHeight;

            setIsPageBottom(scrolledToBottom);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return isPageBottom;
}

export default usePageBottom