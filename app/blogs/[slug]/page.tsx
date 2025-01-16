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
  const { title, description, publishDate } = blog.metadata;

  return {
    title,
    description,
    publisher: DATA.name,
    creator: DATA.name,
    openGraph: {
      title: DATA.name,
      description: DATA.description,
      images: [
        "https://raw.githubusercontent.com/pgtrunghd/hosting-images/refs/heads/master/open-graph-image.webp",
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
