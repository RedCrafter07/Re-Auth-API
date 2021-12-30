interface User {
    id: string,
    username: string
}

declare class index {
    token: string;
    id: string;

    constructor(id: string, token: string);

    setID(id: string): index;

    setToken(token: string): index;

    getUser(secret: string): Promise<string|User>
    
    validate(): Promise<string>
}

export = index;
