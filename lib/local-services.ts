import type { LocalService } from "./types"
import { bocaServices } from "./local-boca"
import { palmBeachServices } from "./local-palm-beach"

/**
 * A discipline in one priority town (/palm-beach-county/[town]/[service]).
 * West Palm Beach is covered by the main service pages; these add Boca Raton
 * and the Town of Palm Beach. Every ground fact links to its primary source.
 * Copy laws: VOICE.md. Facts checked 2026-10-04.
 */
export const localServices: LocalService[] = [...bocaServices, ...palmBeachServices]

export const localBy = (town: string, service: string) => localServices.find((l) => l.town === town && l.service === service)
export const localForTown = (town: string) => localServices.filter((l) => l.town === town)
export const localForService = (service: string) => localServices.filter((l) => l.service === service)
