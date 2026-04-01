---
name: Project Patterns
description: 프로젝트 코드 컨벤션, 반복 패턴, 리팩토링 시 주의 사항
type: project
---

## 클래스 병합
- `cn()` 유틸리티 (`src/lib/utils.ts`) 사용 필수 — 템플릿 리터럴 직접 사용 금지
- `html` 태그의 className도 `cn()` 적용 대상 (RootLayout 포함)

## 중앙 설정 활용
- `SITE_CONFIG` (`src/lib/site-config.ts`) 에 사이트명·설명·네비게이션 항목 집중 관리
- `metadata` (title, description)는 `SITE_CONFIG`에서 파생할 것 — 하드코딩 중복 금지

## Sheet 컴포넌트 패턴
- 단순 열기/닫기만 필요한 경우 외부 `useState` 불필요 — `SheetClose` 컴포넌트로 닫기 처리
- 닫을 때 추가 로직(navigate 콜백 등)이 필요하면 `onOpenChange` + `useState` 조합 사용 (MobileNav, MobileSidebarTrigger 참고)

## "use client" 사용 기준
- `usePathname`, `useState`, 이벤트 핸들러 등 hooks/브라우저 API 필요 시에만 사용
- DashboardHeader는 MobileSidebarTrigger(Client Component) import로 인해 "use client" 필요

## 아키텍처
- Route Groups: `(marketing)` — SiteHeader/SiteFooter, `(dashboard)` — DashboardSidebar/DashboardHeader
- `SidebarNavLinks` 내부 컴포넌트가 `DashboardSidebar.tsx` 안에 함께 위치 (동일 파일 내 colocate)
- `MobileSidebarTrigger`는 `DashboardSidebar.tsx`에서 named export로 공개 → `DashboardHeader`에서 import

## Why:**
리팩토링 세션(2026-03-31)에서 RootLayout className 템플릿 리터럴 위반, metadata 중복 하드코딩, NavigationExamples 불필요 상태 패턴을 발견하여 수정함.

**How to apply:**
신규 컴포넌트 작성 시 위 패턴 준수 여부를 체크리스트로 활용할 것.
