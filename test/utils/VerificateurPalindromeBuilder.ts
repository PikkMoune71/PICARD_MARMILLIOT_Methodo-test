import {LanguageInteface} from "../../src/languages/Language.interface";
import {FrenchLanguage} from "../../src/languages/FrenchLanguage";
import {VerificateurPalindrome} from "../../src/VerificateurPalindrome";

export class VerificateurPalindromeBuilder {
    private language : LanguageInteface = new FrenchLanguage();

    public static Default() {
        return new VerificateurPalindromeBuilder().Build();
    }

    public Build() : VerificateurPalindrome {
        return new VerificateurPalindrome(this.language);
    }

    public hadLanguage(language: LanguageInteface): VerificateurPalindromeBuilder {
        this.language = language;
        return this;
    }
}