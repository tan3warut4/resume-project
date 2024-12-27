import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <>
            <nav className='flex px-10 py-5 justify-between'>
                <div>
                    <Link href="/">
                        Project name
                    </Link>
                </div>
                <div>
                    <ul>
                        <li>
                            <Link href="/login">
                                Log in
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar