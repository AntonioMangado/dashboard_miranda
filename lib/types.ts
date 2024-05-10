export type TFilter = {
    label: string;
    action: () => void;
}

export type TCols = {
    property: string;
    label: string;
    display?: (data: Booking) => JSX.Element;
}

type Guest = {
    name: string;
    surname: string;
  }
  
export interface Booking {
    guest: Guest;
    booking_id: number;
    order_date: string;
    check_in: string;
    check_out: string;
    special_request: string | null;
    room_type: string;
    roomID: string;
    status: string; 
}

export interface Admin {
    id: number;
    username: string;
    email: string;
    password: string;
}

export interface Review {
    orderId: string;
    date: string;
    customer: string;
    rating: number;
    comment: string;
}

export interface Room {
    image: string;
    roomNumber: number;
    roomID: string;
    roomType: string;
    amenities: string[];
    price: number;
    offerPrice: number;
    status: string;
}

export interface Staff {
    photo: string;
    fullName: string;
    employeeId: string;
    email: string;
    startDate: string;
    description: string;
    contact: string;
    status: string;
}

export type User = {
    user: {
        username: string;
        email: string;
        isAuth: boolean;
    }
}