import {LanguageInteface} from "../../src/languages/Language.interface";
import {FrenchLanguage} from "../../src/languages/FrenchLanguage";
import {VerificateurPalindrome} from "../../src/VerificateurPalindrome";
import {MomentOfTheDay} from "../../src/moment/MomentOfTheDay";

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