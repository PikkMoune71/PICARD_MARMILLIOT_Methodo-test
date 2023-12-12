export class MomentDeLaJournee {
    private readonly _representation: string;

    public static Matin: MomentDeLaJournee = new MomentDeLaJournee("Matin");

    private constructor(representation: string) {
        this._representation = representation;
    }

    public toString(){
        return this._representation;
    }
}