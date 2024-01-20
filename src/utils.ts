// https://spicyyoghurt.com/tools/easing-functions

export type EasingFunction = (
  t: number,
  b: number,
  c: number,
  d: number,
) => number

export const easeLinear: EasingFunction = (t, b, c, d) => {
  return c * t / d + b;
}

export const easeInOutQuad: EasingFunction = (t, b, c, d) => {
  if ((t /= d / 2) < 1) return c / 2 * t * t + b;
  return -c / 2 * ((--t) * (t - 2) - 1) + b;
}

export const easeInQuad: EasingFunction = (t, b, c, d) => {
  return c * (t /= d) * t + b;
}

export const easeOutQuad: EasingFunction = (t, b, c, d) => {
  return -c * (t /= d) * (t - 2) + b;
}

export const easeInCubic: EasingFunction = (t, b, c, d) => {
  return c * (t /= d) * t * t + b;
}

export const easeOutCubic: EasingFunction = (t, b, c, d) => {
  return c * ((t = t / d - 1) * t * t + 1) + b;
}

export const easeInSine: EasingFunction = (t, b, c, d) => {
  return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
}

export const easeOutSine: EasingFunction = (t, b, c, d) => {
  return c * Math.sin(t / d * (Math.PI / 2)) + b;
}

export const easeInOutSine: EasingFunction = (t, b, c, d) => {
  return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
}

export const easeInExpo: EasingFunction = (t, b, c, d) => {
  return (t == 0) ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
}

export const easeOutExpo: EasingFunction = (t, b, c, d) => {
  return (t == d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
}
