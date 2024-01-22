import {LanguageInteface} from "../../domaine/languages/Language.interface";
import {FrenchLanguage} from "../../domaine/languages/FrenchLanguage";
import {EnglishLanguage} from "../../domaine/languages/EnglishLanguage";



export class LanguageSystemAdapter{
    private readonly language: LanguageInteface;
    private static instance: LanguageSystemAdapter;

    private constructor() {

        const code = process.env.LANG || 'en-US';
        this.language = this.getLanguageByCode(code);
    }

    public static getInstance(): LanguageSystemAdapter {
        if (!this.instance) {
            this.instance = new LanguageSystemAdapter();
        }
        return this.instance;
    }

    public getLanguage(): LanguageInteface {
        return this.language;
    }

    public getLanguageByCode(code: string): LanguageInteface {
        if (code.startsWith('fr')) {
            return new FrenchLanguage();
        } else if (code.startsWith('en')) {
            return new EnglishLanguage();
        } else {
            return new EnglishLanguage();
        }
    }
}