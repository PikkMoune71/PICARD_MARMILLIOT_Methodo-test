import {LangueInterface} from "../../src/langue.interface";
import {MomentDeLaJournee} from "../../src/momentDeLaJournee";

export class LangueFake implements LangueInterface {
    Feliciter(): string {
        return "Félicitations";
    }
    Saluer(moment: MomentDeLaJournee): string {
        return "Salutations/" + moment.toString();
    }
    Acquitter(moment: MomentDeLaJournee): string {
        return "Acquittance/" + moment.toString();
    }
}