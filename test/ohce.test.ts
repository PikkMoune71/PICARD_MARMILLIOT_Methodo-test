import { VerificateurPalindrome } from "../src/VerificateurPalindrome";
import os from "os";

const palindrome = 'kayak';
const noPalindromes = ['jean', 'Antoine']

describe("test works", () => {
    test.each([[...noPalindromes]])("QUAND on saisit une chaine ALORS elle est renvoyée en miroir", (chaine: string) => {
        let resultat: string = VerificateurPalindrome.Verifier(chaine);
        let attendu: string = chaine.split('').reverse().join("");
        expect(resultat).toContain(attendu);
    });

    test("QUAND on saisit un palindrome " +
        "ALORS celui-ci est renvoyé " +
        "ET 'Bien dit !' est envoyé ensuite", () =>{

        let resultat = VerificateurPalindrome.Verifier(palindrome);

        expect(resultat).toContain(palindrome + os.EOL + "Bien dit !");
    });

    test.each([...noPalindromes, palindrome])('QUAND on saisit une chaîne %s ' +
        'ALORS "Bonjour" est envoyé avant toute réponse',
        (chaine: string) => {
            let result = VerificateurPalindrome.Verifier(chaine);

            let startString = result.split(os.EOL)[0];
            expect(startString).toEqual("Bonjour")
        });


    test.each([...noPalindromes, palindrome])('QUAND on saisit une chaîne %s ' +
        'ALORS "Au revoir" est envoyé en dernier.',
        (chaine: string) => {
            let result = VerificateurPalindrome.Verifier(chaine);

            let lines = result.split(os.EOL);
            let lastLines = lines[lines.length - 1];
            expect(lastLines).toEqual("Au Revoir");
        });

});