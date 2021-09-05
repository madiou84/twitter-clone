import React from 'react'

export default function Nav({ children }) {
    return (
        <ul className="space-y-4">
            {children}
        </ul>
    )
}