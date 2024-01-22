import * as os from "os";

export class VerificateurPalindrome {
    public static Verifier(chaine: string): string {
        let miroir:string = chaine.split('').reverse().join('');

        let sortie: string = "Bonjour" + os.EOL + miroir + os.EOL;

        if (chaine === miroir) {
            sortie += "Bien dit !" + os.EOL;
        }
        return sortie + "Au Revoir";
    }
}