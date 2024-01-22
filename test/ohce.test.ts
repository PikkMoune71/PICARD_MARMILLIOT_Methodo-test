import { VerificateurPalindrome } from "../src/VerificateurPalindrome";

describe("test works", () => {
    test.each([
        ["test"],
        ["abcde"]
    ])("QUAND on saisit une chaine ALORS elle est renvoyée en miroir", (chaine: string) => {
        let resultat: string = VerificateurPalindrome.Verifier(chaine);
        let attendu: string = chaine.split('').reverse().join("");
        expect(resultat).toEqual(attendu);
    });
});