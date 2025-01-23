import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);

    const hasTitle = searchParams.has("title");
    const title = hasTitle
      ? searchParams.get("title")?.slice(0, 100)
      : "My blog website";

    return new ImageResponse(
      (
        <div tw="flex justify-center items-center w-full h-full">
          <h1 tw="text-3xl text-gray-900 font-bold">{title}</h1>
        </div>
      )
    );
  } catch (error) {
    return new Response("Failed to generate the OG image", { status: 500 });
  }
}
