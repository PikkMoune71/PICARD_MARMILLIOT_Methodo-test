import os from "os";
import {Expressions} from "../src/expressions";
import {VerificateurPalindromeBuilder} from "./utils/VerificateurPalindromeBuilder";
import {FrenchLanguage} from "../src/languages/FrenchLanguage";
import {EnglishLanguage} from "../src/languages/EnglishLanguage";
import {LanguageInteface} from "../src/languages/Language.interface";
import {FakeLanguage} from "./utils/FakeLanguage";

const palindrome = 'kayak';
const noPalindromes = ['jean', 'Antoine']

describe("test works", () => {
    test.each([[...noPalindromes]])("QUAND on saisit un non palindromes ALORS elle est renvoyée en miroir", (chaine: string) => {
        let resultat: string = VerificateurPalindromeBuilder.Default().Verifier(chaine);
        let attendu: string = chaine.split('').reverse().join("");
        expect(resultat).toContain(attendu);
    });

    test.each([
        [new FrenchLanguage(), Expressions.BIEN_DIT],
        [new EnglishLanguage(), Expressions.WELL_SAID],
    ])("ETANT DONNE un utilisateur parlant la %s " +
        "QUAND on saisit un palindrome " +
        "ALORS celui-ci est renvoyé " +
        "ET '%s' est envoyé ensuite",
        (language: LanguageInteface, expected: string) => {
        let verificateur = new VerificateurPalindromeBuilder().hadLanguage(language).Build();

        let result = verificateur.Verifier(palindrome);

        expect(result).toContain(palindrome + os.EOL + expected);
    });

    test.each([...noPalindromes, palindrome])( 'ETANT DONNE un utilisateur parlant une langue fake ' +
        'QUAND on saisit une chaîne %s ALORS les salutations de cette langue sont envoyées avant toute réponse',
        (chaine: string) => {
            let fakeLanguage = new FakeLanguage();
            let instanceBuilder = new VerificateurPalindromeBuilder();
            let result = instanceBuilder.hadLanguage(fakeLanguage).Build().Verifier(chaine);

            let startString = result.split(os.EOL)[0];
            expect(startString).toEqual(fakeLanguage.SayHello());
        });


    test.each([...noPalindromes, palindrome])('QUAND on saisit une chaîne %s ' +
        'ALORS "Au revoir" est envoyé en dernier.',
        (chaine: string) => {
            let result = VerificateurPalindromeBuilder.Default().Verifier(chaine);

            let lines = result.split(os.EOL);
            let lastLines = lines[lines.length - 1];
            expect(lastLines).toEqual("Au Revoir");
        });

});