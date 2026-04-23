import { SupportRequest } from "./sample-data";

export function generateSupportCard(request: SupportRequest) {
  const urgencyPhrase =
    request.urgency === "Now" ? "in the next few minutes" : request.urgency === "Today" ? "sometime today" : "soon";

  return {
    headline: `${request.userName} is asking for a ${request.supportType.toLowerCase()} ${urgencyPhrase}`,
    body: `Energy is ${request.energyLevel.toLowerCase()} and emotional state is ${request.emotionalState.toLowerCase()}. A ${request.format.toLowerCase()} response with ${request.explanationLoad.toLowerCase()} explanation requested.`,
    toneGuidance:
      "Lead with warmth, ask one clear consent-based question, and offer one small concrete next step. Keep language simple and non-clinical.",
  };
}
