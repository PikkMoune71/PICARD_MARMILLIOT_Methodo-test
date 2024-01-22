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
        })
});