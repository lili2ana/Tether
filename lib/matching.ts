import { CapacityProfile, SupportRequest } from "./sample-data";

export function scoreMatch(request: SupportRequest, helper: CapacityProfile) {
  let score = helper.reliabilityScore * 0.2;

  if (helper.supportTypes.includes(request.supportType)) score += 35;
  if (helper.formatPreference.includes(request.format)) score += 20;

  if (request.urgency === "Now" && helper.timeAvailable === "10 min") score += 12;
  if (request.urgency === "Today" && helper.timeAvailable !== "10 min") score += 10;
  if (request.energyLevel === "Low" && helper.bandwidth !== "Light") score += 8;

  return Math.round(score);
}

export function matchHelpers(request: SupportRequest, helpers: CapacityProfile[]) {
  return helpers
    .map((helper) => ({ helper, score: scoreMatch(request, helper) }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);
}
