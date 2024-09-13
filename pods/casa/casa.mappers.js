export const mapCasaFromModelToApi = (casa) => ({
    id: casa._id,
    name: casa.name,
    summary: casa.summary,
    street: casa.street,
    reviews: casa.reviews,
});
export const mapReviewFromModelToApi = (review) => ({
    id: review._id.toString(),
    autor: review.autor,
    review: review.review,
    fecha: review.fecha
});
export const mapReviewFromApiToModel = (review) => ({
    _id: review.id,
    autor: review.autor,
    review: review.review,
    fecha: review.fecha
});
export const mapCasaListFromModelToApi = (casaList) => casaList.map(mapCasaFromModelToApi);
export const mapCasaFromApiToModel = (casa) => ({
    _id: casa.id,
    name: casa.name,
    summary: casa.summary,
    street: casa.street,
    reviews: [],
});
export const mapCasaListFromApiToModel = (casaList) => Array.isArray(casaList) ? casaList.map(mapCasaFromApiToModel) : [];
