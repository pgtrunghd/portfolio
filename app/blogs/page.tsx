import Blogs from "@/components/blogs";
import BlurFade from "@/components/ui/blur-fade";
import { getAllBlogs } from "@/data/blogs";
import { BLUR_FADE_DELAY } from "@/lib/constants";

export default async function BlogPage() {
  const blogs = await getAllBlogs();

  return (
    <>
      <BlurFade delay={BLUR_FADE_DELAY}>
        <div className="flex items-center justify-center gap-3 flex-col">
          <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
            Blogs
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-6">
            All the blogs I&apos;ve posted
          </h2>
        </div>
      </BlurFade>

      <Blogs blogs={blogs} />
    </>
  );
}
