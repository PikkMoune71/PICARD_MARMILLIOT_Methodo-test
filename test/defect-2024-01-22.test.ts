import * as os from "os";
import {VerificateurPalindromeBuilder} from "./utils/VerificateurPalindromeBuilder";
import {FakeLanguage} from "./utils/FakeLanguage";

describe("Debug du 22/01/2024", () => {
    test.each([['jean', 'kayak']])("Pas de saut de ligne terminal a la fin ",
        (chaine: string) => {
            let result = new VerificateurPalindromeBuilder().hadLanguage(new FakeLanguage()).Build().Verifier(chaine);
            expect(result.endsWith(os.EOL)).toBeTruthy();
        });
})