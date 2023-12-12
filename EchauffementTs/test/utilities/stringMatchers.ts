import * as os from "os";
import {expect} from '@jest/globals';
import type {MatcherFunction} from 'expect';

const ayantPourDerniereLigne: MatcherFunction<[attendu: unknown]> =
    function (actual: unknown, attendu: unknown) {
        if(typeof actual !== 'string') throw new Error("Only works with strings");
        if(typeof attendu !== 'string') throw new Error("Only works with strings");

        const lignes = actual.split(os.EOL);
        const derniereLigne = lignes[lignes.length - 1];

        const pass = derniereLigne == attendu;
        const message = pass
            ? `La dernière ligne ne devrait pas être ${attendu}, ${actual} obtenu`
            : `La dernière ligne devrait être ${attendu}, ${actual} obtenu`;

        return {
            message: () => message,
            pass: pass
        }
    };

const ayantPourPremiereLigne: MatcherFunction<[attendu: unknown]> =
    function (actual: unknown, attendu: unknown) {
        if(typeof actual !== 'string') throw new Error("Only works with strings");
        if(typeof attendu !== 'string') throw new Error("Only works with strings");

        const lignes = actual.split(os.EOL);
        const derniereLigne = lignes[0];

        const pass = derniereLigne == attendu;
        const message = pass
            ? `La première ligne ne devrait pas être ${attendu}, ${actual} obtenu`
            : `La première ligne devrait être ${attendu}, ${actual} obtenu`;

        return {
            message: () => message,
            pass: pass
        }
    };

expect.extend({
    ayantPourDerniereLigne,
    ayantPourPremiereLigne,
});