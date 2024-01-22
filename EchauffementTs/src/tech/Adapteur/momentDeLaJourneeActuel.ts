import {MomentDeLaJournee} from "../../domaine/momentDeLaJournee";

export class MomentDeLaJourneeActuel{
    public static Obtenir() {
        const heure = new Date().getHours();
        if (heure >= 5 && heure < 12) {
            return MomentDeLaJournee.Matin;
        }
        if (heure >= 12 && heure < 18) {
            return MomentDeLaJournee.ApresMidi;
        }
        if (heure >= 18 && heure < 21) {
            return MomentDeLaJournee.Soiree;
        }
        if ((heure >= 21 && heure <= 23) || (heure >= 0 && heure < 5)) {
            return MomentDeLaJournee.Nuit;
        }
        // Par défaut, retourne le moment inconnu si l'heure actuelle ne correspond à aucun moment de la journée.
        return MomentDeLaJournee.Inconnu;

    }
}