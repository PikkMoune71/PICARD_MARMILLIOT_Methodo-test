import {LangueInterface} from "../domaine/langue.interface";
import {LangueFrancaise} from "../domaine/langueFrancaise";
import {LangueAnglaise} from "../domaine/langueAnglaise";

export class SystemLanguage {
    private static instance: SystemLanguage;
    private language: string;

    private constructor() {
        // Obtient la langue du système à partir de l'environnement
        this.language = process.env.LANG || 'en-US'; // Valeur par défaut si la langue n'est pas définie
    }

    public static getInstance(): SystemLanguage {
        // Utilise un singleton pour garantir une seule instance de la classe
        if (!this.instance) {
            this.instance = new SystemLanguage();
        }
        return this.instance;
    }

    public getLangueInstance(): LangueInterface {
        const languageCode = SystemLanguage.getInstance().getLanguage().toLocaleLowerCase();

        if (languageCode.startsWith('fr')) {
            return new LangueFrancaise();
        } else if (languageCode.startsWith('en')) {
            return new LangueAnglaise();
        } else {
            // Par défaut, retourne une instance de langue anglaise si la langue n'est ni française ni anglaise.
            return new LangueAnglaise();
        }
    }


    public getLanguage(): string {
        return this.language;
    }
}


