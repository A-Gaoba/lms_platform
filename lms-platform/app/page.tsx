import { Button } from '@/components/ui/button'
import { Dangrek } from 'next/font/google'
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className='bg-sky-100 w-full min-h-screen'>
      <p className='text-3xl'>hello</p>
      <Button variant="secondary" >Click here</Button>
      <UserButton afterSignOutUrl="/" />

    </div>
  )
}