import { VerificateurPalindrome } from "../src/VerificateurPalindrome";
import os from "os";
describe("test works", () => {
    test.each([
        ["test"],
        ["abcde"]
    ])("QUAND on saisit une chaine ALORS elle est renvoyée en miroir", (chaine: string) => {
        let resultat: string = VerificateurPalindrome.Verifier(chaine);
        let attendu: string = chaine.split('').reverse().join("");
        expect(resultat).toEqual(attendu);
    });

    test("QUAND on saisit un palindrome " +
        "ALORS celui-ci est renvoyé " +
        "ET 'Bien dit !' est envoyé ensuite", () =>{
        const palindrome = "radar";

        let resultat = VerificateurPalindrome.Verifier(palindrome);

        expect(resultat).toEqual(palindrome + os.EOL + "Bien dit !");
    });
});