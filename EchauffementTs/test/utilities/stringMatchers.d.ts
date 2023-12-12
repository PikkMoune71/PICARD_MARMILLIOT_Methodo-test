declare global {
    namespace jest {
        interface Matchers<R> {
            ayantPourDernièreLigne(attendu: string) : R;
            ayantPourPremièreLigne(attendu: string) : R;
        }
    }
}

export {};