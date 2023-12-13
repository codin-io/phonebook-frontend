import Image from 'next/image'

import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'

export function Header() {
  return (
    <header className="fixed top-0 flex h-24 w-full justify-center bg-white">
      <div
        id="container"
        className="m-auto flex h-14 w-full max-w-[1222px] items-center justify-between px-5"
      >
        <div id="logo" className="flex gap-2">
          <Image src="/Notepad.svg" alt="Notepad" width={32} height={32} />
          <h4 className="text-base font-bold leading-8 tracking-[2px] sm:text-2xl">PHONEBOOK</h4>
        </div>
        <Avatar>
          <AvatarImage
            src="/avatar.jpeg"
            className="h-14 w-full max-w-[56px] rounded-full border-[2px] border-[#4F75FF]"
          />
          <AvatarFallback>
            <Image
              src="/avatar.jpeg"
              alt="user"
              width={32}
              height={32}
              className="rounded-full border-[2px] border-[#d1d1d1] p-2"
            />
          </AvatarFallback>
        </Avatar>
      </div>
    </header>
  )
}
