import {VerificateurPalindrome} from "../../src/VerificateurPalindrome";
import {LangueInterface} from "../../src/langue.interface";
import {LangueStub} from "./langueStub";
import {MomentDeLaJournee} from "../../src/momentDeLaJournee";

export class VerificateurPalindromeBuilder {
    private _langue: LangueInterface = new LangueStub();

    public static Default() {
        return new VerificateurPalindromeBuilder().Build();
    }

    public Build(): VerificateurPalindrome {
        return new VerificateurPalindrome(this._langue);
    }

    public AyantPourLangue(langue: LangueInterface): VerificateurPalindromeBuilder {
        this._langue = langue;
        return this;
    }

    public AyantPourMomentDeLaJournee(moment: MomentDeLaJournee) {
        return this;
    }
}