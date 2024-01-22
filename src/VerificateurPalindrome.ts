import * as os from "os";

export class VerificateurPalindrome {
    public static Verifier(chaine: string): string {
        let miroir:string = chaine.split('').reverse().join('');

        if (chaine === miroir) {
            return miroir + os.EOL + "Bien dit !";
        }
        return miroir;
    }
}