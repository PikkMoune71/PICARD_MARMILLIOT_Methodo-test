import {LangueInterface} from "./langue.interface";
import {Expressions} from "./Expressions";
import {MomentDeLaJournee} from "./momentDeLaJournee";

export class LangueAnglaise implements LangueInterface {
    public Acquitter(moment: MomentDeLaJournee): string {
        return Expressions.GOODBYE;
    }

    public Saluer(moment: MomentDeLaJournee): string {
        if(moment == MomentDeLaJournee.Matin)
            return Expressions.GOOD_MORNING;

        if(moment == MomentDeLaJournee.ApresMidi)
            return Expressions.GOOD_AFTERNOON;

        if(moment == MomentDeLaJournee.Soiree)
            return Expressions.GOOD_EVENING;

        if(moment == MomentDeLaJournee.Nuit)
            return Expressions.GOOD_NIGHT;

        return Expressions.HELLO;
    }

    public Feliciter(): string {
        return Expressions.WELL_SAID;
    }

    public toString(): string {
        return "Langue Anglaise";
    }
}