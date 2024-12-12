import { ResumeCard } from "@/components/resume-card";
import BlurFade from "@/components/ui/blur-fade";
import { DATA } from "@/data/resume";
import { BLUR_FADE_DELAY } from "@/lib/constants";
import React from "react";

export const EducationSection = () => {
  return (
    <section id="education">
      <div className="flex flex-col gap-y-3">
        <BlurFade delay={BLUR_FADE_DELAY * 7}>
          <h2 className="text-xl font-bold">Education</h2>
        </BlurFade>

        {DATA.education.map((work, index) => (
          <BlurFade delay={BLUR_FADE_DELAY * 8 + index * 0.1} key={index}>
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
  );
};
