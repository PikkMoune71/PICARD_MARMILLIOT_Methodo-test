import * as os from "os";
import {Expressions} from "../src/Expressions";
import {LangueFrancaise} from "../src/langueFrancaise";
import {VerificateurPalindromeBuilder} from "./utilities/verificateurPalindromeBuilder";
import {LangueAnglaise} from "../src/langueAnglaise";
import {LangueInterface} from "../src/langue.interface";
import {LangueFake} from "./utilities/langueFake";
import {MomentDeLaJournee} from "../src/momentDeLaJournee";

const palindrome = 'radar';
const nonPalindromes = ['test', 'ynov']

describe("test works", () => {
    test.each([...nonPalindromes])(
        "QUAND on saisit un non-palindrome %s " +
        "ALORS elle est renvoyée en miroir",
        (chaine: string) => {
            let resultat = VerificateurPalindromeBuilder.Default().Verifier(chaine);

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

    test.each([...nonPalindromes, palindrome])(
        'ETANT DONNE un utilisateur parlant %s ' +
        'ET que nous sommes le matin ' +
        'QUAND on saisit une chaine %s ' +
        'ALORS les salutations de cette langue à ce moment de la journée sont envoyées avant toute réponse',
        (chaine: string) => {
            let langueFake = new LangueFake();
            let moment = MomentDeLaJournee.Matin;

            let verificateur =
                new VerificateurPalindromeBuilder()
                    .AyantPourLangue(langueFake)
                    .AyantPourMomentDeLaJournee(moment)
                    .Build();

            let resultat = verificateur.Verifier(chaine);

            let premiereLigne = resultat.split(os.EOL)[0];
            let attendu = langueFake.Saluer(moment);
            expect(premiereLigne).toEqual(attendu)
        });

    test.each([...nonPalindromes, palindrome])(
        'ETANT DONNE un utilisateur parlant francais ' +
        'QUAND on saisit une chaine %s ' +
        'ALORS "Au revoir" est envoyé en dernier.',
        (chaine: string) => {
            const langue = new LangueFrancaise();
            let verificateur =
                new VerificateurPalindromeBuilder()
                    .AyantPourLangue(langue)
                    .Build();

            let resultat = verificateur.Verifier(chaine);

            let lignes = resultat.split(os.EOL);
            let derniereLigne = lignes[lignes.length - 1];
            expect(derniereLigne).toEqual(Expressions.AU_REVOIR)
        });

    test.each([...nonPalindromes, palindrome])(
        'ETANT DONNE un utilisateur parlant anglais ' +
        'QUAND on saisit une chaine %s ' +
        'ALORS "Goodbye" est envoyé en dernier.',
        (chaine: string) => {
            const langue = new LangueAnglaise();
            let verificateur =
                new VerificateurPalindromeBuilder()
                    .AyantPourLangue(langue)
                    .Build();

            let resultat = verificateur.Verifier(chaine);

            let lignes = resultat.split(os.EOL);
            let derniereLigne = lignes[lignes.length - 1];
            expect(derniereLigne).toEqual(Expressions.GOODBYE)
        });
});