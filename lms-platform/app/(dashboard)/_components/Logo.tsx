"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"


export const Logo = () => {
  const router = useRouter();
  const onClick = () => {
    router.push("/");
  }
  return (
    <div className="flex items-center justify-center">
      <Image
        className="p-3"
        height={50}
        width={50}
        alt="logo"
        src="/logo.svg" />
      <p className="font-bold cursor-pointer" onClick={onClick}>Al-Nahdhah School</p>
    </div>
  )
}