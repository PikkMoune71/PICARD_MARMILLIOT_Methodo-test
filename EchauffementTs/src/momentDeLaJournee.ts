export class MomentDeLaJournee {
    private readonly _representation: string;

    public static Inconnu: MomentDeLaJournee = new MomentDeLaJournee("Inconnu");
    public static Matin: MomentDeLaJournee = new MomentDeLaJournee("Matin");
    public static ApresMidi: MomentDeLaJournee = new MomentDeLaJournee("Après-Midi");
    public static Soiree: MomentDeLaJournee = new MomentDeLaJournee("Soirée");
    public static Nuit: MomentDeLaJournee = new MomentDeLaJournee("Nuit");

    private constructor(representation: string) {
        this._representation = representation;
    }

    public toString(){
        return this._representation;
    }
}