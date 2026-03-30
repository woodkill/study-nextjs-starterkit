import type { Metadata } from "next";

import { Container } from "@/components/Container";
import { ButtonExamples } from "./_components/ButtonExamples";
import { CardExamples } from "./_components/CardExamples";
import { FormExamples } from "./_components/FormExamples";
import { FeedbackExamples } from "./_components/FeedbackExamples";
import { DataDisplayExamples } from "./_components/DataDisplayExamples";
import { NavigationExamples } from "./_components/NavigationExamples";

export const metadata: Metadata = {
  title: "컴포넌트 예제 | Starter Kit",
  description: "shadcn/ui 컴포넌트 예제 모음",
};

/**
 * 컴포넌트 예제 페이지
 * 설치된 shadcn/ui 컴포넌트를 카테고리별로 확인
 */
export default function ExamplesPage() {
  return (
    <Container className="py-20">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold tracking-tight">컴포넌트 예제</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          스타터킷에 포함된 shadcn/ui 컴포넌트를 확인하세요.
        </p>

        <div className="mt-12 space-y-16">
          <ButtonExamples />
          <CardExamples />
          <FormExamples />
          <FeedbackExamples />
          <DataDisplayExamples />
          <NavigationExamples />
        </div>
      </div>
    </Container>
  );
}
