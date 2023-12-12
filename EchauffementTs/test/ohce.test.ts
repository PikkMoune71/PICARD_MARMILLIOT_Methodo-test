import * as os from "os";
import {Expressions} from "../src/Expressions";
import {LangueFrancaise} from "../src/langueFrancaise";
import {VerificateurPalindromeBuilder} from "./utilities/verificateurPalindromeBuilder";
import {LangueAnglaise} from "../src/langueAnglaise";
import {LangueInterface} from "../src/langue.interface";
import {LangueFake} from "./utilities/langueFake";
import {MomentDeLaJournee} from "../src/momentDeLaJournee";
import './utilities/stringMatchers.d.ts';
import './utilities/stringMatchers';

const palindrome = 'radar';
const nonPalindromes = ['test', 'ynov']
const momentsDeLaJournee = [
    MomentDeLaJournee.Inconnu,
    MomentDeLaJournee.Matin,
    MomentDeLaJournee.ApresMidi,
    MomentDeLaJournee.Soiree,
    MomentDeLaJournee.Nuit
];

describe("test works", () => {
    test.each([...nonPalindromes])(
        "QUAND on saisit un non-palindrome %s " +
        "ALORS elle est renvoyée en miroir",
        (chaine: string) => {
            let resultat = VerificateurPalindromeBuilder.Default()
                .Verifier(chaine);

            let attendu = chaine.split('').reverse().join('');
            expect(resultat).toContain(attendu);
        });

    test.each([
        [new LangueFrancaise(), Expressions.BIEN_DIT],
        [new LangueAnglaise(), Expressions.WELL_SAID],
    ])("ETANT DONNE un utilisateur parlant la %s " +
        "QUAND on saisit un palindrome " +
        "ALORS celui-ci est renvoyé " +
        "ET '%s' est envoyé ensuite",
        (langue: LangueInterface, attendu: string) => {
            let verificateur = new VerificateurPalindromeBuilder()
                .AyantPourLangue(langue)
                .Build();

            let resultat = verificateur.Verifier(palindrome);

            expect(resultat).toContain(palindrome + os.EOL + attendu);
        });

    function casesChainesEtMoments(){
        let chaines = [...nonPalindromes, palindrome];
        let cases: [MomentDeLaJournee, string][]  = [];

        for (let momentDeLaJournee of momentsDeLaJournee)
            for(let chaine of chaines)
                cases.push([momentDeLaJournee, chaine])

        return cases;
    }

    test.each(casesChainesEtMoments())(
        'ETANT DONNE un utilisateur parlant une langue ' +
        'ET que nous sommes le %s ' +
        'QUAND on saisit une chaine %s ' +
        'ALORS les salutations de cette langue à ce moment de la journée sont envoyées avant toute réponse',
        (momentDeLaJournee: MomentDeLaJournee, chaine: string) => {
            let langueFake = new LangueFake();

            let verificateur =
                new VerificateurPalindromeBuilder()
                    .AyantPourLangue(langueFake)
                    .AyantPourMomentDeLaJournee(momentDeLaJournee)
                    .Build();

            let resultat = verificateur.Verifier(chaine);

            let attendu = langueFake.Saluer(momentDeLaJournee);
            // @ts-ignore
            expect(resultat).ayantPourPremiereLigne(attendu)
        });

    test.each(casesChainesEtMoments())(
        'ETANT DONNE un utilisateur parlant une langue ' +
        'ET que nous sommes le %s ' +
        'QUAND on saisit une chaine %s ' +
        'ALORS l aquitance de cette langue à ce moment de la journée sont envoyé en dernier',
        (momentDeLaJournee: MomentDeLaJournee, chaine: string) => {
            let langueFake = new LangueFake();

            let verificateur =
                new VerificateurPalindromeBuilder()
                    .AyantPourLangue(langueFake)
                    .AyantPourMomentDeLaJournee(momentDeLaJournee)
                    .Build();

            let resultat = verificateur.Verifier(chaine);

            let lignes = resultat.split(os.EOL);
            let derniereLigne = lignes[lignes.length - 1];
            let attendu = langueFake.Acquitter(momentDeLaJournee);
            //@ts-ignore
            expect(derniereLigne).ayantPourDerniereLigne(attendu)
        });
    
});