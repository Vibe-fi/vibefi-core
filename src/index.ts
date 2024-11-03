import { Base } from "./base";
import { Quests } from "./mods/quest";
import { applyMixins } from "./utils/common";

class Vibefi extends Base {}
interface Typicode extends Quests {}

applyMixins(Vibefi, [Quests]);

export default Vibefi;
