// import { useState } from 'react';
import useDarkMode from '../hooks/useDarkMode'
import {FaSearch, FaHashtag, FaRegBell, FaUserCircle, FaMoon, FaSun} from 'react-icons/fa'

const ContentContainer = () => {
	const [darkTheme, setDarkTheme] = useDarkMode()
	const handleMode = () => setDarkTheme(!darkTheme)

	return (
		<div className='content-container'>
			<div> Hello I am content container.</div>
			<span className='ml-20' onClick={handleMode}>
				{darkTheme ? <FaSun size='24' className='top-navigation-icon' /> : <FaMoon size='24' className='top-navigation-icon' />}
			</span>
			<br />
			<div className='text-amber-500 bg-white dark:text-orange-200 dark:bg-orange-900'>Hello I am Dynamic</div>
		</div>
	)
}

export default ContentContainer
