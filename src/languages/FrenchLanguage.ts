import {LanguageInteface} from "./Language.interface";
import {Expressions} from "../expressions";
import {MomentOfTheDay} from "../moment/MomentOfTheDay";

export class FrenchLanguage implements LanguageInteface {

    public toString(): string {
        return "Langue Française";
    }

    SayHello(moment: MomentOfTheDay): string {
        if(moment == MomentOfTheDay.Evening || moment == MomentOfTheDay.Night) {
            return Expressions.BONSOIR;
        }
        return Expressions.BONJOUR;
    }

    Congratulation(): string {
        return Expressions.BIEN_DIT;
    }

    SayGoodBye(): string {
        return Expressions.AU_REVOIR;
    }
}