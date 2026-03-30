import type { Metadata } from "next";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export const metadata: Metadata = {
  title: "대시보드 | Starter Kit",
};

const PLACEHOLDER_CARDS = [
  { title: "총 사용자", value: "1,234" },
  { title: "활성 세션", value: "567" },
  { title: "전환율", value: "12.5%" },
  { title: "수익", value: "₩4,500,000" },
] as const;

/**
 * 대시보드 메인 페이지
 * 통계 카드와 스켈레톤 데모
 */
export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">대시보드</h1>
        <p className="text-muted-foreground">
          프로젝트 현황을 한눈에 확인하세요.
        </p>
      </div>

      {/* 통계 카드 */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {PLACEHOLDER_CARDS.map((card) => (
          <Card key={card.title}>
            <CardHeader className="pb-2">
              <CardDescription>{card.title}</CardDescription>
              <CardTitle className="text-3xl">{card.value}</CardTitle>
            </CardHeader>
          </Card>
        ))}
      </div>

      {/* 스켈레톤 플레이스홀더 */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>최근 활동</CardTitle>
            <CardDescription>최근 7일간의 활동 내역</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
            <Skeleton className="h-4 w-5/6" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>차트 영역</CardTitle>
            <CardDescription>데이터 시각화 플레이스홀더</CardDescription>
          </CardHeader>
          <CardContent>
            <Skeleton className="h-48 w-full" />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
