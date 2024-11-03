import { Base } from "../../base";
import { NewQuest, Quest } from "./types";

// Resource name for the Quests API
const resourceName = "quests";

// Class that extends the Base class and implements the Quests API
export class Quests extends Base {
  
  // Method to get a single quest by its ID
  async getQuestById(id: number): Promise<Quest> {
    const quest = await this.request<Quest>(`/${resourceName}/${id}`);
    return quest;
  }

  // Method to get all quests
  async getQuests(): Promise<Quest[]> {
    const quests = await this.request<Quest[]>(`/${resourceName}`);
    return quests;
  }

  // Method to create a new quest
  async createQuest(newQuest: NewQuest): Promise<Quest> {
    const quest = await this.request<Quest>(`/${resourceName}`, {
      method: "POST",
      body: JSON.stringify(newQuest),
    });
    return quest;
  }
}