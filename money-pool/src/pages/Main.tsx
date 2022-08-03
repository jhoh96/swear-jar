import React from "react";
import InstanceCloud from "../components/InstanceCloud.tsx";
import ParentSize from '@visx/responsive/lib/components/ParentSize';

export default function Main() {
  return (
    <div>
      {/* <InstanceCloud  width={500} height={500}/> */}
      hmm
      <ParentSize>{({ width, height }) => <InstanceCloud width={500} height={500} />}</ParentSize>,
    </div>
  );
}
