import { sendLead, type LeadField } from "@/lib/lead-email"

export const dynamic = "force-dynamic"

const EMAIL_RE = /[^\s@]+@[^\s@]+\.[^\s@]+/

type LeadBody = {
  name?: string
  email?: string
  phone?: string
  company?: string
  message?: string
  interest?: string
  budget?: string
  source?: string
  /** Honeypot. Humans never see it. */
  website?: string
}

export async function POST(req: Request) {
  let body: LeadBody
  try {
    body = (await req.json()) as LeadBody
  } catch {
    return Response.json({ ok: false, error: "Invalid request." }, { status: 400 })
  }
  if (body.website) return Response.json({ ok: true })
  if (!body.name?.trim() || !body.email || !EMAIL_RE.test(body.email)) {
    return Response.json({ ok: false, error: "Name and a valid email are required." }, { status: 422 })
  }

  const fields: LeadField[] = [
    ["Name", body.name],
    ["Company", body.company],
    ["Email", body.email],
    ["Phone", body.phone],
    ["Interested in", body.interest],
    ["Budget", body.budget],
    ["Message", body.message],
    ["Page", body.source],
  ]
  const res = await sendLead({
    subject: `New inquiry${body.company ? `: ${body.company}` : ""}`,
    fields,
    replyTo: { email: body.email, name: body.name },
  })
  if (!res.ok && !res.skipped) return Response.json({ ok: false, error: "Could not send." }, { status: 502 })
  if (res.skipped) console.log("[lead] no BREVO_API_KEY or LEAD_TO_EMAIL; inquiry logged only", fields)
  return Response.json({ ok: true })
}
