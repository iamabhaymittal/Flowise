"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { fontHeading } from "@/lib/font";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import Link from "next/link";

export function MobileNav({ items }: { items: string[] }) {
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Menu size={30} />
        </SheetTrigger>
        <SheetContent side={"bottom"} className="h-1/2">
          <SheetHeader>
            <SheetDescription className="flex items-start flex-col gap-5 ">
              {items.map((item, id) => (
                <Link
                  key={id}
                  href={"/"}
                  className={cn(fontHeading.className, "text-base text-black")}
                >
                  {item}
                </Link>
              ))}
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
}
