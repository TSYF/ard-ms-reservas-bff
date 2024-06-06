import { CommonResponseBody } from '@/types/CommonResponseBody';
import swaggerAutogen from 'swagger-autogen';
import { Reservation as IReservation } from '../types/Reservation';

const doc = {
  info: {
    title: 'Servicios',
    description: 'API de Servicios para AR Detailing'
  },
  host: 'localhost:8000',
  // components: {
  //   schemas: {
  //     Reservation
  //   }
  // }
};

const outputFile = '../../openapi-contract.json';
const routes = [
  '../routes/reservation.ts'
];

/* NOTE: If you are using the express Router, you must pass in the 'routes' only the 
root file where the route starts, such as index.js, app.js, routes.js, etc ... */

swaggerAutogen({openapi: "3.0.3"})(outputFile, routes, doc);