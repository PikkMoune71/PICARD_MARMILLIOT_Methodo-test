import {LanguageInteface} from "../../src/languages/Language.interface";


export class FakeLanguage implements LanguageInteface {

    Congratulation(): string {
        return "Well said !";
    }

    toString(): string {
        return "Fake Language";
    }

    SayHello(): string {
        return "Hello !";
    }

}