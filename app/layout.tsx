import type {Metadata} from 'next'
import {Roboto} from 'next/font/google'
import '@/css/globals.css'
import React from "react";
import Link from "next/link";

const roboto = Roboto({
    weight: ["300", "400", "500", "700"],
    style: ["italic", "normal"],
    subsets: ['latin']
})

export const metadata: Metadata = {
    metadataBase: new URL('https://acme.com'),
    openGraph: {
        title: "Portfolio Juan Pavas",
        description: 'Portfolio Application By Juan Pavas',
        url: 'https://juan-pavas-portfolio.netlify.app',
        siteName: "Portfolio Juan Pavas",
    },
    title: 'Portfolio Juan Pavas',
    description: 'Portfolio Application By Juan Pavas',
}


type Props = {
    children: React.ReactNode
};

export default function RootLayout({children}: Props) {
    return (
        <html lang="en">
        <body className={roboto.className}>
        <nav>
            <div>
                <Link href="/">
                    Portfolio
                </Link>
            </div>
            <ul>
                <li>
                    <Link href="/biography">
                        Biografia
                    </Link>
                </li>
                <li>
                    <Link href="/about">
                        Acerca de mí
                    </Link>
                </li>
                <li>
                    <Link href="/experience">
                        Experiencia
                    </Link>
                </li>
                <li>
                    <Link href="/projects">
                        Proyectos
                    </Link>
                </li>
                <li>
                    <Link href="/contact">
                        Contactame
                    </Link>
                </li>
            </ul>
        </nav>
        {children}
        </body>
        </html>
    )
}
