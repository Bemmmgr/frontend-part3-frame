import { ComponentPropsWithoutRef } from "react";

// 053 - Wrapper components render different elements
/*
type AnchorProps = {
  el: "anchor";
} & ComponentPropsWithoutRef<"a">;
 */
/*
type ButtonProps = {
    el: "button";
    } & ComponentPropsWithoutRef<"button">;
    */

type AnchorProps = ComponentPropsWithoutRef<"a"> & {
  href?: string;
};
type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  href?: never;
};

function isAnchorProps(props: AnchorProps | ButtonProps): props is AnchorProps {
  return "href" in props;
}

export default function Button(props: AnchorProps | ButtonProps) {
  //   const { el, ...otherProps } = props;

  // conditional render
  if (isAnchorProps(props)) {
    return <a {...props} className="button"></a>;
  }
  return <button {...props} className="button"></button>;
}
