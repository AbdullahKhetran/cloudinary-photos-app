import './globals.css'
import type { Metadata } from 'next'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import Image from 'next/image'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'

import { FolderClosed, Heart, UserCircle2 } from 'lucide-react'
import { Image as ImageIcon } from 'lucide-react'

import FolderList from '@/components/nested-folders'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Photos App',
  description: 'Your favorite photos app',
}


// code copied from shadcn repo, then modified
function SideBar() {
  return (
    <div className="w-1/5 flex flex-col gap-2 py-8 px-2">
      <h2 className="text-lg font-bold self-center md:self-start md:px-4">
        Manage
      </h2>

      <div className="flex flex-col gap-1 items-center md:items-start">
        <Link href="/" >
          <Button variant="ghost" className='md:hidden'>
            <ImageIcon size={32} />
          </Button>

          <Button variant="ghost" className="w-full hidden md:flex md:gap-2 md:justify-start">
            <ImageIcon />
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

        <FolderList />

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

        <div className="border-b mx-2">
          <div className="flex h-16 items-center px-4 ">
            <Link href="/" className='flex items-center'>
              <Image
                src="/album.png"
                width="50"
                height="50"
                alt="Icon of photo album app"
              />
              <h1>PHOTOS APP</h1>
            </Link>
            <UserCircle2 size={36} strokeWidth={1} className='ml-auto' />
          </div>
        </div>

        <div className='flex mx-2'>
          <SideBar />
          <div className='w-full px-4 pt-8'>
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
