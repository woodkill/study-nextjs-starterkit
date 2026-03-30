"use client";

import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

/**
 * 피드백 컴포넌트 예제 섹션 (Toast, Skeleton)
 */
export function FeedbackExamples() {
  return (
    <section>
      <h2 className="text-2xl font-bold tracking-tight">Feedback</h2>
      <p className="mt-2 text-sm text-muted-foreground">
        Toast 알림, Skeleton 로딩 등 피드백 컴포넌트
      </p>

      {/* Toast */}
      <h3 className="mt-6 text-sm font-medium text-muted-foreground">Toast</h3>
      <div className="mt-3 flex flex-wrap gap-3">
        <Button
          variant="outline"
          onClick={() => toast("기본 알림 메시지입니다.")}
        >
          기본 Toast
        </Button>
        <Button
          variant="outline"
          onClick={() => toast.success("작업이 완료되었습니다.")}
        >
          성공 Toast
        </Button>
        <Button
          variant="outline"
          onClick={() => toast.error("오류가 발생했습니다.")}
        >
          에러 Toast
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            toast("알림", {
              description: "설명 텍스트가 포함된 Toast입니다.",
              action: {
                label: "되돌리기",
                onClick: () => toast("되돌렸습니다."),
              },
            })
          }
        >
          액션 Toast
        </Button>
      </div>

      {/* Skeleton */}
      <h3 className="mt-8 text-sm font-medium text-muted-foreground">
        Skeleton
      </h3>
      <div className="mt-3 flex items-center gap-4">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-48" />
          <Skeleton className="h-4 w-32" />
        </div>
      </div>
    </section>
  );
}
