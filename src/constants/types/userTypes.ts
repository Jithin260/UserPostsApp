export interface User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address: {
        city: string;
        street: string;
        postalCode: string;
    };
    image: string,
    company: {
        name: string;
    };
}
