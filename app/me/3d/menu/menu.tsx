import { Button } from '@/components/ui/button'
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { MenuIcon, X } from 'lucide-react'
import React, { Dispatch, SetStateAction, useEffect } from 'react'
import MenuButton from './menu-button'

function Menu({ onSectionChange, menuOpen, setMenuOpen }: { onSectionChange: Dispatch<SetStateAction<number>>, menuOpen: boolean, setMenuOpen: Dispatch<SetStateAction<boolean>>}) {
  
  const handleClick = (index: number) => {
    setMenuOpen(false);
    onSectionChange(index)
  }

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }


  return (
    <>
      <Sheet open={menuOpen} onOpenChange={toggleMenu}>
        <SheetTrigger asChild className='top-20 left-12'>
          <Button className='bg-emerald-600' variant="outline">{menuOpen ? <X /> : <MenuIcon />}</Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Where are we heading to?</SheetTitle>
            <SheetDescription>
              Pick a destination.
            </SheetDescription>
          </SheetHeader>
          <div className="grid gap-4 py-4">
            <MenuButton label={"About"} onClickFunction={() => handleClick(0)} />
            <MenuButton label={"Work"} onClickFunction={() => handleClick(1)} />
            <MenuButton label={"Education"} onClickFunction={() => handleClick(2)} />
            <MenuButton label={"Skills"} onClickFunction={() => handleClick(3)} />
          </div>
          <SheetFooter>
            <SheetClose asChild>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
    </Sheet>
    </>
  )
}

export default Menu
