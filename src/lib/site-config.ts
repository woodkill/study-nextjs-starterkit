/** 네비게이션 항목 타입 */
type NavItem = {
  label: string;
  href: string;
};

/** 사이트 설정 타입 */
type SiteConfig = {
  name: string;
  description: string;
  url: string;
  navigation: readonly NavItem[];
  dashboardNavigation: readonly NavItem[];
};

/**
 * 사이트 전역 설정
 * 사이트명, 설명, 네비게이션 항목 등을 중앙에서 관리
 */
export const SITE_CONFIG = {
  name: "Starter Kit",
  description:
    "Next.js, Tailwind CSS, shadcn/ui로 구축된 모던 웹 스타터킷",
  url: "https://example.com",
  navigation: [
    { label: "홈", href: "/" },
    { label: "소개", href: "/about" },
    { label: "예제", href: "/examples" },
  ],
  dashboardNavigation: [
    { label: "대시보드", href: "/dashboard" },
    { label: "설정", href: "/dashboard/settings" },
  ],
} as const satisfies SiteConfig;
