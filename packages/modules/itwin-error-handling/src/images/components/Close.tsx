// Copyright (c) Bentley Systems, Incorporated. All rights reserved.
import * as React from "react";

function SvgClose(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 16 16" {...props}>
      <path d="M14 0L8 6 2 0 0 2l6 6-6 6 2 2 6-6 6 6 2-2-6-6 6-6" />
    </svg>
  );
}

export default SvgClose;