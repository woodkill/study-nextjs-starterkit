import type { Metadata } from "next";

import { Container } from "@/components/Container";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "소개 | Starter Kit",
  description: "모던 웹 스타터킷 소개 및 기술 스택 안내",
};

const TECH_STACK = [
  "Next.js 16",
  "React 19",
  "TypeScript 5",
  "Tailwind CSS 4",
  "shadcn/ui",
  "Radix UI",
  "lucide-react",
  "next-themes",
] as const;

/**
 * 소개 페이지
 */
export default function AboutPage() {
  return (
    <Container className="py-20">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight">소개</h1>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
          이 스타터킷은 모던 웹 프로젝트를 빠르게 시작할 수 있도록 설계되었습니다.
          마케팅 페이지와 대시보드 레이아웃이 모두 포함되어 있으며, 다크 모드와
          반응형 디자인을 기본 지원합니다.
        </p>

        <h2 className="mt-12 text-2xl font-bold tracking-tight">기술 스택</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {TECH_STACK.map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>

        <h2 className="mt-12 text-2xl font-bold tracking-tight">프로젝트 구조</h2>
        <div className="mt-4 rounded-lg border bg-muted/50 p-6">
          <pre className="overflow-x-auto font-mono text-sm leading-relaxed text-muted-foreground">
{`src/
├── app/
│   ├── (marketing)/    # 공개 페이지 (Header + Footer)
│   ├── (dashboard)/    # 대시보드 (Sidebar + Header)
│   └── not-found.tsx   # 커스텀 404
├── components/
│   ├── ui/             # shadcn/ui 컴포넌트
│   ├── layout/         # 레이아웃 컴포넌트
│   └── providers/      # Provider 컴포넌트
└── lib/                # 유틸리티 & 설정`}
          </pre>
        </div>

        <h2 className="mt-12 text-2xl font-bold tracking-tight">시작하기</h2>
        <div className="mt-4 rounded-lg border bg-muted/50 p-6">
          <pre className="overflow-x-auto font-mono text-sm text-muted-foreground">
{`# 개발 서버 실행
pnpm dev

# 프로덕션 빌드
pnpm build

# shadcn/ui 컴포넌트 추가
pnpm dlx shadcn@latest add [component-name]`}
          </pre>
        </div>
      </div>
    </Container>
  );
}
