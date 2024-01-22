import {LanguageInteface} from "./Language.interface";
import {Expressions} from "../expressions";

export class EnglishLanguage implements LanguageInteface {


    public toString(): string {
        return "langue Anglaise";
    }

    Congratulation(): string {
        return Expressions.WELL_SAID;
    }
}