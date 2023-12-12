import {LangueInterface} from "./langue.interface";
import {Expressions} from "./Expressions";
import {MomentDeLaJournee} from "./momentDeLaJournee";

export class LangueFrancaise implements LangueInterface {

    public Acquitter(): string {
        return Expressions.AU_REVOIR;
    }

    public Saluer(moment: MomentDeLaJournee): string {
        return Expressions.BONJOUR;
    }

    public Feliciter(): string {
        return Expressions.BIEN_DIT;
    }

    public toString(): string {
        return "Langue Francaise";
    }
}