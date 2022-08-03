import React from "react";
import UsageData from "../components/UsageData.tsx";
import ParentSize from "@visx/responsive/lib/components/ParentSize";
import FlexText from "../components/FlexText.tsx";
import "./pageStyle.css";

export default function Main() {
  return (
    <div>
      <FlexText />
      <div className="usage-data">
        <UsageData width={500} height={500} />
      </div>
    </div>
  );
}
