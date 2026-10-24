import { Fragment } from "react";

// "plain **highlighted** plain" -> text with <strong class="hl">
export function rich(text: string) {
  return text.split("**").map((part, i) =>
    i % 2 ? <strong key={i} className="hl">{part}</strong> : <Fragment key={i}>{part}</Fragment>
  );
}
