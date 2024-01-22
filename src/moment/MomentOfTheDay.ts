export class MomentOfTheDay {
    private readonly representation: string;

    public static Unknow: MomentOfTheDay = new MomentOfTheDay("Inconnu");
    public static Morning: MomentOfTheDay = new MomentOfTheDay("Matin");
    public static Afternoon: MomentOfTheDay = new MomentOfTheDay("Après-Midi");
    public static Evening: MomentOfTheDay = new MomentOfTheDay("Soirée");
    public static Night: MomentOfTheDay = new MomentOfTheDay("Nuit");

    private constructor(representation: string) {
        this.representation = representation;
    }

    public toString(){
        return this.representation;
    }
}