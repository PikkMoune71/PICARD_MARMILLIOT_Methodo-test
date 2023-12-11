import * as os from "os";
import {Expressions} from "./Expressions";

export class VerificateurPalindrome {
    public static Verifier(chaine: string): string {
        let miroir = chaine.split('').reverse().join('');

        let sortie = Expressions.BONJOUR + os.EOL + miroir + os.EOL;

        if(miroir == chaine)
            sortie += Expressions.BIEN_DIT + os.EOL;

        return sortie + Expressions.AU_REVOIR;
    }
}