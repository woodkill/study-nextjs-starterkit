---
paths:
  - "**/*.ts"
  - "**/*.tsx"
---

# TypeScript Coding Style

## Formatting
- Prettier 기본 설정 준수
- trailing comma 사용 (멀티라인)
- import 순서: 외부 패키지 → 내부 모듈 → 상대 경로, 각 그룹 사이 빈 줄
- barrel export (`index.ts`) 남용 금지 — 트리 셰이킹에 영향

## Naming
- 변수/함수/매개변수: camelCase
- 클래스/인터페이스/타입: PascalCase
- 상수: UPPER_SNAKE_CASE (모듈 레벨 불변 값)
- 파일명: kebab-case 또는 camelCase — 프로젝트 내 통일
- React 컴포넌트 파일: PascalCase (`UserProfile.tsx`)
- boolean: `is`, `has`, `should`, `can` 접두사
- 이벤트 핸들러: `handle` 접두사 / 콜백 props: `on` 접두사

## Type System
- `any` 사용 금지 — `unknown` + 타입 가드로 대체
- `as` 타입 단언 최소화 — 타입 가드 우선
- non-null assertion (`!`) 최소화 — optional chaining 우선
- 함수 반환 타입 명시 권장 (public API 필수)
- `type` 기본 사용 — `interface`는 `implements`, 선언 병합 필요 시만
- `enum` 대신 `as const` 객체 + `typeof` 타입 추출 권장
- `satisfies` 연산자 활용: 타입 검증 + 추론 유지
- `null` vs `undefined` 사용 기준 프로젝트 내 통일

## 모듈 & Import
- ES Modules 사용 (CommonJS `require` 금지)
- `import type { ... }` — 타입 전용 import 분리
- path alias: `@/` 접두사 (`tsconfig.json` `paths`)
- named export 기본 — default export는 프레임워크 요구 시만 (Next.js page 등)
- 순환 의존성 금지

## 함수 & 에러 처리
- 매개변수 3개 초과 시 객체 매개변수 사용
- `catch (error: unknown)` — `catch (error: any)` 금지
- early return으로 중첩 줄이기

## Documentation
- 모든 public 함수/타입에 JSDoc (`@param`, `@returns`) 작성

# TypeScript Tooling & Configuration

## tsconfig.json 핵심
- `strict: true` 필수 — 개별 strict 옵션 끄기 금지
- `noUncheckedIndexedAccess: true` 권장
- `verbatimModuleSyntax: true` — import type 강제 분리
- `moduleResolution: "bundler"` / `module: "ESNext"` / `target: "ES2022"`

## Linting & Formatting
- ESLint + `@typescript-eslint` + Prettier (`eslint-config-prettier`로 충돌 방지)
- 코드 수정 후 lint 및 format 실행

## Type Checking
- `tsc --noEmit`으로 타입 체크 — CI에 포함 필수

## Testing
- Vitest 권장 — 테스트 파일: `*.test.ts` / `*.spec.ts`

## 금지 사항
- `any`, `Function`, `Object`/`String`/`Number`/`Boolean` 래퍼 타입 사용 금지
- `@ts-ignore` 금지 — `@ts-expect-error` + 사유 주석으로 대체
- `var`, `==`/`!=`, `eval()`, `arguments` 사용 금지
- CommonJS (`require`, `module.exports`) 사용 금지
- `strict: true` 해제 금지
