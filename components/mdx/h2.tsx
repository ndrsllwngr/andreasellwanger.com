import { withHeadingId } from "@/components/mdx/utils";

export function H2({ children }) {
  return (
    <h2 className="group font-bold text-xl my-8 relative">
      {withHeadingId(children)}
    </h2>
  );
}