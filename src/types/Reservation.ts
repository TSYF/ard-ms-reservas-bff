import { Matcher } from "@/utils";

/*
class Reservation{

  final String id;
  final String name;
  final String rut;
  final String email;
  final DateTime reservationDate;
  final DateTime reservationTime;
  final String serviceName;

  Reservation({
    required this.id,
    required this.name,
    required this.rut,
    required this.email,
    required this.reservationDate,
    required this.reservationTime,
    required this.serviceName,
  });
}
*/

// export interface Service {
//     id?: number,
//     images: string[],
//     name: string,
//     description: string,
//     minPrice: number,
//     maxPrice: number,
//     isActive: boolean,
// }

// export const serviceMatcher: Matcher = {
//     images: "object",
//     name: "string",
//     description: "string",
//     minPrice: "number",
//     maxPrice: "number",
//     isActive: "boolean",
// };

export interface Reservation {
    id?: number,
    name: string,
    rut: string,
    email: string,
    reservationDate: string,
    reservationTime: string,
    serviceName: string,
}

export const reservationMatcher: Matcher = {
    name: "string",
    rut: "string",
    email: "string",
    reservationDate: "string",
    reservationTime: "string",
    serviceName: "string",
};