"use client";
import { fontHeading } from "@/lib/font";
import { cn } from "@/lib/utils";
import { NotepadText } from "lucide-react";
import Link from "next/link";
import { MobileNav } from "./mobile-nav";
import { Icons } from "./icons";

const items = ["Product", "About us", "Pricing", "Team", "Contact"];

export function MainNav() {
  return (
    <div
      className={cn(
        "flex justify-between items-center w-full px-3 md:px-0",
        fontHeading.className
      )}
    >
      <Link href={"/"}>
        <div className="flex items-center gap-1.5">
          <Icons.Logo />
          <h1 className="text-2xl">ExpressQuiz</h1>
        </div>
      </Link>
      <ul className="hidden md:flex font-normal items-center gap-5">
        {items.map((item, id) => (
          <Link href={"/"} className="group transition duration-300" key={id}>
            {item}
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black "></span>
          </Link>
        ))}
      </ul>
      <MobileNav items={items} />
    </div>
  );
}
