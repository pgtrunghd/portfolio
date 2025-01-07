import BlurFade from "@/components/ui/blur-fade";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { BLUR_FADE_DELAY } from "@/lib/constants";
import React from "react";
import Image from "next/image";

export const SkillSection = () => {
  return (
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
                  delay={BLUR_FADE_DELAY * 10 + index * 0.1}
                >
                  <div className="size-8 dark:invert">
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
  );
};
