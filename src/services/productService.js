import * as request from '~/utils/promotionRequest';

export const getPromotion = async () => {
    try {
        const res = await request.get();
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
