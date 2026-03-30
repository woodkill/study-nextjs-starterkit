import { Separator } from "@/components/ui/separator";
import { Container } from "@/components/Container";
import { SITE_CONFIG } from "@/lib/site-config";

/**
 * 사이트 전역 푸터
 */
export function SiteFooter() {
  return (
    <footer className="mt-auto">
      <Separator />
      <Container className="flex items-center justify-between py-6">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All rights
          reserved.
        </p>
      </Container>
    </footer>
  );
}
