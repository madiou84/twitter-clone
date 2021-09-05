import React from 'react'
import {
    BellIcon,
    HomeIcon,
    MailIcon,
    UserIcon,
    HashtagIcon,
    DotsHorizontalIcon,
    DotsCircleHorizontalIcon
} from '@heroicons/react/solid';

export default function NavItem ({ active, icon, children }) {
    return (    
        <li className={`${active ? 'font-extrabold text-secondary-300' : 'font-semibold text-secondary-500'} text-xl py-2 px-2 flex items-center cursor-pointer hover:bg-white hover:bg-opacity-10 rounded-3xl inline-block transition-all duration-150 ease-in-out`}>
            {icon}
            {children}
        </li>
    )
}