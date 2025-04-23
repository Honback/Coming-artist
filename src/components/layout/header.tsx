"use client"
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import Image from "next/image";
import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full poster-gradient-bg border-b border-white/20 backdrop-blur supports-[backdrop-filter]:bg-purple-500/60">
      <div className="container-custom flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="font-bold text-xl flex items-center text-white">
            <div className="h-[3.5rem] w-[6rem] flex items-center justify-center bg-[url('/images/logo.png')] bg-cover bg-center">
                </div>
            {/* <span>한국예술인복지재단</span> */}
          </Link>
        </div>

        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="bg-purple-600/30 rounded-lg">
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-purple-600/40 text-white hover:text-white/80 hover:bg-purple-600/40">교육 소개</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 w-[400px] bg-white rounded-xl">
                  <li>
                    <NavigationMenuLink asChild>
                      <Link
                        href="#why"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-purple-50 hover:text-purple-600 focus:bg-purple-50 focus:text-purple-600"
                      >
                        <div className="text-sm font-medium leading-none">왜 찾아가는 교육인가요?</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          예술인의 권리와 창작환경을 지키기 위한 맞춤형 교육
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link
                        href="#curriculum"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-purple-50 hover:text-purple-600 focus:bg-purple-50 focus:text-purple-600"
                      >
                        <div className="text-sm font-medium leading-none">교육 과정 안내</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          예술인의 권리 보호를 위한 전문 교육 프로그램
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={`${navigationMenuTriggerStyle()} text-white hover:text-white/80 hover:bg-purple-600/40 bg-transparent`}>
              <Link  href="#target">
                  교육 대상
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={`${navigationMenuTriggerStyle()} text-white hover:text-white/80 hover:bg-purple-600/40 bg-transparent`}>
                <Link href="#method">교육 방식</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild className={`${navigationMenuTriggerStyle()} text-white hover:text-white/80 hover:bg-purple-600/40 bg-transparent`}>
                <Link href="#instructors">강사진</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild className={`${navigationMenuTriggerStyle()} text-white hover:text-white/80 hover:bg-purple-600/40 bg-transparent`}>
                <Link href="#reviews">수강생 후기</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild className={`${navigationMenuTriggerStyle()} text-white hover:text-white/80 hover:bg-purple-600/40 bg-transparent`}>
                <Link href="#faq">FAQ</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild className={`${navigationMenuTriggerStyle()} text-white hover:text-white/80 hover:bg-purple-600/40 bg-transparent`}>
                <Link href="#apply">신청 및 진행 절차</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-4">
          {/* <Link href="#apply" className="hidden md:block">
            <Button className="poster-button-primary">교육 신청하기</Button>
          </Link> */}
            <Link href="https://sinmungo.kawf.kr/user/intro/artRightViloate/list.do" target="_blank" rel="noopener noreferrer" className="">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                교육 신청하기
              </Button>
            </Link>


          <Button
            variant="ghost"
            className="md:hidden text-white hover:bg-purple-600/30 "
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
              <line x1="4" x2="20" y1="12" y2="12"/>
              <line x1="4" x2="20" y1="6" y2="6"/>
              <line x1="4" x2="20" y1="18" y2="18"/>
            </svg>
            <span className="sr-only">Toggle menu</span> */}

            {isOpen ? <X size={24} /> : <Menu size={24} />}

          </Button>
          {/* 모바일 메뉴 */}
          {isOpen && (
            <div className="md:hidden px-4 pb-4 absolute right-0 top-full w-50 bg-purple-300 z-50 shadow-md rounded-b-lg">
              <nav className="flex flex-col space-y-2"  role="navigation" aria-label="모바일 메뉴">
              <Link href="#why" className={`${navigationMenuTriggerStyle()}text-white hover:text-white/80 hover:bg-purple-600/40 bg-transparent rounded-lg `} onClick={() => setIsOpen(false)}>왜 찾아가는 교육인가요?</Link>
              <Link href="#curriculum" className={`${navigationMenuTriggerStyle()}text-white hover:text-white/80 hover:bg-purple-600/40 bg-transparent rounded-lg `} onClick={() => setIsOpen(false)}>교육 과정 안내</Link>
              <Link href="#target" className={`${navigationMenuTriggerStyle()}text-white hover:text-white/80 hover:bg-purple-600/40 bg-transparent rounded-lg `} onClick={() => setIsOpen(false)}>교육 대상</Link>
              <Link href="#method" className={`${navigationMenuTriggerStyle()}text-white hover:text-white/80 hover:bg-purple-600/40 bg-transparent rounded-lg `} onClick={() => setIsOpen(false)}>교육 방식</Link>
              <Link href="#instructors" className={`${navigationMenuTriggerStyle()}text-white hover:text-white/80 hover:bg-purple-600/40 bg-transparent rounded-lg `} onClick={() => setIsOpen(false)}>강사진</Link>
              <Link href="#reviews" className={`${navigationMenuTriggerStyle()}text-white hover:text-white/80 hover:bg-purple-600/40 bg-transparent rounded-lg `} onClick={() => setIsOpen(false)}>수강생 후기</Link>
              <Link href="#faq" className={`${navigationMenuTriggerStyle()}text-white hover:text-white/80 hover:bg-purple-600/40 bg-transparent rounded-lg `} onClick={() => setIsOpen(false)}>FAQ</Link>
              <Link href="#apply" className={`${navigationMenuTriggerStyle()}text-white hover:text-white/80 hover:bg-purple-600/40 bg-transparent rounded-lg `} onClick={() => setIsOpen(false)}>신청 및 진행 절차</Link>
              <Link href="#contact" className={`${navigationMenuTriggerStyle()}text-white hover:text-white/80 hover:bg-purple-600/40 bg-transparent rounded-lg `} onClick={() => setIsOpen(false)}>상담 문의하기</Link>
            </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
