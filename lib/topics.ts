import type { Topic } from "./types"
import { webServiceTopics } from "./topics-web-services"
import { webIndustryTopics } from "./topics-web-industries"
import { photoTopics } from "./topics-photo"
import { videoTopics } from "./topics-video"
import { topicImagery } from "./imagery"

/**
 * Pages one level under a service hub (/[service]/[topic]): specific things we
 * build or make, and the same service for one kind of client.
 * Each file is one cluster; every ground fact links to its primary source.
 */
export const topics: Topic[] = [...webServiceTopics, ...webIndustryTopics, ...photoTopics, ...videoTopics].map((t) => ({
  ...t,
  image: topicImagery[`${t.service}/${t.slug}`] ?? t.image,
}))

export const topicBy = (service: string, slug: string) => topics.find((t) => t.service === service && t.slug === slug)
export const topicsFor = (service: string, kind?: Topic["kind"]) => topics.filter((t) => t.service === service && (!kind || t.kind === kind))
