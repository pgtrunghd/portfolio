import BlurFade from "@/components/ui/blur-fade";

const BLUR_FADE_DELAY = 0.04;

export default function Home() {
  return (
    <main className="flex flex-col min-h-[100vh] space-y-10">
      <section id="hero">
        <div className="w-full space-y-8">
          <div className="flex justify-between gap-2">
            <div className="flex flex-col flex-1 space-y-1.5">
              <BlurFade delay={BLUR_FADE_DELAY}>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">{`Hi, I'm Trung Pham👋`}</h1>
              </BlurFade>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
