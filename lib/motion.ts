import { useTransform, type MotionValue } from "motion/react"

/**
 * Scroll-linked value with a hard clamp, computed on the main thread.
 *
 * motion accelerates opacity through a native ScrollTimeline when given the
 * array form of useTransform, and that path does not clamp: past the end of
 * the range the value keeps extrapolating (an element faded to 0 comes back).
 * The function form opts out of acceleration, so the clamp is real.
 */
export function useRange(p: MotionValue<number>, input: [number, number], output: [number, number]) {
  return useTransform(p, (v) => {
    const t = Math.min(Math.max((v - input[0]) / (input[1] - input[0]), 0), 1)
    return output[0] + (output[1] - output[0]) * t
  })
}
