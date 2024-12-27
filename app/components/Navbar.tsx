"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { FaRegMoon } from "react-icons/fa";
import { LuSunMedium } from "react-icons/lu";



const Navbar = () => {
    const [isLight, setIsLight] = useState(true)

    return (
        <>
            <nav className='flex px-10 py-5 justify-between'>
                <div className='flex items-center gap-4 text-slate-600'>
                    <div className=' font-semibold tracking-wide border py-2 px-3 rounded-full'>
                        <Link href="/">
                            I want to be a Software engineer 💩
                        </Link>
                    </div>
                    <div className=' align-middle '>
                        <button>
                            My Resume
                        </button>
                    </div>
                    <div>
                        <button>
                            Todo Lists
                        </button>
                    </div>
                </div>

                <div className='content-center'>
                    <ul className='flex justify-center align-middle gap-3'>
                        <li>
                            <Link href="/login">
                                Log in
                            </Link>
                        </li>
                        <li className='text-center content-center flex'>
                            <button onClick={() => setIsLight(!isLight)}>
                                {
                                    isLight ? <FaRegMoon /> : <LuSunMedium />
                                }
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar