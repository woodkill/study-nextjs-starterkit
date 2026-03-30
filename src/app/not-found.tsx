import Link from "next/link";

import { Container } from "@/components/Container";
import { Button } from "@/components/ui/button";

/**
 * 커스텀 404 Not Found 페이지
 */
export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center text-center">
      <h1 className="text-7xl font-bold tracking-tighter">404</h1>
      <p className="mt-4 text-lg text-muted-foreground">
        요청하신 페이지를 찾을 수 없습니다.
      </p>
      <Button asChild className="mt-8">
        <Link href="/">홈으로 돌아가기</Link>
      </Button>
    </Container>
  );
}
