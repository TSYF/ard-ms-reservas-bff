import { envs } from '@/config/env';
import { ErrorBody } from '@/types/ErrorBody';
import { CommonResponseBody } from '@/types/CommonResponseBody';
import express from 'express';
import { matches } from '@/utils';
import { Reservation, reservationMatcher } from '../types/Reservation';
import { RequestBody } from '../utils';
const router = express.Router();

const { RESERVATION_ENDPOINT } = envs;

//* Index
router.get(
    "/",
    (req, res) => {
        fetch(RESERVATION_ENDPOINT)
            .then(response => response.json())
            .then(reservations => {
                if (Array.isArray(reservations)) {
                    const CODE = 200;
                    const response = new CommonResponseBody(
                        true,
                        CODE,
                        reservations
                    )
                    res.status(CODE).send(response);
                } else {
                    const CODE = 500;
                    const error: ErrorBody = {
                        private: "La lista de reservationos no pasa el typecheck de array en Index",
                        public: new CommonResponseBody(
                            false,
                            CODE,
                            {
                                message: "¡Ha ocurrido un problema inesperado!"
                            }
                        )
                    }
                    console.log(error.private);
                    res.status(CODE).send(error.public);
                }
            }).catch(err => {
                const CODE = 500;
                const error: ErrorBody = {
                    private: "Error inesperado en llamado fetch en Index",
                    public: new CommonResponseBody(
                        false,
                        CODE,
                        {
                            message: "¡Ha ocurrido un problema inesperado!"
                        }
                    ),
                    errorObject: err
                }
                console.log(error.private);
                console.error(error.errorObject)
                res.status(CODE).send(error.public);
            })
    }
);

//* Show
router.get(
    "/:id",
    (req, res) => {
        fetch(
            `${RESERVATION_ENDPOINT}${req.params.id}/`
        ).then(response => response.json())
        .then(reservation => {
            const CODE = 200;
            const response = new CommonResponseBody(
                true,
                CODE,
                reservation
            )
            res.status(CODE).send(response);
        }).catch(err => {
            const CODE = 500;
    
            const error: ErrorBody = {
                private: "Error inesperado en llamado fetch en Show",
                public: new CommonResponseBody(
                    false,
                    CODE,
                    {
                        message: "¡Ha ocurrido un problema inesperado!"
                    }
                ),
                errorObject: err
            }
            console.log(error.private);
            console.error(error.errorObject)
            res.status(CODE).send(error.public);
        })
    }
);

//* ShowList
router.get(
    "/list/:ids",
    (req, res) => {
        fetch(
            `${RESERVATION_ENDPOINT}list/${req.params.ids}/`
        ).then(response => response.json())
        .then(reservations => {
                res.status(200).send(reservations);
        }).catch(err => {
            const CODE = 500;
    
            const error: ErrorBody = {
                private: "Error inesperado en llamado fetch en ShowList",
                public: new CommonResponseBody(
                    false,
                    CODE,
                    {
                        message: "¡Ha ocurrido un problema inesperado!"
                    }
                ),
                errorObject: err
            }
            console.log(error.private);
            console.error(error.errorObject)
            res.status(CODE).send(error.public);
        })
    }
);

//* Store
router.post(
    "/",
    (req, res) => {
        const reservation: Reservation & RequestBody = req.body;

        if (!matches(reservation, reservationMatcher)) {
            const CODE = 422;
            
            const error: ErrorBody = {
                private: "Error inesperado en llamado fetch en Store",
                public: new CommonResponseBody(
                    false,
                    CODE,
                    {
                        message: "La forma del cuerpo no coincide con la forma de Servicio"
                    }
                )
            }
            console.log(error.private);
            console.error(error.errorObject)
            res.status(CODE).send(error.public);
            return;
        }
        
        fetch(
            RESERVATION_ENDPOINT,
            {
                method: "POST",
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(reservation)
            }
        ).then(response => response.json())
        .then(reservation => {
            if (matches(reservation, reservationMatcher)) {
                const response = new CommonResponseBody(
                    true,
                    201,
                    reservation
                )
                res.status(201).send(response);
            } else {
                const CODE = 500;
                const error: ErrorBody = {
                    private: "El servicio retornado no pasa el typecheck en Store",
                    public: new CommonResponseBody(
                        false,
                        CODE,
                        {
                            message: "¡Ha ocurrido un problema inesperado!"
                        }
                    )
                }
                console.log(reservation);
                console.log(error.private);
                res.status(CODE).send(error.public);
            }
        }).catch(err => {
            const CODE = 500;

            const error: ErrorBody = {
                private: "Error inesperado en llamado fetch en Store",
                public: new CommonResponseBody(
                    false,
                    CODE,
                    {
                        message: "¡Ha ocurrido un problema inesperado!"
                    }
                ),
                errorObject: err
            }
            console.log(error.private);
            console.error(error.errorObject)
            res.status(CODE).send(error.public);
        })
    }
)

//* Update
router.put(
    "/:id",
    (req, res) => {
        fetch(
            `${RESERVATION_ENDPOINT}${req.params.id}/`
        ).then(response => response.json())
        .then(reservation => {
            const CODE = 200;
            const response = new CommonResponseBody(
                true,
                CODE,
                reservation
            )
            res.status(CODE).send(response);
        }).catch(err => {
            const CODE = 500;
    
            const error: ErrorBody = {
                private: "Error inesperado en llamado fetch en Update",
                public: new CommonResponseBody(
                    false,
                    CODE,
                    {
                        message: "¡Ha ocurrido un problema inesperado!"
                    }
                ),
                errorObject: err
            }
            console.log(error.private);
            console.error(error.errorObject)
            res.status(CODE).send(error.public);
        })
    }
);

//* Delete
router.delete(
    "/:id",
    (req, res) => {
        fetch(
            `${RESERVATION_ENDPOINT}${req.params.id}/`
        ).then(response => response.json())
        .then(reservation => {
            const CODE = 200;
            const response = new CommonResponseBody(
                true,
                CODE,
                reservation
            )
            res.status(CODE).send(response);
        }).catch(err => {
            const CODE = 500;
    
            const error: ErrorBody = {
                private: "Error inesperado en llamado fetch en Delete",
                public: new CommonResponseBody(
                    false,
                    CODE,
                    {
                        message: "¡Ha ocurrido un problema inesperado!"
                    }
                ),
                errorObject: err
            }
            console.log(error.private);
            console.error(error.errorObject)
            res.status(CODE).send(error.public);
        })
    }
);

export default router;