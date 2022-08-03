import React from "react";
import UsageData from "../components/UsageData.tsx";
import ParentSize from '@visx/responsive/lib/components/ParentSize';

export default function Main() {
  return (
    <div>
      <UsageData  width={500} height={500}/>
    </div>
  );
}
