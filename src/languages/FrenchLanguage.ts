import {LanguageInteface} from "./Language.interface";
import {Expressions} from "../expressions";

export class FrenchLanguage implements LanguageInteface {

    public toString(): string {
        return "Langue Française";
    }

    Congratulation(): string {
        return Expressions.BIEN_DIT;
    }
}