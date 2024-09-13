import { getCasaContext } from '../casa.context.js';
export const dbRepository = {
    getCasaList: async (page, pageSize) => {
        const skip = Boolean(page) ? (page - 1) * pageSize : 0;
        const limit = pageSize ?? 0;
        return await getCasaContext()
            .find()
            .skip(skip)
            .limit(limit)
            .toArray();
    },
    getCasa: async (id) => {
        return await getCasaContext().findOne({
            _id: id,
        });
    },
    saveCasa: async (casa) => {
        return await getCasaContext().findOneAndUpdate({
            _id: casa._id,
        }, { $set: casa }, { upsert: true, returnDocument: 'after' });
    },
    insertReview: async (casaId, review) => {
        const { acknowledged } = await getCasaContext().updateOne({
            _id: casaId,
        }, {
            $push: {
                reviews: review
            }
        });
        return acknowledged ? review : null;
    },
    deleteCasa: async (id) => {
        throw new Error("Not implemented");
    },
};
