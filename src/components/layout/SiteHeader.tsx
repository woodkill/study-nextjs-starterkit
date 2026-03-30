import Link from "next/link";

import { SITE_CONFIG } from "@/lib/site-config";
import { Container } from "@/components/Container";
import { ThemeToggle } from "@/components/ThemeToggle";
import { DesktopNav } from "@/components/layout/DesktopNav";
import { MobileNav } from "@/components/layout/MobileNav";

/**
 * 사이트 전역 헤더
 * 로고, 데스크톱/모바일 네비게이션, 테마 토글 포함
 */
export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <Container className="flex h-14 items-center justify-between">
        <div className="flex items-center gap-6">
          <MobileNav />
          <Link href="/" className="text-lg font-bold tracking-tight">
            {SITE_CONFIG.name}
          </Link>
          <DesktopNav />
        </div>
        <ThemeToggle />
      </Container>
    </header>
  );
}
