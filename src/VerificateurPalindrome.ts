import * as os from "os";
import {LanguageInteface} from "./languages/Language.interface";
import {MomentOfTheDay} from "./moment/MomentOfTheDay";
export class VerificateurPalindrome {
    private readonly language: LanguageInteface;
    private readonly moment: MomentOfTheDay;

    constructor(language: LanguageInteface, moment: MomentOfTheDay) {
        this.language = language;
        this.moment = moment;
    }
    public Verifier(chaine: string): string {
        let miroir:string = chaine.split('').reverse().join('');

        let sortie: string = this.language.SayHello(this.moment) + os.EOL + miroir + os.EOL;

        if (chaine === miroir) {
            sortie += this.language.Congratulation() + os.EOL;
        }
        return sortie + this.language.SayGoodBye();
    }
}