export type ColorBase = 500

export type ColorTint =
  | 50
  | 100
  | 200
  | 300
  | 400

export type ColorShade =
  | 600
  | 700
  | 800
  | 900
  | 950

export type ColorRampKey = 'DEFAULT' | ColorBase | ColorTint | ColorShade

export type ColorRamp = Record<ColorRampKey, string>
