import { getBlog } from "@/data/blogs";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  const blog = await getBlog(slug);
  return {
    title: blog.metadata.title,
  };
}

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const blog = await getBlog(slug);

  return (
    <>
      <h1>{blog.metadata.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: blog.article }} />
    </>
  );
}
