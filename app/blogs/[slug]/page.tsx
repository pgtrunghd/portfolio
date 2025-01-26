import { getBlog } from "@/data/blogs";
import { DATA } from "@/data/resume";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const blog = await getBlog(slug);
  const { title, description } = blog.metadata;

  const url = DATA.url;

  const ogUrl = new URL(`${url}/api/og`);
  ogUrl.searchParams.set("title", title);

  return {
    title,
    description,
    publisher: DATA.name,
    creator: DATA.name,
    openGraph: {
      title,
      description,
      url: `${url}/blogs/${slug}`,
      images: [
        {
          url: ogUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
  };
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = await getBlog(slug);

  return (
    <>
      <h1>{blog.metadata.title}</h1>
      <p>{blog.metadata.description}</p>
      <div dangerouslySetInnerHTML={{ __html: blog.article }} />
    </>
  );
}
