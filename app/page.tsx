import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import BlurFade from "@/components/ui/blur-fade";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import Image from "next/image";

const BLUR_FADE_DELAY = 0.04;

export default function Home() {
  return (
    <main className="flex flex-col space-y-10">
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

      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold">About</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <p className="font-sans text-pretty text-sm text-muted-foreground">
            {DATA.summary}
          </p>
        </BlurFade>
      </section>

      <section className="work-experience">
        <div className="flex flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">Work Experience</h2>
          </BlurFade>

          {DATA.work.map((work, index) => (
            <BlurFade delay={BLUR_FADE_DELAY * 6 + index} key={index}>
              <ResumeCard
                logoUrl={work.logoUrl}
                altText={work.company}
                href={work.href}
                subtitle={work.title}
                title={work.company}
                description={work.description}
                period={`${work.start} - ${work.end}`}
              />
            </BlurFade>
          ))}
        </div>
      </section>

      <section id="education">
        <div className="flex flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>

          {DATA.education.map((work, index) => (
            <BlurFade delay={BLUR_FADE_DELAY * 8 + index} key={index}>
              <ResumeCard
                logoUrl={work.logoUrl}
                altText={work.school}
                href={work.href}
                subtitle={work.degree}
                title={work.school}
                period={`${work.start} - ${work.end}`}
              />
            </BlurFade>
          ))}
        </div>
      </section>

      <section id="skills">
        <div className="flex flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">Skills</h2>
          </BlurFade>

          <div className="flex flex-wrap gap-3">
            {DATA.skills.map((skill, index) => (
              <Tooltip key={skill.name}>
                <TooltipTrigger>
                  <BlurFade
                    key={skill.name}
                    delay={BLUR_FADE_DELAY * 10 + index}
                  >
                    <div className="size-8">
                      <Image src={skill.icon} alt={skill.name} fill />
                    </div>
                  </BlurFade>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{skill.name}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </div>
        </div>
      </section>

      <section id="projects">
        <div className="space-y-12 py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center space-y-2 justify-center text-center">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                My Projects
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Check out my latest work
              </h2>
              <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                I&apos;ve worked on a variety of projects, from simple websites
                to complex web applications. Here are a few of my favorites.
              </p>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
