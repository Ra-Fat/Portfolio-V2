"use client";

import { RefObject } from "react";
import { useDarkSectionProgress } from "@/utils/use-over-dark-section";
import { mix, RGB } from "./mixs";

interface UseNavColorsOptions {
  lightBg?: RGB;
  darkBg?: RGB;
  lightBorder?: RGB;
  darkBorder?: RGB;
  baseAlpha?: number;
  alphaShift?: number;
}

export const useNavColors = (
  ref: RefObject<HTMLElement | null>,
  sectionClass = "dark-section",
  {
    lightBg = [255, 255, 255],
    darkBg = [0, 0, 0],
    lightBorder = [0, 0, 0],
    darkBorder = [255, 255, 255],
    baseAlpha = 0.7,
    alphaShift = 0.1,
  }: UseNavColorsOptions = {},
) => {
  const progress = useDarkSectionProgress(ref, sectionClass);
  const isDark = progress > 0.5;

  const bg = mix(lightBg, darkBg, progress);
  const bgAlpha = baseAlpha - progress * alphaShift;
  const border = mix(lightBorder, darkBorder, progress);

  const style = {
    backgroundColor: `rgba(${bg.join(",")}, ${bgAlpha})`,
    border: `1px solid rgba(${border.join(",")}, 0.1)`,
  };

  return { progress, isDark, bg, bgAlpha, border, style };
};