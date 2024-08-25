import Link from 'next/link'
import React from 'react'
import { Fugaz_One } from "next/font/google";

const fugaz = Fugaz_One({ subsets: ["latin"],  weight: ['400']  });

export default function Header() {
  return (
    <header className={"p-3 sm:p-7 flex items-center justify-between gap-4 " + fugaz.className}>
      <Link href={'/'}>
        <h1 className="text-xl md:text-2xl textGradientStrongRed  font-bold">Moody</h1>
        <p>Find your flow</p>
      </Link>
    </header>
  )
}
