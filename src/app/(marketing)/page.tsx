import { Rocket, Palette, Blocks } from "lucide-react";
import Link from "next/link";

import { Container } from "@/components/Container";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

const FEATURES = [
  {
    icon: Rocket,
    title: "빠른 시작",
    description:
      "Next.js 16 App Router, TypeScript, Tailwind CSS가 사전 구성되어 즉시 개발을 시작할 수 있습니다.",
  },
  {
    icon: Palette,
    title: "테마 시스템",
    description:
      "다크/라이트 모드와 OKLch 기반 색상 시스템으로 일관된 디자인을 제공합니다.",
  },
  {
    icon: Blocks,
    title: "shadcn/ui 컴포넌트",
    description:
      "접근성을 갖춘 Radix UI 기반 컴포넌트를 자유롭게 커스터마이징할 수 있습니다.",
  },
] as const;

/**
 * 홈 페이지 (마케팅 랜딩)
 */
export default function HomePage() {
  return (
    <>
      {/* Hero 섹션 */}
      <section className="py-20 md:py-32">
        <Container className="flex flex-col items-center text-center">
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            모던 웹 프로젝트를
            <br />
            <span className="text-muted-foreground">빠르게 시작하세요</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Next.js, Tailwind CSS, shadcn/ui로 구성된 프로덕션 레디 스타터킷.
            마케팅 페이지부터 대시보드까지, 필요한 모든 레이아웃이 준비되어
            있습니다.
          </p>
          <div className="mt-10 flex gap-4">
            <Button asChild size="lg">
              <Link href="/dashboard">시작하기</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </Link>
            </Button>
          </div>
        </Container>
      </section>

      {/* Features 섹션 */}
      <section className="border-t bg-muted/50 py-20">
        <Container>
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight">
            주요 기능
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {FEATURES.map((feature) => (
              <Card key={feature.title}>
                <CardHeader>
                  <feature.icon className="mb-2 h-10 w-10 text-primary" />
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
