import {LanguageInteface} from "./Language.interface";
import {Expressions} from "../expressions";

export class FrenchLanguage implements LanguageInteface {

    public toString(): string {
        return "Langue Française";
    }

    SayHello(): string {
        return Expressions.BONJOUR;
    }

    Congratulation(): string {
        return Expressions.BIEN_DIT;
    }

    SayGoodBye(): string {
        return Expressions.AU_REVOIR;
    }
}