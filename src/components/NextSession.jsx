'use client'
import React from 'react'
import { SessionProvider } from "next-auth/react"

export default function NextSession({ children }) {
    return <SessionProvider >
        {children}
    </SessionProvider>

}
