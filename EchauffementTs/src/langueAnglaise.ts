import {LangueInterface} from "./langue.interface";
import {Expressions} from "./Expressions";
import {MomentDeLaJournee} from "./momentDeLaJournee";

export class LangueAnglaise implements LangueInterface {
    public Acquitter(): string {
        return Expressions.GOODBYE;
    }

    public Saluer(moment: MomentDeLaJournee): string {
        return Expressions.HELLO;
    }

    public Feliciter(): string {
        return Expressions.WELL_SAID;
    }

    public toString(): string {
        return "Langue Anglaise";
    }
}