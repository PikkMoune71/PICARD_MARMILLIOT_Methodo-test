import os from "os";
import {Expressions} from "../src/domaine/expressions";
import {VerificateurPalindromeBuilder} from "./utils/VerificateurPalindromeBuilder";
import {FrenchLanguage} from "../src/domaine/languages/FrenchLanguage";
import {EnglishLanguage} from "../src/domaine/languages/EnglishLanguage";
import {LanguageInteface} from "../src/domaine/languages/Language.interface";
import {FakeLanguage} from "./utils/FakeLanguage";
import {MomentOfTheDay} from "../src/domaine/moment/MomentOfTheDay";
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
            let result = instanceBuilder.HadForMoment(moment).Build().Verifier(chaine);

            // @ts-ignore
            expect(result).withFirstLine(fakeLanguage.SayHello(moment));
        });


    function testGoodByeInDifferenteLanguage() {
        let parameter: any[] = [];
        [...noPalindromes, palindrome].forEach((chaine: string) => {

            parameter.push([new FrenchLanguage(), chaine, MomentOfTheDay.Unknow, Expressions.AU_REVOIR]);
            parameter.push([new FrenchLanguage(), chaine, MomentOfTheDay.Morning, Expressions.BONNE_JOURNEE]);
            parameter.push([new FrenchLanguage(), chaine, MomentOfTheDay.Afternoon, Expressions.BON_APRESMIDI]);
            parameter.push([new FrenchLanguage(), chaine, MomentOfTheDay.Evening, Expressions.BONNE_SOIREE]);
            parameter.push([new FrenchLanguage(), chaine, MomentOfTheDay.Night, Expressions.BONNE_NUIT]);

            parameter.push([new EnglishLanguage(), chaine, MomentOfTheDay.Unknow, Expressions.GOODBYE]);
            parameter.push([new EnglishLanguage(), chaine, MomentOfTheDay.Morning, Expressions.GOODBYE]);
            parameter.push([new EnglishLanguage(), chaine, MomentOfTheDay.Afternoon, Expressions.GOODBYE]);
            parameter.push([new EnglishLanguage(), chaine, MomentOfTheDay.Evening, Expressions.GOODBYE]);
            parameter.push([new EnglishLanguage(), chaine, MomentOfTheDay.Night, Expressions.GOODBYE]);

        });
        return parameter;
    }

    test.each(testGoodByeInDifferenteLanguage())(
        'ETANT DONNE un utilisateur parlant la %s ' +
        'QUAND on saisit une chaîne %s au moment de la journee %s ' +
        'ALORS "%s" est envoyé en dernier.',
        (language: LanguageInteface, chaine: string, moment: MomentOfTheDay, expected: string) => {
            let verificateur = new VerificateurPalindromeBuilder().hadLanguage(language).HadForMoment(moment).Build();

            let result = verificateur.Verifier(chaine);
            // @ts-ignore
            expect(result).withLastLine(expected);
        });

});