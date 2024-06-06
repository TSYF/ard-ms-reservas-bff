import 'dotenv/config';
import { get } from 'env-var';

export const envs = {
    PORT:                 get("PORT").default(8000).asPortNumber(),
    HOSTNAME:             get("HOSTNAME").default("127.0.0.1").asString(),
    RESERVATION_ENDPOINT: get("RESERVATION_ENDPOINT").required().asUrlString(),
    DEFAULT_API_PREFIX:   get("DEFAULT_API_PREFIX").default("").asString(),
}