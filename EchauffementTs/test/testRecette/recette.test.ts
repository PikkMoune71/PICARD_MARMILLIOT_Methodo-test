
import {VerificateurPalindromeBuilder} from "../utilities/verificateurPalindromeBuilder";
import {MomentDeLaJournee} from "../../src/domaine/momentDeLaJournee";
import {LangueFrancaise} from "../../src/domaine/langueFrancaise";
import {LangueAnglaise} from "../../src/domaine/langueAnglaise";

describe("Test de recettes", () => {
    test("Recettes", () => {
        let verificateurAnglaisSoir = new VerificateurPalindromeBuilder()
            .AyantPourMomentDeLaJournee(MomentDeLaJournee.Soiree)
            .AyantPourLangue(new LangueAnglaise())
            .Build();

        let verificateurFrancaisMatin = new VerificateurPalindromeBuilder()
            .AyantPourMomentDeLaJournee(MomentDeLaJournee.Matin)
            .AyantPourLangue(new LangueFrancaise())
            .Build()

        let verificateurInconnueNuit = new VerificateurPalindromeBuilder()
            .AyantPourMomentDeLaJournee(MomentDeLaJournee.Nuit)
            .AyantPourLangue(new LangueFrancaise())
            .Build()

        // Un palindrome, en anglais, le soir
        console.log(verificateurAnglaisSoir.Verifier("radar"));

        // Un non-palindrome, en français, le matin
        console.log(verificateurFrancaisMatin.Verifier("java"));

        // Un palindrome, en langue inconnue, le soir
        console.log(verificateurInconnueNuit.Verifier("bob"));
    });
})