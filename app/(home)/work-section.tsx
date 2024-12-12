import { ResumeCard } from "@/components/resume-card";
import BlurFade from "@/components/ui/blur-fade";
import { DATA } from "@/data/resume";
import { BLUR_FADE_DELAY } from "@/lib/constants";
import React from "react";

export const WorkSection = () => {
  return (
    <section className="work-experience">
      <div className="flex flex-col gap-y-3">
        <BlurFade delay={BLUR_FADE_DELAY * 5}>
          <h2 className="text-xl font-bold">Work Experience</h2>
        </BlurFade>

        {DATA.work.map((work, index) => (
          <BlurFade delay={BLUR_FADE_DELAY * 6 + index * 0.1} key={index}>
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
  );
};
