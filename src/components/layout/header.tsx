import Link from "next/link";
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import Image from "next/image";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full poster-gradient-bg border-b border-white/20 backdrop-blur supports-[backdrop-filter]:bg-purple-500/60">
      <div className="container-custom flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="font-bold text-xl flex items-center text-white">
            <div className="h-[3rem] w-[6.5rem] bg-zinc-200 rounded-lg flex items-center justify-center bg-[url('/images/logo.png')] bg-contain bg-center">
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
              <Link href="#target" legacyBehavior passHref>
                <NavigationMenuLink className={`${navigationMenuTriggerStyle()} text-white hover:text-white/80 hover:bg-purple-600/40 bg-transparent`}>
                  교육 대상
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="#method" legacyBehavior passHref>
                <NavigationMenuLink className={`${navigationMenuTriggerStyle()} text-white hover:text-white/80 hover:bg-purple-600/40 bg-transparent`}>
                  교육 방식
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="#instructors" legacyBehavior passHref>
                <NavigationMenuLink className={`${navigationMenuTriggerStyle()} text-white hover:text-white/80 hover:bg-purple-600/40 bg-transparent`}>
                  강사진
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="#reviews" legacyBehavior passHref>
                <NavigationMenuLink className={`${navigationMenuTriggerStyle()} text-white hover:text-white/80 hover:bg-purple-600/40 bg-transparent`}>
                  수강생 후기
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="#faq" legacyBehavior passHref>
                <NavigationMenuLink className={`${navigationMenuTriggerStyle()} text-white hover:text-white/80 hover:bg-purple-600/40 bg-transparent`}>
                  FAQ
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="#apply" legacyBehavior passHref>
                <NavigationMenuLink className={`${navigationMenuTriggerStyle()} text-white hover:text-white/80 hover:bg-purple-600/40 bg-transparent`}>
                  신청 및 진행 절차
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-4">
          {/* <Link href="#apply" className="hidden md:block">
            <Button className="poster-button-primary">교육 신청하기</Button>
          </Link> */}
          <Link href="#contact" className="hidden md:block">
            <Button variant="outline" className="text-white bg-transparent border-white hover:bg-white/20">상담 문의하기</Button>
          </Link>
          <Button
            variant="ghost"
            className="md:hidden text-white hover:bg-purple-600/30"
            size="icon"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
              <line x1="4" x2="20" y1="12" y2="12"/>
              <line x1="4" x2="20" y1="6" y2="6"/>
              <line x1="4" x2="20" y1="18" y2="18"/>
            </svg>
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
