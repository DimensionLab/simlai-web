"use client";

import { ReactNode } from "react";
import {
  Dialog,
  DialogHeader,
  DialogTrigger,
  DialogContent,
} from "@/components/ui/Dialog";

interface DialogProps {
  children: ReactNode;
  title: string;
  trigger?: string | ReactNode;
  open: boolean;
  size?: string;
}

export default function SimlDialog({
  children,
  title,
  trigger,
  open,
  size
}: DialogProps) {

  return (
    <Dialog open={open}>
      {trigger && <DialogTrigger>{trigger}</DialogTrigger>}
      <DialogContent className={"flex flex-col bg-darkBg w-4xl"}>
        <DialogHeader className="text-2xl font-bold">{title}</DialogHeader>
        <div className="flex w-full h-full flex-col overflow-scroll">
          {children}
        </div>
      </DialogContent>
    </Dialog>
  );
}
