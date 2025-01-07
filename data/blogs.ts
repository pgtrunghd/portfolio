import { readdir } from "fs/promises";

export interface Blog {
  slug: string;
  title: string;
  publishDate: string;
}

export async function getBlogs(): Promise<Blog[]> {
  const slugs = (
    await readdir("./app/blogs/(route)", { withFileTypes: true })
  ).filter((dirent) => dirent.isDirectory());

  const blogs = await Promise.all(
    slugs.map(async ({ name }) => {
      const { metadata } = await import(`@/app/blogs/(route)/${name}/page.mdx`);
      return { slug: name, ...metadata };
    })
  );

  blogs.sort((a, b) => +new Date(b.publishDate) - +new Date(a.publishDate));

  return blogs;
}
