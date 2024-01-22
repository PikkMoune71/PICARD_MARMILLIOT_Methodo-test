declare global {
    namespace jest {
        interface Matchers<R> {
            withLastLine(expected: string) : R;
            withFirstLine(expected: string) : R;
        }
    }
}

export {};
