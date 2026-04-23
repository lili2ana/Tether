export type SupportRequest = {
  id: string;
  userName: string;
  location: string;
  energyLevel: "Low" | "Medium" | "High";
  emotionalState: "Anxious" | "Overwhelmed" | "Flat" | "Hopeful";
  urgency: "Soon" | "Today" | "Now";
  supportType: "Check-in" | "Practical help" | "Grounding" | "Accountability";
  format: "Text" | "Voice note" | "Call";
  explanationLoad: "Minimal" | "Some context" | "Detailed";
};

export type CapacityProfile = {
  id: string;
  name: string;
  pronouns: string;
  timeAvailable: "10 min" | "20 min" | "30+ min";
  supportTypes: Array<SupportRequest["supportType"]>;
  formatPreference: Array<SupportRequest["format"]>;
  bandwidth: "Light" | "Steady" | "High";
  reliabilityScore: number;
};

export const sampleRequests: SupportRequest[] = [
  {
    id: "req-101",
    userName: "Maya",
    location: "Brooklyn",
    energyLevel: "Low",
    emotionalState: "Overwhelmed",
    urgency: "Today",
    supportType: "Grounding",
    format: "Voice note",
    explanationLoad: "Minimal",
  },
  {
    id: "req-102",
    userName: "Leo",
    location: "Austin",
    energyLevel: "Medium",
    emotionalState: "Anxious",
    urgency: "Soon",
    supportType: "Check-in",
    format: "Text",
    explanationLoad: "Some context",
  },
];

export const sampleCapacity: CapacityProfile[] = [
  {
    id: "cap-301",
    name: "Ari",
    pronouns: "they/them",
    timeAvailable: "20 min",
    supportTypes: ["Grounding", "Check-in"],
    formatPreference: ["Voice note", "Text"],
    bandwidth: "Steady",
    reliabilityScore: 97,
  },
  {
    id: "cap-302",
    name: "Jules",
    pronouns: "she/her",
    timeAvailable: "10 min",
    supportTypes: ["Practical help", "Accountability"],
    formatPreference: ["Text"],
    bandwidth: "Light",
    reliabilityScore: 94,
  },
  {
    id: "cap-303",
    name: "Noah",
    pronouns: "he/him",
    timeAvailable: "30+ min",
    supportTypes: ["Check-in", "Grounding", "Practical help"],
    formatPreference: ["Call", "Voice note"],
    bandwidth: "High",
    reliabilityScore: 99,
  },
];
