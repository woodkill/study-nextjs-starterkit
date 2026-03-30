import { ArrowRight, Loader2, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";

/**
 * Button 컴포넌트 예제 섹션
 */
export function ButtonExamples() {
  return (
    <section>
      <h2 className="text-2xl font-bold tracking-tight">Button</h2>
      <p className="mt-2 text-sm text-muted-foreground">
        다양한 variant와 size를 지원하는 버튼 컴포넌트
      </p>

      {/* Variants */}
      <h3 className="mt-6 text-sm font-medium text-muted-foreground">
        Variants
      </h3>
      <div className="mt-3 flex flex-wrap items-center gap-3">
        <Button variant="default">Default</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="link">Link</Button>
      </div>

      {/* Sizes */}
      <h3 className="mt-6 text-sm font-medium text-muted-foreground">Sizes</h3>
      <div className="mt-3 flex flex-wrap items-center gap-3">
        <Button size="xs">Extra Small</Button>
        <Button size="sm">Small</Button>
        <Button size="default">Default</Button>
        <Button size="lg">Large</Button>
      </div>

      {/* With Icons */}
      <h3 className="mt-6 text-sm font-medium text-muted-foreground">
        아이콘 포함
      </h3>
      <div className="mt-3 flex flex-wrap items-center gap-3">
        <Button>
          <Mail />
          이메일 보내기
        </Button>
        <Button variant="outline">
          다음
          <ArrowRight />
        </Button>
        <Button disabled>
          <Loader2 className="animate-spin" />
          로딩 중...
        </Button>
        <Button variant="outline" size="icon">
          <Mail />
        </Button>
      </div>
    </section>
  );
}
