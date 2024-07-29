import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarShortcut, MenubarSub, MenubarSubContent, MenubarSubTrigger, MenubarTrigger } from '@/components/ui/menubar';
import { useRouter } from 'next/navigation';
import React from 'react'

function Menu() {

    const router = useRouter();
  return (
    <div className='w-4/12'>
        <Menubar>
      <MenubarMenu>
        <MenubarTrigger onClick={() => {
            router.push('#about')
            document.getElementById('about')?.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' })
          }}>About</MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Previous Workfields</MenubarTrigger>
        <MenubarContent>
          <MenubarItem onClick={() => {
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
            router.push('#sfc')
          }}>
                Child Care / Youth Worker
                <MenubarShortcut>SFC Vienna</MenubarShortcut>
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
    </div>
  )
}

export default Menu
