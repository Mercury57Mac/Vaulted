'use client'
import{
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel
} from '@headlessui/react'
import { ChevronDoubleDownIcon, UserCircleIcon } from '@heroicons/react/16/solid'
import Link from "next/link"

export default function Header(){
    
    return(
        <header className="bg-zinc-900">
            <nav className="mx-auto flex max-w-7xl items-start p-6 lg:px-8">
                <div className='flex'>
                <Link href='/' className="px-4 text-base/7 font-semibold text-white"> HOME</Link>
        <PopoverGroup className="flex lg:flex lg:gap-x-12">
          <Popover className="relative">
            {({ open }) => (
              <>
                <PopoverButton className="flex items-center text-base/7 font-semibold text-white">
                  ARCHIVES
                  <ChevronDoubleDownIcon
                    className={` size-5 flex-none text-white transition-transform duration-300 ease-in-out ${
                      open ? 'rotate-180' : ''
                    }`}
                  />
                </PopoverButton>

                <PopoverPanel className="absolute top-full mt-2 w-screen max-w-xs overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in">
                  <div className="flex flex-col text-align-center">
                    <a
                      href=""
                      className="text-black p-3 hover:bg-zinc-300 duration-300 ease-in-out"
                    >
                      Pendleton
                    </a>
                    <a
                      href=""
                      className="text-black p-3 hover:bg-zinc-300 duration-300 ease-in-out"
                    >
                      Levis
                    </a>
                    <a
                      href=""
                      className="text-black p-3 hover:bg-zinc-300 duration-300 ease-in-out"
                    >
                      Hanes
                    </a>
                  </div>
                </PopoverPanel>
              </>
            )}
          </Popover>
        </PopoverGroup>
        </div>    

        <div className="flex-1 text-center pr-20">
          <Link href='/'><h2 className="text-white font-semibold text-3xl whitespace-nowrap italic">VAULTED</h2></Link>
        </div>
        <div className='flex items-end'>
            <Link href='/login' className='font-semibold flex items-center gap-2'>LOGIN<UserCircleIcon className='w-7 h-7'/></Link>
            
        </div>
            </nav>

        </header>
    )
}