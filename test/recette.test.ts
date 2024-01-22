import {VerificateurPalindromeBuilder} from "./utils/VerificateurPalindromeBuilder";
import {MomentOfTheDay} from "../src/domaine/moment/MomentOfTheDay";
import {EnglishLanguage} from "../src/domaine/languages/EnglishLanguage";
import {FrenchLanguage} from "../src/domaine/languages/FrenchLanguage";
import {LanguageSystemAdapter} from "../src/tech/adapter/LanguageSystemAdapter";
import os from "os";

describe("Test de recettes", () => {
    test("Recettes", () => {

        /*
        Palindrome, anglais, soir.
         */
        let verificateurAnglaisSoir = new VerificateurPalindromeBuilder()
            .HadForMoment(MomentOfTheDay.Evening)
            .hadLanguage(new EnglishLanguage())
            .Build();

        /*
        Non-palindrome, français, matin.
         */
        let verificateurFrancaisMatin = new VerificateurPalindromeBuilder()
            .HadForMoment(MomentOfTheDay.Morning)
            .hadLanguage(new FrenchLanguage())
            .Build()

        /*
        Palindrome, inconnue, nuit.
         */
        let languageSystemAdapter = LanguageSystemAdapter.getInstance();

        let verificateurInconnueNuit = new VerificateurPalindromeBuilder()
            .HadForMoment(MomentOfTheDay.Night)
            .hadLanguage(languageSystemAdapter.getLanguageByCode("de"))
            .Build()

        // Un palindrome, en anglais, le soir
        console.log(verificateurAnglaisSoir.Verifier("radar"));

        // Un non-palindrome, en français, le matin
        console.log(verificateurFrancaisMatin.Verifier("java"));

        // Un palindrome, en langue inconnue, le soir
        console.log(verificateurInconnueNuit.Verifier("bob"));

        // Un palindrome, en anglais, le soir
        let result1 = "Good Evening" + os.EOL + "radar" + os.EOL + "Well said !" + os.EOL + "Good Bye" + os.EOL;
        expect(verificateurAnglaisSoir.Verifier("radar")).toEqual(result1);

        // Un non-palindrome, en français, le matin
        let result2 = "Bonjour" + os.EOL + "avaj" + os.EOL + "Bonne Journée" + os.EOL;
        expect(verificateurFrancaisMatin.Verifier("java")).toEqual(result2);

        // Un palindrome, en langue inconnue, le soir
        let result3 = "Good Night" + os.EOL + "bob" + os.EOL + "Well said !" + os.EOL + "Good Bye" + os.EOL;
        expect(verificateurInconnueNuit.Verifier("bob")).toEqual(result3);

    });
})