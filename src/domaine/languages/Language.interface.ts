import {MomentOfTheDay} from "../moment/MomentOfTheDay";

export interface LanguageInteface {

    Congratulation(): string;

    SayHello(moment: MomentOfTheDay): string;

    SayGoodBye(moment: MomentOfTheDay): string;

    toString(): string;

}