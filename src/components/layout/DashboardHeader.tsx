"use client";

import { ThemeToggle } from "@/components/ThemeToggle";
import { MobileSidebarTrigger } from "@/components/layout/DashboardSidebar";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

/**
 * 대시보드 상단 헤더
 * 모바일 사이드바 트리거 + 테마 토글 + 사용자 아바타
 */
export function DashboardHeader() {
  return (
    <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background/95 px-6 backdrop-blur">
      <MobileSidebarTrigger />
      <div className="flex-1" />
      <ThemeToggle />
      <Avatar className="h-8 w-8">
        <AvatarFallback className="text-xs">U</AvatarFallback>
      </Avatar>
    </header>
  );
}
