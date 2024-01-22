import {MomentOfTheDay} from "../../domaine/moment/MomentOfTheDay";


export class ActualMomentOfDay {

    private static instance: ActualMomentOfDay;

    private constructor() {
    }

    public static getInstance(): ActualMomentOfDay {
        if (!ActualMomentOfDay.instance) {
            ActualMomentOfDay.instance = new ActualMomentOfDay();
        }
        return ActualMomentOfDay.instance;
    }


    public getMomentOfDay() {
        const heure = new Date().getHours();
        if (heure >= 5 && heure < 12) {
            return MomentOfTheDay.Morning;
        }
        if (heure >= 12 && heure < 18) {
            return MomentOfTheDay.Afternoon;
        }
        if (heure >= 18 && heure < 21) {
            return MomentOfTheDay.Evening;
        }
        if ((heure >= 21 && heure <= 23) || (heure >= 0 && heure < 5)) {
            return MomentOfTheDay.Night;
        }
        // Par défaut, retourne le moment inconnu si l'heure actuelle ne correspond à aucun moment de la journée.
        return MomentOfTheDay.Unknow;
    }
}