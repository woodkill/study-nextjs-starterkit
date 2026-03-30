"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

import { cn } from "@/lib/utils";
import { SITE_CONFIG } from "@/lib/site-config";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

/**
 * 사이드바 네비게이션 링크 목록
 */
function SidebarNavLinks({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col gap-1 px-3">
      {SITE_CONFIG.dashboardNavigation.map((item) => {
        const isActive = pathname === item.href;

        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={onNavigate}
            className={cn(
              "rounded-md px-3 py-2 text-sm font-medium transition-colors",
              isActive
                ? "bg-sidebar-accent text-sidebar-accent-foreground"
                : "text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
            )}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}

/**
 * 대시보드 데스크톱 사이드바 (md 이상에서만 표시)
 */
export function DashboardSidebar() {
  return (
    <aside className="hidden w-64 shrink-0 border-r border-sidebar-border bg-sidebar md:block">
      <div className="flex h-14 items-center border-b border-sidebar-border px-6">
        <Link href="/" className="text-lg font-bold tracking-tight">
          {SITE_CONFIG.name}
        </Link>
      </div>
      <div className="py-4">
        <SidebarNavLinks />
      </div>
    </aside>
  );
}

/**
 * 모바일 사이드바 트리거 + Sheet (DashboardHeader에서 사용)
 */
export function MobileSidebarTrigger() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">사이드바 열기</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-64 bg-sidebar p-0">
        <SheetHeader className="border-b border-sidebar-border px-6 py-4">
          <SheetTitle className="text-left">{SITE_CONFIG.name}</SheetTitle>
        </SheetHeader>
        <div className="py-4">
          <SidebarNavLinks onNavigate={() => setIsOpen(false)} />
        </div>
      </SheetContent>
    </Sheet>
  );
}
