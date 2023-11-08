export class Student {
    id: number;
    firstName: string;
    lastname: string;
    address: string;
    phone: string;
    active: boolean;
    avergeMarks: number;
    departureDate?: Date;
    description?: string;

    constructor() {
        this.id = 0;
        this.firstName = "";
        this.lastname = "";
        this.address = "";
        this.phone = "";
        this.active = false;
        this.avergeMarks = 0;
    }
}