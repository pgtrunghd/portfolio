import { Blog } from "@/data/blogs";
import { formatDate } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import BlurFade from "./ui/blur-fade";
import { BLUR_FADE_DELAY } from "@/lib/constants";

export default function Blogs({ blogs }: { blogs: Blog[] }) {
  return (
    <ul className="space-y-6">
      {blogs.map(({ slug, title, publishDate }, index: number) => (
        <BlurFade key={slug} delay={BLUR_FADE_DELAY * 2 + index * 0.1}>
          <li>
            <Link href={`/blogs/${slug}`}>
              <h2 className="text-lg">{title}</h2>
              <p className="text-sm">{formatDate(publishDate)}</p>
            </Link>
          </li>
        </BlurFade>
      ))}
    </ul>
  );
}
