import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

/**
 * 데이터 표시 컴포넌트 예제 섹션 (Badge, Avatar, Separator)
 */
export function DataDisplayExamples() {
  return (
    <section>
      <h2 className="text-2xl font-bold tracking-tight">Data Display</h2>
      <p className="mt-2 text-sm text-muted-foreground">
        Badge, Avatar, Separator 등 데이터 표시 컴포넌트
      </p>

      {/* Badge */}
      <h3 className="mt-6 text-sm font-medium text-muted-foreground">Badge</h3>
      <div className="mt-3 flex flex-wrap items-center gap-3">
        <Badge>Default</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="outline">Outline</Badge>
        <Badge variant="destructive">Destructive</Badge>
      </div>

      {/* Avatar */}
      <h3 className="mt-8 text-sm font-medium text-muted-foreground">
        Avatar
      </h3>
      <div className="mt-3 flex items-center gap-4">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback>AB</AvatarFallback>
        </Avatar>
        <Avatar className="h-14 w-14">
          <AvatarFallback className="text-lg">홍</AvatarFallback>
        </Avatar>
      </div>

      {/* Separator */}
      <h3 className="mt-8 text-sm font-medium text-muted-foreground">
        Separator
      </h3>
      <div className="mt-3 space-y-4">
        <div>
          <p className="text-sm">구분선 위의 콘텐츠</p>
          <Separator className="my-4" />
          <p className="text-sm">구분선 아래의 콘텐츠</p>
        </div>
        <div className="flex h-5 items-center gap-4 text-sm">
          <span>항목 1</span>
          <Separator orientation="vertical" />
          <span>항목 2</span>
          <Separator orientation="vertical" />
          <span>항목 3</span>
        </div>
      </div>
    </section>
  );
}
