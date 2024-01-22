import {LanguageInteface} from "../../src/domaine/languages/Language.interface";
import {MomentOfTheDay} from "../../src/domaine/moment/MomentOfTheDay";


export class FakeLanguage implements LanguageInteface {

    Congratulation(): string {
        return "Well said !";
    }

    toString(): string {
        return "Fake Language";
    }

    SayHello(moment: MomentOfTheDay): string {
        return "Hello !" + moment.toString();
    }

    SayGoodBye(moment: MomentOfTheDay): string {
        return "Goodbye !" + moment.toString();
    }

}