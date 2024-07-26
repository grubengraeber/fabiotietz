import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuLabel, ContextMenuSeparator, ContextMenuShortcut, ContextMenuSub, ContextMenuSubContent, ContextMenuSubTrigger, ContextMenuTrigger } from '@/components/ui/context-menu'
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarShortcut, MenubarSub, MenubarSubContent, MenubarSubTrigger, MenubarTrigger } from '@/components/ui/menubar';
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React from 'react'

function Menu() {

    const router = useRouter();
  return (
    <div className='grid grid-cols-8'>
        <Menubar className='col-span-2'>
      <MenubarMenu>
        <MenubarTrigger onClick={() => {
            router.push('#about')
            document.getElementById('about')?.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' })
          }}>About</MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Work</MenubarTrigger>
        <MenubarContent>
          <MenubarItem onClick={() => {
{            /* How can I scroll to the div with id .. inside the div with id ..? */

            // document.getElementById('work')?.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' })

            // document.getElementById('smatrics')?.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' })
}


            router.push('#austrian-armed-forces')
          }}>
            Austrian Armed Forces
            <MenubarShortcut className='ml-2'>
                03/2017 - 02/2022
            </MenubarShortcut>
          </MenubarItem>
          <MenubarItem onClick={() => {
            router.push('#smatrics')
          }}>
            SMATRICS 
            <MenubarShortcut>
                10/2022 - 12/2023
            </MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarSub>
            <MenubarSubTrigger>Side Jobs</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem onClick={() => {
            router.push('#therme-wien')
          }}>
                    Chef / Service Staff / Barkeeper
                <MenubarShortcut className='ml-2'>
                    Therme Wien
                </MenubarShortcut>
              </MenubarItem>
              <MenubarItem onClick={() => {
            router.push('#sellinnx')
          }}>Promoter / Sample Distributor
                <MenubarShortcut>Sellinnx</MenubarShortcut>
              </MenubarItem>
              <MenubarItem onClick={() => {
            router.push('#thurs')
          }}>
                Security / Bouncer
                <MenubarShortcut>Thurs</MenubarShortcut>
              </MenubarItem>
              <MenubarItem onClick={() => {
            router.push('#fitinn')
          }}>
                Front Desk / Receptionist
                <MenubarShortcut>Fitinn</MenubarShortcut>
              </MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Education</MenubarTrigger>
        <MenubarContent>
        <MenubarSub>
            <MenubarSubTrigger>HLW 10</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem onClick={() => {
            router.push('#cooking')
          }}>
                    Cooking
                <MenubarShortcut>
                    4 years
                </MenubarShortcut>
              </MenubarItem>
              <MenubarItem onClick={() => {
            router.push('#service')
          }}>
                    Service
                <MenubarShortcut>
                    4 years
                </MenubarShortcut>
              </MenubarItem>
              <MenubarItem onClick={() => {
            router.push('#economics')
          }}>
                Economics
                <MenubarShortcut>4 years</MenubarShortcut>
              </MenubarItem>
              <MenubarItem onClick={() => {
            router.push('#media-informatics')
          }}>
                Media Informatics
                <MenubarShortcut className='ml-2'>5 years</MenubarShortcut>
              </MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
        <MenubarSub>
            <MenubarSubTrigger>Codecool</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem onClick={() => {
            router.push('#basics')
}}>
                    Basics
                <MenubarShortcut>
                    2 months
                </MenubarShortcut>
              </MenubarItem>
              <MenubarItem onClick={() => {
            router.push('#web')
          }}>
                    Web Development
                <MenubarShortcut>
                    2 months
                </MenubarShortcut>
              </MenubarItem>
              <MenubarItem onClick={() => {
            router.push('#oop')
          }}>
                Object Oriented Programming
                <MenubarShortcut className='ml-2'>2 months</MenubarShortcut>
              </MenubarItem>
              <MenubarItem onClick={() => {
            router.push('#advanced')
          }}>
                Advanced
                <MenubarShortcut>2 months</MenubarShortcut>
              </MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>

        <MenubarTrigger onClick={() => {
            router.push('#technology')
            }}>
        Technology
        </MenubarTrigger>
              
      </MenubarMenu>
      <MenubarMenu>

        <MenubarTrigger onClick={() => {
            router.push('#other-skills')
            }}>
        Other Skills
        </MenubarTrigger>
      </MenubarMenu>
    </Menubar>
            
      {/* <Link href="#about" >About</Link>
        <Link href="#education" onClick={() => document.getElementById('education')?.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' })}>Education</Link>
        <Link href="#work" onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' })}>Work</Link>
        <Link href="#technology" onClick={() => document.getElementById('technology')?.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' })}>Technology</Link>
        <Link href="#other-skills" onClick={() => document.getElementById('other-skills')?.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' })}>Other Skills</Link> */}
    </div>
  )
}

export default Menu
