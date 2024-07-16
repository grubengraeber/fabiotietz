import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { MenuIcon, X } from 'lucide-react'
import React, { Dispatch, SetStateAction } from 'react'
import MenuButton from './menu-button'

function Menu({ onSectionChange, menuOpen, setMenuOpen }: { onSectionChange: Dispatch<SetStateAction<number>>, menuOpen: boolean, setMenuOpen: Dispatch<SetStateAction<boolean>>}) {
  return (
    <>
        <Sheet>
      <SheetTrigger asChild className='top-20 left-12'>
        <Button className='bg-emerald-600' variant="outline">{menuOpen ? <X /> : <MenuIcon />}</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
          <SheetDescription>
            Pick a destination.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <MenuButton label={"About"} onClickFunction={() => onSectionChange(0)} />
          <MenuButton label={"Work"} onClickFunction={() => onSectionChange(1)} />
          <MenuButton label={"Education"} onClickFunction={() => onSectionChange(2)} />
          <MenuButton label={"Skills"} onClickFunction={() => onSectionChange(3)} />
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
