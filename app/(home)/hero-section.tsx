import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import BlurFade from "@/components/ui/blur-fade";
import { DATA } from "@/data/resume";
import { BLUR_FADE_DELAY } from "@/lib/constants";

export const HeroSection = () => {
  return (
    <section id="hero">
      <div className="w-full space-y-8">
        <div className="flex justify-between gap-2">
          <div className="flex flex-col flex-1 space-y-1.5">
            <BlurFade delay={BLUR_FADE_DELAY}>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">{`Hi, I'm ${DATA.name} 👋`}</h1>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <h2 className="md:text-xl max-w-[600px]">{DATA.description}</h2>
            </BlurFade>
          </div>

          <BlurFade delay={BLUR_FADE_DELAY}>
            <Avatar className="size-28 border">
              <AvatarImage src={DATA.avatarUrl}></AvatarImage>
              <AvatarFallback>{DATA.initial}</AvatarFallback>
            </Avatar>
          </BlurFade>
        </div>
      </div>
    </section>
  );
};
