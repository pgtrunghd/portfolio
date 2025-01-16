import { metadata } from "./../app/layout";
// import { readdir } from "fs/promises";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkStringify from "rehype-stringify";
import rehypeSanitize from "rehype-sanitize";
import remarkRehype from "remark-rehype";
import remarkGfm from "remark-gfm";

export interface Blog {
  slug: string;
  title: string;
  publishDate: string;
  description: string;
}

async function markdownToHTML(content: string) {
  const result = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeSanitize)
    .use(remarkStringify)
    .process(content);
  return result.toString();
}

export async function getBlog(slug: string) {
  const fileName = path.basename(slug, path.extname(slug));
  const filePath = path.join("content", `${fileName}.mdx`);
  const source = fs.readFileSync(filePath, "utf-8");
  const { content: rawContent, data: metadata } = matter(source);
  const article = await markdownToHTML(rawContent);
  return { article, metadata };
}

export async function getAllBlogs(): Promise<Blog[]> {
  const folderPath = path.join(process.cwd(), "content");

  const slugs = fs
    .readdirSync(folderPath)
    .filter((file) => path.extname(file) === ".mdx");
  // .filter((dirent) => dirent.isDirectory());

  const blogs: Blog[] = await Promise.all(
    slugs.map(async (file) => {
      // const { metadata } = await import(`@/content/${file}`);
      const { metadata } = await getBlog(file);
      return {
        slug: path.basename(file, path.extname(file)),
        title: metadata.title,
        publishDate: metadata.publishDate,
        description: metadata.description,
      };
    })
  );

  blogs.sort((a, b) => +new Date(b.publishDate) - +new Date(a.publishDate));

  return blogs;
}
