import BlurFade from "@/components/ui/blur-fade";
import { BLUR_FADE_DELAY } from "@/lib/constants";
import React from "react";

export const ContactSection = () => {
  return (
    <section id="contact">
      <div className="flex items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
        <BlurFade delay={BLUR_FADE_DELAY * 13}>
          <div className="space-y-3">
            <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
              Contact
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Get in Touch
            </h2>
          </div>
        </BlurFade>
      </div>
    </section>
  );
};
