import {LangueInterface} from "../../src/domaine/langue.interface";
import {MomentDeLaJournee} from "../../src/domaine/momentDeLaJournee";

export class LangueStub implements LangueInterface {
    Feliciter(): string {
        return "";
    }
    Saluer(moment: MomentDeLaJournee): string {
        return "";
    }
    Acquitter(): string {
        return "";
    }

}