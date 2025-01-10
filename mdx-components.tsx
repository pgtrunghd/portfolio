import { MDXComponents } from "mdx/types";
import Image from "next/image";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    img: (props) => (
      <Image className="mx-auto object-contain" width={300} height={200} {...props} />
    ),
    ...components,
  };
}
