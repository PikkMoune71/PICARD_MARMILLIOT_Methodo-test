import * as os from "os";
import {LanguageInteface} from "./languages/Language.interface";
export class VerificateurPalindrome {
    private readonly language: LanguageInteface;

    constructor(language: LanguageInteface) {
        this.language = language;
    }
    public Verifier(chaine: string): string {
        let miroir:string = chaine.split('').reverse().join('');

        let sortie: string = "Bonjour" + os.EOL + miroir + os.EOL;

        if (chaine === miroir) {
            sortie += this.language.Congratulation() + os.EOL;
        }
        return sortie + "Au Revoir";
    }
}