import type { ReactNode } from "react";

// 047 - building more dynamic & flexible component
type HintBoxProps = {
  mode: "hint";
  children: ReactNode;
};

// 049 - Solution binding components with discriminated units
type WraningBoxProps = {
  mode: "warning";
  severity: "low" | "medium" | "high";
  children: ReactNode;
};

type InfoBoxProps = HintBoxProps | WraningBoxProps;

export default function InfoBox(props: InfoBoxProps) {
  const { children } = props;

  if (props.mode === "hint")
    return (
      <aside className="infobox infobox-hint">
        <p>{children}</p>
      </aside>
    );

  const { severity } = props;

  return (
    <aside className={`infobox infobox-warning warning--${severity}`}>
      <h2>Warning</h2>
      <p>{children}</p>
    </aside>
  );
}
