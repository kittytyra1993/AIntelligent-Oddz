"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function CollegeFootballPage() {
  return (
    <div className="flex min-h-screen flex-col bg-black">
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(0,255,127,0.15),transparent_50%)]" />
      <div className="fixed inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

      <div className="relative flex-1 border-l border-white/10">
        <div className="flex h-14 items-center gap-4 border-b border-white/10 px-6 backdrop-blur-sm">
          <h1 className="text-lg font-semibold">College Football</h1>
        </div>
      </div>
    </div>
  );
}




