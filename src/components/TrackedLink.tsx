"use client";

import { track } from "@/lib/analytics";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  event: Parameters<typeof track>[0];
  eventProps?: Record<string, string>;
  children: ReactNode;
};

export default function TrackedLink({ event, eventProps, children, ...rest }: Props) {
  return (
    <a {...rest} onClick={() => track(event, eventProps)}>
      {children}
    </a>
  );
}
