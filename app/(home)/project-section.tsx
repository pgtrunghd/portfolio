import { ProjectCard } from "@/components/project-card";
import BlurFade from "@/components/ui/blur-fade";
import { DATA } from "@/data/resume";
import { BLUR_FADE_DELAY } from "@/lib/constants";
import React from "react";

export const ProjectSection = () => {
  return (
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
              I&apos;ve worked on a variety of projects, from simple websites to
              complex web applications. Here are a few of my favorites.
            </p>
          </div>
        </BlurFade>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 mx-auto">
          {DATA.projects.map((project, index) => (
            <BlurFade
              key={project.title}
              delay={BLUR_FADE_DELAY * 12 + index * 0.1}
            >
              <ProjectCard
                href={project.href}
                key={project.title}
                title={project.title}
                description={project.description}
                tags={project.technologies}
                links={project.links}
                image={project.image}
              />
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
};
