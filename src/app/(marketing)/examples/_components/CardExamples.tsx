import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

/**
 * Card 컴포넌트 예제 섹션
 */
export function CardExamples() {
  return (
    <section>
      <h2 className="text-2xl font-bold tracking-tight">Card</h2>
      <p className="mt-2 text-sm text-muted-foreground">
        콘텐츠를 그룹화하는 카드 컴포넌트
      </p>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {/* 기본 카드 */}
        <Card>
          <CardHeader>
            <CardTitle>기본 카드</CardTitle>
            <CardDescription>
              Header, Content, Footer 구조의 기본 카드입니다.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              CardContent 영역에 원하는 콘텐츠를 배치합니다. 텍스트, 이미지, 폼
              등 자유롭게 구성할 수 있습니다.
            </p>
          </CardContent>
          <CardFooter className="gap-2">
            <Button size="sm">확인</Button>
            <Button variant="outline" size="sm">
              취소
            </Button>
          </CardFooter>
        </Card>

        {/* 통계 카드 */}
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>총 방문자</CardDescription>
            <CardTitle className="text-4xl">12,345</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-muted-foreground">
              지난 달 대비 <span className="font-medium text-foreground">+20.1%</span>
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
