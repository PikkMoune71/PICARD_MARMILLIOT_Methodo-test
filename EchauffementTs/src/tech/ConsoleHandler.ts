// @ts-ignore
import * as readlineSync from 'readline-sync';

export class ConsoleHandler {
    private static instance: ConsoleHandler;
    private readlineSync: any;

    public constructor() {
    }

    public static getInstance(): ConsoleHandler {
        // Utilise un singleton pour garantir une seule instance de la classe
        if (!this.instance) {
            this.instance = new ConsoleHandler();
        }
        return this.instance;
    }

    public getUserInput(): string {
        // Utilise readlineSync pour obtenir une entrée utilisateur de manière synchrone
        return readlineSync.question();
    }

    public displayOutput(output: string): void {
        // Simulation d'affichage de la sortie
        console.log(output);
    }
}

