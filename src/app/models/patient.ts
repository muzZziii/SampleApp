export class Patient {
    id: string;
    firstName: string;
    lastName: string;
    query: Query;
}
export class Query {
    id: string;
    date: Date;
    status: Status;
}

export class Status {
    text: string;
    date: Date;
}
