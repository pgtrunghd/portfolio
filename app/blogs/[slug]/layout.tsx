import BlurFade from "@/components/ui/blur-fade";
import { BLUR_FADE_DELAY } from "@/lib/constants";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <BlurFade delay={BLUR_FADE_DELAY}>
      <div className="prose prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl prose-h4:text-lg prose-h5:text-sm prose-h6:text-xs md:prose-h1:text-4xl md:prose-h2:text-3xl md:prose-h3:text-2xl md:prose-h4:text-xl md:prose-h5:text-base md:prose-h6:text-sm dark:prose-invert">
        <Link
          href="/blogs"
          className="no-underline inline-flex items-center gap-2 mb-4 text-muted-foreground hover:opacity-70 transition-all"
        >
          <ChevronLeft className="size-4" /> Trở về
        </Link>
        {children}
      </div>
    </BlurFade>
  );
}
