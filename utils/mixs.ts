export type RGB = [number, number, number];

export const mix = (from: RGB, to: RGB, t: number): RGB =>
  from.map((c, i) => Math.round(c + (to[i] - c) * t)) as RGB;