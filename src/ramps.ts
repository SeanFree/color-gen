import Color from "color"
import { ColorBase, ColorRamp, ColorShade, ColorTint } from "./types"
import { EasingFunction, easeInQuad, easeInSine, easeLinear } from "./utils"
import colors from "./colors"

const tints: ColorTint[] = [
  400,
  300,
  200,
  100,
  50,
]
const base: ColorBase = 500
const shades: ColorShade[] = [
  600,
  700,
  800,
  900,
  950,
]

type RampEaseConfig = {
  shadeStart?: number
  shadeEnd?: number
  tintStart?: number
  tintEnd?: number
  shadeEase?: EasingFunction
  tintEase?: EasingFunction
}

const defaultEaseConfig = {
  shadeStart: 0,
  shadeEnd: 0.765,
  tintStart: 0.065,
  tintEnd: 1.05,
  shadeEase: easeLinear,
  tintEase: easeLinear,
}

const createRamp = (
  color: Color,
  config?: RampEaseConfig,
): ColorRamp => {
  const {
    tintStart,
    tintEnd,
    shadeStart,
    shadeEnd,
    tintEase,
    shadeEase,
  } = {
    ...defaultEaseConfig,
    ...(config ?? {}),
  }
  const ramp = {} as ColorRamp

  ramp['DEFAULT'] = ramp[base] = color.hex()

  tints.forEach((tint, i) => {
    const amount = tintEase(i + 1, tintStart, tintEnd - tintStart, tints.length)

    ramp[tint] = color.lighten(amount).hex()
  })

  shades.forEach((shade, i) => {
    const amount = shadeEase(i + 1, shadeStart, shadeEnd - shadeStart, shades.length)

    ramp[shade] = color.darken(amount).hex()
  })

  return ramp as ColorRamp
}

export const neutral = createRamp(Color(colors.pureGray))

export const primary = createRamp(
  Color(colors.teal),
  {
    tintStart: 0.196,
    tintEnd: 1.79,
    tintEase: easeInQuad,
  }
)

export const secondary = createRamp(
  Color(colors.slate),
  {
    tintEnd: 0.97,
  }
)

export const success = createRamp(
  Color(colors.green),
  {
    tintStart: 0.18,
    tintEnd: 1.845,
    tintEase: easeInSine,
  }
)

export const info = createRamp(
  Color(colors.blue),
  {
    tintStart: 0.06,
    tintEnd: 0.805,
  }
)

export const warning = createRamp(
  Color(colors.mustard),
  {
    tintStart: 0.195,
    tintEnd: 2.1,
    tintEase: easeInSine,
  }
)

export const danger = createRamp(
  Color(colors.red),
  {
    tintStart: 0.147,
    tintEnd: 0.887,
  }
)

export const upgrade = createRamp(
  Color(colors.turquoise),
  { 
    tintStart: 0.165,
    tintEnd: 2.1,
    tintEase: easeInQuad,
  }
)

export const premium = createRamp(
  Color(colors.gold),
  {
    tintStart: 0.165,
    tintEnd: 1.85,
    tintEase: easeInSine,
  }
)
