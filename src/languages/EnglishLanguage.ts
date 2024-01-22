import {LanguageInteface} from "./Language.interface";
import {Expressions} from "../expressions";
import {MomentOfTheDay} from "../moment/MomentOfTheDay";

export class EnglishLanguage implements LanguageInteface {


    public toString(): string {
        return "Langue Anglaise";
    }

    SayHello(moment: MomentOfTheDay): string {
        if(moment == MomentOfTheDay.Morning)
            return Expressions.GOOD_MORNING;

        if(moment == MomentOfTheDay.Afternoon)
            return Expressions.GOOD_AFTERNOON;

        if(moment == MomentOfTheDay.Evening)
            return Expressions.GOOD_EVENING;

        if(moment == MomentOfTheDay.Night)
            return Expressions.GOOD_NIGHT;

        return Expressions.HELLO;
    }

    Congratulation(): string {
        return Expressions.WELL_SAID;
    }

    SayGoodBye(moment: MomentOfTheDay): string {
        return Expressions.GOODBYE;
    }
}