import { db } from '#core/servers/index.js';
export const getCasaContext = () => db?.collection('listingsAndReviews');
