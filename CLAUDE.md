# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
pnpm dev          # 개발 서버 (http://localhost:3000)
pnpm build        # 프로덕션 빌드
pnpm lint         # ESLint (eslint-config-next core-web-vitals + typescript)
```

## Architecture

Next.js 16 App Router 프로젝트. React 19, Tailwind CSS v4, shadcn/ui (radix-nova style).

### Route Groups
- `src/app/(marketing)/` — 공개 페이지 (홈, 소개, 예제). `SiteHeader`/`SiteFooter` 레이아웃.
- `src/app/(dashboard)/` — 대시보드 영역. `DashboardHeader`/`DashboardSidebar` 레이아웃.

### Key Directories
- `src/components/ui/` — shadcn/ui 컴포넌트 (CLI로 추가: `pnpm dlx shadcn@latest add <component>`)
- `src/components/layout/` — 헤더, 푸터, 사이드바 등 레이아웃 컴포넌트
- `src/components/providers/` — ThemeProvider (next-themes)
- `src/lib/site-config.ts` — 사이트명, 네비게이션 항목 등 중앙 설정
- `src/lib/utils.ts` — `cn()` 유틸리티 (clsx + tailwind-merge)

### Patterns
- Path alias: `@/` → `src/`
- 클래스 병합: 항상 `cn()` 사용 (템플릿 리터럴 직접 사용 금지)
- 다크 모드: `next-themes` + CSS 변수 기반
- Toast: `sonner` (Toaster가 root layout에 배치됨)

## Next.js 16 주의사항

이 프로젝트는 Next.js 16을 사용하며, 학습 데이터와 API/컨벤션이 다를 수 있음. 코드 작성 전 `node_modules/next/dist/docs/`의 관련 가이드를 반드시 확인할 것.
