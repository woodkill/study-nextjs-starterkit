---
paths:
  - "**/*.tsx"
  - "**/*.ts"
  - "next.config.*"
  - "app/**"
  - "src/app/**"
---

# Next.js Project Rules

## App Router 기본 원칙
- App Router 사용 (Pages Router, `getServerSideProps`, `getStaticProps` 사용 금지)
- Server Component 기본 — `'use client'`는 hooks/이벤트/브라우저 API 필요 시에만, 트리 최하단에 배치
- Metadata API 활용: `export const metadata` 또는 `generateMetadata()`

## 라우팅 컨벤션
- `page.tsx` / `layout.tsx` / `loading.tsx` / `error.tsx` / `not-found.tsx` 파일 컨벤션 준수
- API Route: `app/api/` 하위 `route.ts` — 내부 데이터 fetch 용도로 생성 금지
- Route Group `(groupName)` 활용, Dynamic Route `[slug]` / Catch-all `[...slug]`

## Data Fetching & Server Actions
- Server Component에서 직접 fetch/DB 호출 — 별도 API 라우트 불필요
- 병렬 호출: `Promise.all()` (waterfall 방지)
- Server Actions: `'use server'` + zod 입력 검증 필수 + 구조화된 반환값 (`{ success, data, error }`)
- `redirect()`는 try/catch 바깥에서 호출

## 이미지 & 폰트 & 네비게이션
- `next/image`, `next/link`, `next/font` 사용 (HTML `<img>`, `<a>`, Google Fonts link 금지)
- 외부 이미지: `next.config.ts`의 `images.remotePatterns` 등록

## 스타일링 & shadcn/ui
- Tailwind CSS 기본, 글로벌 CSS는 `app/globals.css`에서만
- shadcn/ui: CLI로 컴포넌트 소스 복사 방식 (`npx shadcn@latest add <component>`)
- 설치 경로: `src/components/ui/` — 복사된 코드는 자유롭게 수정 가능
- `cn()` 유틸리티(`lib/utils.ts`)로 클래스 병합 — 템플릿 리터럴 직접 사용 금지
- Variant: `cva`(class-variance-authority)로 정의
- 테마: CSS 변수 기반 (`:root` / `.dark`), 다크 모드는 `next-themes`
- Form: React Hook Form + `zodResolver` + shadcn `<Form>` 컴포넌트
- Radix UI 프리미티브의 접근성(A11y) 속성 제거 금지

## 환경 변수
- 서버 전용: `process.env.SECRET_KEY` — 클라이언트 노출: `NEXT_PUBLIC_` 접두사 필수
- `.env.local`은 `.gitignore` 포함 필수

## Performance
- `next/dynamic`으로 무거운 컴포넌트 지연 로드
- `<Suspense>` 경계로 스트리밍 SSR
- 이미지 LCP 최적화: `priority` prop

# Next.js Runtime & Tooling

## 의존성 관리
- 패키지 매니저: pnpm 권장 — lock 파일 커밋 필수
- Node.js 버전: `.node-version` 또는 `.nvmrc`로 고정

## 스크립트
- `pnpm dev` / `pnpm build` / `pnpm start` / `pnpm lint`

## Linting & Formatting
- ESLint: `next lint` (`eslint-config-next` 기반)
- Prettier + `eslint-config-prettier` (충돌 방지)

## Testing
- 단위/통합: Vitest + React Testing Library
- E2E: Playwright 권장

## 배포
- `next.config.ts` (TypeScript 설정 파일 사용)
- Docker 시 `output: 'standalone'`

## 금지 사항
- Pages Router (`pages/`) 사용 금지
- 내부 데이터 fetch용 API Route 생성 금지
- HTML `<img>`, `<a>` 직접 사용 금지
- Server Component에서 `window`, `document` 접근 금지
- `suppressHydrationWarning` 남용 금지
