import { TMDB_BEARER } from "./constants";

export const apiOptions = (method) => {
    return {
        method: method,
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${TMDB_BEARER}`
        }
    }
}