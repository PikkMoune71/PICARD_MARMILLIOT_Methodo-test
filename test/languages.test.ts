import {FrenchLanguage} from "../src/languages/FrenchLanguage";
import {Expressions} from "../src/expressions";
import {EnglishLanguage} from "../src/languages/EnglishLanguage";
import {LanguageInteface} from "../src/languages/Language.interface";


describe("Langues", () => {
    test.each([
        [new FrenchLanguage(), Expressions.BIEN_DIT],
        [new EnglishLanguage(), Expressions.WELL_SAID],
    ])("En %s on salue par '%s'",
        (language: LanguageInteface, expected: string) => {
            expect(language.Congratulation()).toBe(expected)
        });


    test.each([
        [new FrenchLanguage(), Expressions.BONJOUR],
        [new EnglishLanguage(), Expressions.HELLO],
    ])("En %s on salue par '%s'",
        (language: LanguageInteface, expected: string) => {
            expect(language.SayHello()).toBe(expected)
        });

    test.each([
        [new FrenchLanguage(), Expressions.AU_REVOIR],
        [new EnglishLanguage(), Expressions.GOODBYE],
    ])("En %s on salue par '%s'",
        (language: LanguageInteface, expected: string) => {
            expect(language.SayGoodBye()).toBe(expected)
        })
    
});