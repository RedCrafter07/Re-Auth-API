interface User {
    id: string,
    username: string
}

interface setupReturn {
    id: string,
    token: string,
    getUser(secret: string): string|User,
    validate(): string
}

declare class index {
    token: string;
    id: string;

    constructor(id: string, token: string);

    setID(id: string): this;

    setToken(token: string): this;

    setup(): Promise<setupReturn>;
}

export default index;