import {LanguageInteface} from "../../src/domaine/languages/Language.interface";
import {FrenchLanguage} from "../../src/domaine/languages/FrenchLanguage";
import {VerificateurPalindrome} from "../../src/domaine/VerificateurPalindrome";
import {MomentOfTheDay} from "../../src/domaine/moment/MomentOfTheDay";

export class VerificateurPalindromeBuilder {
    private language : LanguageInteface = new FrenchLanguage();
    private moment : MomentOfTheDay = MomentOfTheDay.Unknow;

    public static Default() {
        return new VerificateurPalindromeBuilder().Build();
    }

    public Build() : VerificateurPalindrome {
        return new VerificateurPalindrome(this.language, this.moment);
    }

    public hadLanguage(language: LanguageInteface): VerificateurPalindromeBuilder {
        this.language = language;
        return this;
    }

    public HadForMoment(moment: MomentOfTheDay): VerificateurPalindromeBuilder {
        this.moment = moment;
        return this;
    }
}