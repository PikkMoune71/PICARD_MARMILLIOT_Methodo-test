import {VerificateurPalindrome} from "../../src/domaine/VerificateurPalindrome";
import {VerificateurPalindromeBuilder} from "../utilities/verificateurPalindromeBuilder";
import {MomentDeLaJournee} from "../../src/domaine/momentDeLaJournee";
import {LangueFrancaise} from "../../src/domaine/langueFrancaise";
import {LangueAnglaise} from "../../src/domaine/langueAnglaise";
import {newExpression} from "@babel/types";
import {LangueFake} from "../utilities/langueFake";

/*
Rédigez un test de recette avec le scénario suivant
 */
describe("Test de recettes", () => {
    test("Recettes", () => {

        /*
        Palindrome, anglais, soir.
         */
        let verificateurAnglaisSoir = new VerificateurPalindromeBuilder()
            .AyantPourMomentDeLaJournee(MomentDeLaJournee.Soiree)
            .AyantPourLangue(new LangueAnglaise())
            .Build();

        /*
        Non-palindrome, français, matin.
         */
        let verificateurFrancaisMatin = new VerificateurPalindromeBuilder()
            .AyantPourMomentDeLaJournee(MomentDeLaJournee.Matin)
            .AyantPourLangue(new LangueFrancaise())
            .Build()

        /*
        Palindrome, inconnue, nuit.
         */
        let verificateurInconnueNuit = new VerificateurPalindromeBuilder()
            .AyantPourMomentDeLaJournee(MomentDeLaJournee.Nuit)
            .AyantPourLangue(new LangueFake())
            .Build()

        // Un palindrome, en anglais, le soir
        console.log(verificateurAnglaisSoir.Verifier("radar"));

        // Un non-palindrome, en français, le matin
        console.log(verificateurFrancaisMatin.Verifier("java"));

        // Un palindrome, en langue inconnue, le soir
        console.log(verificateurInconnueNuit.Verifier("bob"));
    });
})