import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

/**
 * Form 관련 컴포넌트 예제 섹션
 */
export function FormExamples() {
  return (
    <section>
      <h2 className="text-2xl font-bold tracking-tight">Form</h2>
      <p className="mt-2 text-sm text-muted-foreground">
        Input, Label 등 폼 관련 컴포넌트
      </p>

      <div className="mt-6 max-w-sm space-y-6">
        {/* 기본 Input */}
        <div className="space-y-2">
          <Label htmlFor="example-email">이메일</Label>
          <Input id="example-email" type="email" placeholder="email@example.com" />
        </div>

        {/* 비밀번호 Input */}
        <div className="space-y-2">
          <Label htmlFor="example-password">비밀번호</Label>
          <Input id="example-password" type="password" placeholder="비밀번호를 입력하세요" />
        </div>

        {/* 비활성화 Input */}
        <div className="space-y-2">
          <Label htmlFor="example-disabled">비활성화</Label>
          <Input id="example-disabled" disabled placeholder="비활성화된 입력 필드" />
        </div>

        <Button className="w-full">제출</Button>
      </div>
    </section>
  );
}
