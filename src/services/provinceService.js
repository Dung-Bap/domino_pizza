import * as request from '~/utils/request';

export const getProvince = async () => {
    try {
        const res = await request.get('province');
        return res.results;
    } catch (error) {
        console.log(error);
    }
};

export const getDistrict = async (id) => {
    try {
        const res = await request.get(`province/district/${id}`);
        return res.results;
    } catch (error) {
        console.log(error);
    }
};
