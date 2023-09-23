import './globals.css'
import type { Metadata } from 'next'
import Link from 'next/link'
import { Inter } from 'next/font/google'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'

import { FolderClosed, Heart, Image } from 'lucide-react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}


// code copied from shadcn repo, then modified
function SideBar() {
  return (
    <div className="w-1/5 flex flex-col gap-2 py-8 px-2">
      <h2 className="text-lg font-bold self-center md:self-start md:px-4">
        Manage
      </h2>
      <div className="flex flex-col gap-1 items-center md:items-start">
        <Link href="/gallery" >
          <Button variant="ghost" className='md:hidden'>
            {/* disabling es-lint because it is treating Image as component rather than icon from lucide react */}
            {/* eslint-disable-next-line */}
            <Image size={32} />
          </Button>

          <Button variant="ghost" className="w-full hidden md:flex md:gap-2 md:justify-start">
            {/* eslint-disable-next-line */}
            <Image />
            Gallery
          </Button>
        </Link>

        <Link href="/albums" >
          <Button variant="ghost" className='md:hidden'>
            <FolderClosed size={32} />
          </Button>

          <Button variant="ghost" className="w-full hidden md:flex md:gap-2 md:justify-start">
            <FolderClosed />
            Albums
          </Button>
        </Link>

        <Link href="favorites" >
          <Button variant="ghost" className='md:hidden'>
            <Heart size={32} />
          </Button>

          <Button variant="ghost" className="w-full hidden md:flex md:gap-2 md:justify-start">
            <Heart />
            Favorites
          </Button>
        </Link>

      </div>
    </div>
  )
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='dark'>
      <body className={inter.className}>

        <div className="border-b ">
          <div className="flex h-16 items-center px-4 container">
            PHOTOS APP
            <div className="ml-auto flex items-center space-x-4">

              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>

        <div className='flex'>
          <SideBar />
          <div className='w-full px-4 pt-8'>
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
