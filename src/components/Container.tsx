import { cn } from "@/lib/utils";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

/**
 * 최대 너비 제한이 적용된 콘텐츠 컨테이너
 * @param children - 자식 요소
 * @param className - 추가 CSS 클래스
 */
export function Container({ children, className }: ContainerProps) {
  return (
    <div className={cn("mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8", className)}>
      {children}
    </div>
  );
}
