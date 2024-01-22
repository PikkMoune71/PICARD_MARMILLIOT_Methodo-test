import {LanguageInteface} from "../../src/languages/Language.interface";
import {MomentOfTheDay} from "../../src/moment/MomentOfTheDay";


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

    SayGoodBye(): string {
        return "Goodbye !";
    }

}