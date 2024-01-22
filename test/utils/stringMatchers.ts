import * as os from "os";
import {expect} from '@jest/globals';
import type {MatcherFunction} from 'expect';

const withLastLine: MatcherFunction<[attendu: unknown]> =
    function (actual: unknown, expected: unknown) {
        if(typeof actual !== 'string') throw new Error("Only works with strings");
        if(typeof expected !== 'string') throw new Error("Only works with strings");

        const lines = actual.split(os.EOL).filter(line => line != "");
        const lastLine = lines[lines.length - 1];

        const pass = lastLine == expected;
        const message = pass
            ? `La dernière ligne ne devrait pas être ${expected}, ${actual} obtenu`
            : `La dernière ligne devrait être ${expected}, ${actual} obtenu`;

        return {
            message: () => message,
            pass: pass
        }
    };

const withFirstLine: MatcherFunction<[attendu: unknown]> =
    function (actual: unknown, expected: unknown) {
        if(typeof actual !== 'string') throw new Error("Only works with strings");
        if(typeof expected !== 'string') throw new Error("Only works with strings");

        const lines = actual.split(os.EOL);
        const lastLine = lines[0];

        const pass = lastLine == expected;
        const message = pass
            ? `La première ligne ne devrait pas être ${expected}, ${actual} obtenu`
            : `La première ligne devrait être ${expected}, ${actual} obtenu`;

        return {
            message: () => message,
            pass: pass
        }
    };

expect.extend({
    withLastLine,
    withFirstLine,
});