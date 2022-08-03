import React from 'react'
import { Text } from "@visx/text";

export default function FlexText() {
  return (
      <Text
        x={0}
        width={500}
        verticalAnchor="start"
        style={{ fontWeight: 900 }}
        fontSize={'3em'}
        y={21}
        scaleToFit={false}
      >
        SAMPLE TEXT HERE
      </Text>
  );
}
