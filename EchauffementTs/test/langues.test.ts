import {LangueFrancaise} from "../src/langueFrancaise";
import {Expressions} from "../src/Expressions";
import {LangueAnglaise} from "../src/langueAnglaise";
import {LangueInterface} from "../src/langue.interface";
import {MomentDeLaJournee} from "../src/momentDeLaJournee";

describe("Langues", () => {
    test.each([
        [new LangueFrancaise(), Expressions.BONJOUR],
        [new LangueAnglaise(), Expressions.HELLO],
    ])("En %s on salue le matin par '%s'",
        (langue: LangueInterface, attendu: string) => {
            expect(langue.Saluer(MomentDeLaJournee.Matin)).toBe(attendu)
        })
});