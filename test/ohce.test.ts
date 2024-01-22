import os from "os";
import {Expressions} from "../src/expressions";
import {VerificateurPalindromeBuilder} from "./utils/VerificateurPalindromeBuilder";
import {FrenchLanguage} from "../src/languages/FrenchLanguage";
import {EnglishLanguage} from "../src/languages/EnglishLanguage";
import {LanguageInteface} from "../src/languages/Language.interface";
import {FakeLanguage} from "./utils/FakeLanguage";
import {MomentOfTheDay} from "../src/moment/MomentOfTheDay";
import './utils/stringMatchers.d.ts';
import './utils/stringMatchers';

const palindrome = 'kayak';
const noPalindromes = ['jean', 'Antoine']
const allMomentsOfTheDay = [
    MomentOfTheDay.Unknow,
    MomentOfTheDay.Morning,
    MomentOfTheDay.Afternoon,
    MomentOfTheDay.Evening,
    MomentOfTheDay.Night
];

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

    function testHelloWithMoment(){
        let parameter: any[] = [];
        [...noPalindromes, palindrome].forEach((chaine: string) => {
            allMomentsOfTheDay.forEach((moment: MomentOfTheDay) => {
                parameter.push([chaine, moment]);
                parameter.push([chaine, moment]);
            });
        });
        return parameter;
    }

    test.each(testHelloWithMoment())( 'ETANT DONNE un utilisateur parlant une langue fake ' +
        'QUAND on saisit une chaîne %s ALORS les salutations pour le moment %s de cette langue sont envoyées avant toute réponse',
        (chaine: string, moment: MomentOfTheDay) => {
            let fakeLanguage = new FakeLanguage();
            let instanceBuilder = new VerificateurPalindromeBuilder();
            let result = instanceBuilder.hadLanguage(fakeLanguage).HadForMoment(moment).Build().Verifier(chaine);

            // @ts-ignore
            expect(result).withFirstLine(fakeLanguage.SayHello(moment));
        });


    function testGoodByeInDifferenteLanguage() {
        let parameter: any[] = [];
        [...noPalindromes, palindrome].forEach((chaine: string) => {
            parameter.push([new FrenchLanguage(), chaine, Expressions.AU_REVOIR]);
            parameter.push([new EnglishLanguage(), chaine, Expressions.GOODBYE]);
        });
        return parameter;
    }

    test.each(testGoodByeInDifferenteLanguage())(
        'ETANT DONNE un utilisateur parlant la %s ' +
        'QUAND on saisit une chaîne %s ' +
        'ALORS "%s" est envoyé en dernier.',
        (language: LanguageInteface, chaine: string, expected: string) => {
            let verificateur = new VerificateurPalindromeBuilder().hadLanguage(language).Build();

            let result = verificateur.Verifier(chaine);
            // @ts-ignore
            expect(result).withLastLine(expected);
        });

});