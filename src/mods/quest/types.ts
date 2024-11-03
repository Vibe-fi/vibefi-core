export type Quest = {
  id: number;
  address: string; // On-Chain Address
};

export type NewQuest = Omit<Quest, "id">;
