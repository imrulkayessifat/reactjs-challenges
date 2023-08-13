import React, { useContext } from 'react'
import { ThemeContext, ThemeDispatchContext } from '../page';
import clsx from 'clsx';
const Themechange = () => {
    const theme = useContext(ThemeContext);
    const setTheme = useContext(ThemeDispatchContext);
    return (
        <div className={clsx(`h-screen w-full flex `,theme==='dark'? 'bg-gray-900': 'bg-white')}>
            <button className='m-5 p-5 bg-green-400' onClick={() => setTheme('light')}>Light</button>
            <button className='m-5 p-5 bg-red-400' onClick={() => setTheme('dark')}>dark</button>
        </div>
    )
}

export default Themechange