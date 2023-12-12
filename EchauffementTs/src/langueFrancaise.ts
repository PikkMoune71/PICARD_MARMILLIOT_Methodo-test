import {LangueInterface} from "./langue.interface";
import {Expressions} from "./Expressions";
import {MomentDeLaJournee} from "./momentDeLaJournee";

export class LangueFrancaise implements LangueInterface {

    public Acquitter(moment: MomentDeLaJournee): string {
        if(moment == MomentDeLaJournee.Matin)
            return Expressions.BONNE_JOURNEE

        if(moment == MomentDeLaJournee.ApresMidi)
            return Expressions.BON_APRESMIDI

        if(moment == MomentDeLaJournee.Soiree)
            return Expressions.BONNE_SOIREE

        if(moment == MomentDeLaJournee.Nuit)
            return Expressions.BONNE_NUIT

        return Expressions.AU_REVOIR;
    }

    public Saluer(moment: MomentDeLaJournee): string {
        if(moment == MomentDeLaJournee.Soiree || moment == MomentDeLaJournee.Nuit)
            return Expressions.BONSOIR;
        return Expressions.BONJOUR;
    }

    public Feliciter(): string {
        return Expressions.BIEN_DIT;
    }

    public toString(): string {
        return "Langue Française";
    }
}