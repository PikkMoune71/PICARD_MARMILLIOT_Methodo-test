import { VerificateurPalindrome } from "../src/VerificateurPalindrome";
import * as os from "os";

import {Expressions} from "../src/Expressions";

const palindrome = 'radar';
const nonPalindromes = ['test', 'ynov']

describe("test works", () => {
    test.each([...nonPalindromes])("QUAND on saisit un non-palindrome %s " +
        "ALORS elle est renvoyée en miroir",
        (chaine : string) => {
            let resultat = VerificateurPalindrome.Verifier(chaine);

            let attendu = chaine.split('').reverse().join('');
            expect(resultat).toContain(attendu);
        });

    test("QUAND on saisit un palindrome " +
        "ALORS celui-ci est renvoyé " +
        "ET 'Bien dit !' est envoyé ensuite", () =>{
        let resultat:string = VerificateurPalindrome.Verifier(palindrome);

        expect(resultat).toContain(palindrome + os.EOL + Expressions.BIEN_DIT);
    });

    test.each([...nonPalindromes, palindrome])('QUAND on saisit une chaîne %s ' +
        'ALORS "Bonjour" est envoyé avant toute réponse',
        (chaine: string) => {
            let resultat = VerificateurPalindrome.Verifier(chaine);

            let premiereLigne = resultat.split(os.EOL)[0];
            expect(premiereLigne).toEqual(Expressions.BONJOUR)
        });

    test.each([...nonPalindromes, palindrome])('QUAND on saisit une chaîne %s ' +
        'ALORS "Au revoir" est envoyé en dernier.',
        (chaine: string) => {
            let resultat = VerificateurPalindrome.Verifier(chaine);

            let lignes = resultat.split(os.EOL);
            let derniereLigne = lignes[lignes.length - 1];
            expect(derniereLigne).toEqual(Expressions.AU_REVOIR)
        });
});