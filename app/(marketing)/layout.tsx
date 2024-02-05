import { MainNav } from "@/components/main-nav";
import React from "react";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="max-w-6xl w-screen inset-0 mx-auto">
        <div className="flex h-20 items-center justify-between py-6">
          <MainNav />
        </div>
      </header>
      <main className="flex-1">{children}</main>
    </div>
  );
}
