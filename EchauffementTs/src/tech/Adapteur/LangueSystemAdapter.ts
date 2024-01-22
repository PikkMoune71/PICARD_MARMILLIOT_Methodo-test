import {LangueInterface} from "../../domaine/langue.interface";
import {LangueFrancaise} from "../../domaine/langueFrancaise";
import {MomentDeLaJournee} from "../../domaine/momentDeLaJournee";

export class LangueSystemAdapter implements LangueInterface{
    private readonly _langue: LangueInterface;
    constructor() {
        const code = process.env.LANG || 'en-US';
        this._langue = new LangueFrancaise();

    }
    Feliciter() {
        return this._langue.Feliciter();
    }
    Saluer(moment: MomentDeLaJournee) {
        return this._langue.Saluer(moment);
    }
    Acquitter(moment: MomentDeLaJournee) {
        return this._langue.Acquitter(moment);
    }
}