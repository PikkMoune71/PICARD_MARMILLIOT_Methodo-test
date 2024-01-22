import {FrenchLanguage} from "../src/languages/FrenchLanguage";
import {Expressions} from "../src/expressions";
import {EnglishLanguage} from "../src/languages/EnglishLanguage";
import {LanguageInteface} from "../src/languages/Language.interface";
import {MomentOfTheDay} from "../src/moment/MomentOfTheDay";


describe("Langues", () => {
    test.each([
        [new FrenchLanguage(), Expressions.BIEN_DIT],
        [new EnglishLanguage(), Expressions.WELL_SAID],
    ])("En %s on dit bien dits par '%s'",
        (language: LanguageInteface, expected: string) => {
            expect(language.Congratulation()).toBe(expected)
        });


    test.each([
        [new FrenchLanguage(), MomentOfTheDay.Unknow, Expressions.BONJOUR],
        [new FrenchLanguage(), MomentOfTheDay.Morning, Expressions.BONJOUR],
        [new FrenchLanguage(), MomentOfTheDay.Afternoon, Expressions.BONJOUR],
        [new FrenchLanguage(), MomentOfTheDay.Evening, Expressions.BONSOIR],
        [new FrenchLanguage(), MomentOfTheDay.Night, Expressions.BONSOIR],
        [new EnglishLanguage(), MomentOfTheDay.Unknow, Expressions.HELLO],
        [new EnglishLanguage(), MomentOfTheDay.Morning, Expressions.GOOD_MORNING],
        [new EnglishLanguage(), MomentOfTheDay.Afternoon, Expressions.GOOD_AFTERNOON],
        [new EnglishLanguage(), MomentOfTheDay.Evening, Expressions.GOOD_EVENING],
        [new EnglishLanguage(), MomentOfTheDay.Night, Expressions.GOOD_NIGHT],
    ])("En %s on salue le %s par '%s'",
        (language: LanguageInteface, moment: MomentOfTheDay, expected: string) => {
            expect(language.SayHello(moment)).toBe(expected)
        });

    test.each([
        [new FrenchLanguage(), Expressions.AU_REVOIR],
        [new EnglishLanguage(), Expressions.GOODBYE],
    ])("En %s on dis au revoir par '%s'",
        (language: LanguageInteface, expected: string) => {
            expect(language.SayGoodBye()).toBe(expected)
        })
    
});