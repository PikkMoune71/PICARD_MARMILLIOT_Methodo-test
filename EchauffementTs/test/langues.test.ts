import {LangueFrancaise} from "../src/domaine/langueFrancaise";
import {Expressions} from "../src/domaine/Expressions";
import {LangueAnglaise} from "../src/domaine/langueAnglaise";
import {LangueInterface} from "../src/domaine/langue.interface";
import {MomentDeLaJournee} from "../src/domaine/momentDeLaJournee";

describe("Langues", () => {
    test.each([
        [new LangueFrancaise(), MomentDeLaJournee.Inconnu, Expressions.BONJOUR],
        [new LangueFrancaise(), MomentDeLaJournee.Matin, Expressions.BONJOUR],
        [new LangueFrancaise(), MomentDeLaJournee.ApresMidi, Expressions.BONJOUR],
        [new LangueFrancaise(), MomentDeLaJournee.Soiree, Expressions.BONSOIR],
        [new LangueFrancaise(), MomentDeLaJournee.Nuit, Expressions.BONSOIR],
        [new LangueAnglaise(), MomentDeLaJournee.Inconnu, Expressions.HELLO],
        [new LangueAnglaise(), MomentDeLaJournee.Matin, Expressions.GOOD_MORNING],
        [new LangueAnglaise(), MomentDeLaJournee.ApresMidi, Expressions.GOOD_AFTERNOON],
        [new LangueAnglaise(), MomentDeLaJournee.Soiree, Expressions.GOOD_EVENING],
        [new LangueAnglaise(), MomentDeLaJournee.Nuit, Expressions.GOOD_NIGHT]
    ])("En %s on salue le %s par '%s'",
        (langue: LangueInterface, moment: MomentDeLaJournee, attendu: string) => {
        expect(langue.Saluer(moment)).toBe(attendu)
    })

    test.each([
        [new LangueFrancaise(), MomentDeLaJournee.Inconnu, Expressions.AU_REVOIR],
        [new LangueFrancaise(), MomentDeLaJournee.Matin, Expressions.BONNE_JOURNEE],
        [new LangueFrancaise(), MomentDeLaJournee.ApresMidi, Expressions.BON_APRESMIDI],
        [new LangueFrancaise(), MomentDeLaJournee.Soiree, Expressions.BONNE_SOIREE],
        [new LangueFrancaise(), MomentDeLaJournee.Nuit, Expressions.BONNE_NUIT],
        [new LangueAnglaise(), MomentDeLaJournee.Inconnu, Expressions.GOODBYE],
        [new LangueAnglaise(), MomentDeLaJournee.Matin, Expressions.GOODBYE],
        [new LangueAnglaise(), MomentDeLaJournee.ApresMidi, Expressions.GOODBYE],
        [new LangueAnglaise(), MomentDeLaJournee.Soiree, Expressions.GOODBYE],
        [new LangueAnglaise(), MomentDeLaJournee.Nuit, Expressions.GOODBYE]
    ])("En %s on acquitte le %s par '%s'",
        (langue: LangueInterface, moment: MomentDeLaJournee, attendu: string) => {
            expect(langue.Acquitter(moment)).toBe(attendu)
        })
});