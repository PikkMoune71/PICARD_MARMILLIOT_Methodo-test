import {LanguageInteface} from "./Language.interface";
import {Expressions} from "../expressions";

export class EnglishLanguage implements LanguageInteface {


    public toString(): string {
        return "Langue Anglaise";
    }

    SayHello(): string {
        return Expressions.HELLO;
    }

    Congratulation(): string {
        return Expressions.WELL_SAID;
    }

    SayGoodBye(): string {
        return Expressions.GOODBYE;
    }
}