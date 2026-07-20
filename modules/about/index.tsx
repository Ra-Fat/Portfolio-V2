"use client";

import React, { useState, useEffect, useRef } from "react";
import { SectionTitle } from "@/components/atoms/section-title";
import { Overview } from "@/components/molecules/about/overview";

const Card = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
  variants?: any;
}) => (
  <div
    className={`bg-[#111111] border border-white/[0.07] rounded-2xl overflow-hidden ${className}`}
  >
    {children}
  </div>
);

export const About = () => {
  return (
    <div className="w-full">
      <div className="overflow-x-hidden py-20 container">
        <div className="flex flex-col w-full text-white">
          <SectionTitle title="About" subtitle="Profile" />

          <div className="w-full mt-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {/* Row 1 - 3 columns */}
              <Card className="flex flex-col h-80">
                <Overview />
              </Card>

              <Card className="p-7 flex flex-col gap-4">Testing</Card>

              <Card className="relative overflow-hidden">Testing</Card>

              {/* Row 2 - full-width merged column */}
              <Card className="md:col-span-3 p-7 flex flex-col gap-4 h-60">
                Testing
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
