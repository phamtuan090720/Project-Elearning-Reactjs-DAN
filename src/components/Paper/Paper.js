import React from 'react'

export default function Paper({ children, className }) {
    return (
        <div className={className} style={{ boxShadow: '0px 3px 3px -2px rgb(0 0 0 / 20%), 0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%)', transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms" }}>
            {children}
        </div>
    )
}
