import {MomentDeLaJournee} from "../domaine/momentDeLaJournee";

export class SystemClock {
    private static instance: SystemClock;

    private constructor() {
        // Constructeur privé
    }

    public static getInstance(): SystemClock {
        // Utilise un singleton pour garantir une seule instance de la classe
        if (!this.instance) {
            this.instance = new SystemClock();
        }
        return this.instance;
    }

    public getMoment(): MomentDeLaJournee {
        const currentHour = SystemClock.getInstance().getCurrentTime();
        if (currentHour >= 5 && currentHour < 12) {
            return MomentDeLaJournee.Matin;
        }
        if (currentHour >= 12 && currentHour < 18) {
            return MomentDeLaJournee.ApresMidi;
        }
        if (currentHour >= 18 && currentHour < 21) {
            return MomentDeLaJournee.Soiree;
        }
        if ((currentHour >= 21 && currentHour <= 23) || (currentHour >= 0 && currentHour < 5)) {
            return MomentDeLaJournee.Nuit;
        }
        // Par défaut, retourne le moment inconnu si l'heure actuelle ne correspond à aucun moment de la journée.
        return MomentDeLaJournee.Inconnu;

    }

    public getCurrentTime(): number {
        const currentTime = new Date();
        return currentTime.getHours()
    }
}


