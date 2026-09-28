"use client"

import { useSyncExternalStore } from "react"

/**
 * The visitor's business name, shared across the homepage (the showpiece sets
 * it, later chapters and the contact form reuse it). Session-scoped and
 * wrapped in try/catch: private windows and blocked storage just mean it
 * starts empty.
 */
const KEY = "ew:name"
let value = ""
const subs = new Set<() => void>()

try {
  if (typeof window !== "undefined") value = sessionStorage.getItem(KEY) ?? ""
} catch {}

export function setBrandName(v: string) {
  value = v.slice(0, 32)
  try {
    sessionStorage.setItem(KEY, value)
  } catch {}
  subs.forEach((f) => f())
}

export function useBrandName() {
  return useSyncExternalStore(
    (f) => {
      subs.add(f)
      return () => subs.delete(f)
    },
    () => value,
    () => ""
  )
}

export const FALLBACK_NAME = "Your Name"
