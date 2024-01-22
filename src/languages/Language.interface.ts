import {MomentOfTheDay} from "../moment/MomentOfTheDay";

export interface LanguageInteface {

    Congratulation(): string;

    SayHello(moment: MomentOfTheDay): string;

    SayGoodBye(): string;

    toString(): string;

}