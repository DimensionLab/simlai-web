"use client";

import { ReactNode } from "react";
import {
  Dialog,
  DialogHeader,
  DialogTrigger,
  DialogContent,
} from "@/components/ui/Dialog";
import Icon from "@mdi/react";
import { mdiClose } from "@mdi/js";

interface DialogProps {
  children: ReactNode;
  title: string;
  trigger?: string | ReactNode;
  open: boolean;
  size?: string;
  onClose: () => void;
}

export default function SimlDialog({
  children,
  title,
  trigger,
  open,
  size,
  onClose
}: DialogProps) {

  return (
    <Dialog open={open}>
      {trigger && <DialogTrigger>{trigger}</DialogTrigger>}
      <DialogContent className={"flex flex-col bg-darkBg w-4xl"}>
        <div className="flex flex-row items-center">
          <DialogHeader className="text-2xl font-bold">{title}</DialogHeader>
          <button onClick={() => onClose()}>
            <Icon path={mdiClose} size={1} className="cursor-pointer" />
          </button>
        </div>
        <div className="flex w-full h-full flex-col overflow-scroll">
          {children}
        </div>
      </DialogContent>
    </Dialog>
  );
}
