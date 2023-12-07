import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/NavBarStyles.css'
function NavBarComponent() {
    return (
        <header className='shadow'>
            <nav>
                <h2><Link href="/home">Astro</Link></h2>
                <div className="internal-links">
                    <Link to="/home">Home</Link>
                    <Link to="/blog">Blog</Link>
                    <Link to="/about">About</Link>
                </div>

                <div className="social-links">

                    <Link to='/login'>
                        <svg viewBox="0 0 16 16" aria-hidden="true" width="32" height="32">
                            <circle cx="12" cy="6" r="4" stroke="#1C274C" stroke-width="1.5" />
                            <path d="M15 20.6151C14.0907 20.8619 13.0736 21 12 21C8.13401 21 5 19.2091 5 17C5 14.7909 8.13401 13 12 13C15.866 13 19 14.7909 19 17C19 17.3453 18.9234 17.6804 18.7795 18" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" />

                        </svg>

                    </Link>
                </div>
            </nav>
        </header>
    )
}

export default NavBarComponent