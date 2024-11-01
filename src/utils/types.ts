export type userData = {
    id: string;
    createdAt: string;
    updatedAt: string;
    email: string;
    firstName: string;
    lastName: string;
};


export type signinResponse = { ok: boolean; token?: string; error?: string } | string

export type getUserResponse = { ok: boolean; userData?: userData; error?: string } | string

