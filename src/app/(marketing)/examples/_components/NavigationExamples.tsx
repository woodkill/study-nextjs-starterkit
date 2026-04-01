import { Button } from "@/components/ui/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

/**
 * 네비게이션/오버레이 컴포넌트 예제 섹션 (Tabs, Sheet, Tooltip, DropdownMenu)
 */
export function NavigationExamples() {
  return (
    <section>
      <h2 className="text-2xl font-bold tracking-tight">
        Navigation & Overlay
      </h2>
      <p className="mt-2 text-sm text-muted-foreground">
        Tabs, Sheet, Tooltip, DropdownMenu 등 네비게이션 및 오버레이 컴포넌트
      </p>

      {/* Tabs */}
      <h3 className="mt-6 text-sm font-medium text-muted-foreground">Tabs</h3>
      <div className="mt-3">
        <Tabs defaultValue="overview">
          <TabsList>
            <TabsTrigger value="overview">개요</TabsTrigger>
            <TabsTrigger value="analytics">분석</TabsTrigger>
            <TabsTrigger value="settings">설정</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="mt-4">
            <p className="text-sm text-muted-foreground">
              개요 탭의 콘텐츠입니다. 프로젝트 요약 정보를 확인하세요.
            </p>
          </TabsContent>
          <TabsContent value="analytics" className="mt-4">
            <p className="text-sm text-muted-foreground">
              분석 탭의 콘텐츠입니다. 데이터 분석 결과를 확인하세요.
            </p>
          </TabsContent>
          <TabsContent value="settings" className="mt-4">
            <p className="text-sm text-muted-foreground">
              설정 탭의 콘텐츠입니다. 환경 설정을 변경하세요.
            </p>
          </TabsContent>
        </Tabs>
      </div>

      {/* Tooltip & DropdownMenu & Sheet */}
      <h3 className="mt-8 text-sm font-medium text-muted-foreground">
        Tooltip / DropdownMenu / Sheet
      </h3>
      <div className="mt-3 flex flex-wrap gap-3">
        {/* Tooltip */}
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline">마우스를 올려보세요</Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Tooltip 메시지입니다</p>
          </TooltipContent>
        </Tooltip>

        {/* DropdownMenu */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">드롭다운 메뉴</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>내 계정</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>프로필</DropdownMenuItem>
            <DropdownMenuItem>설정</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>로그아웃</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Sheet — 외부 상태 없이 SheetClose로 닫기 처리 */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline">Sheet 열기</Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Sheet 제목</SheetTitle>
              <SheetDescription>
                Sheet는 화면 가장자리에서 슬라이드되는 패널입니다.
                모바일 네비게이션이나 사이드 패널에 활용됩니다.
              </SheetDescription>
            </SheetHeader>
            <div className="mt-6">
              <p className="text-sm text-muted-foreground">
                Sheet 내부에 원하는 콘텐츠를 배치할 수 있습니다.
              </p>
              <SheetClose asChild>
                <Button className="mt-4">닫기</Button>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </section>
  );
}
