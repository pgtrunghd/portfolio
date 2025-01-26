import { ImageResponse } from "next/og";

export const runtime = "edge";

async function loadGoogleFont(font: string, text: string) {
  const url = `https://fonts.googleapis.com/css2?family=${font}&text=${encodeURIComponent(
    text
  )}`;
  const css = await (await fetch(url)).text();
  const resource = css.match(
    /src: url\((.+)\) format\('(opentype|truetype)'\)/
  );

  if (resource) {
    const response = await fetch(resource[1]);
    if (response.status == 200) {
      return await response.arrayBuffer();
    }
  }

  throw new Error("failed to load font data");
}

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
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: "IBM Plex Mono",
            data: await loadGoogleFont("IBM+Plex+Mono", title as string),
            style: "normal",
          },
        ],
      }
    );
  } catch (error) {
    console.log(error);
    return new Response("Failed to generate the OG image", { status: 500 });
  }
}
