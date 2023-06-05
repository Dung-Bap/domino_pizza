import axios from 'axios';

const request = axios.create({
    baseURL: 'https://dominos.vn/_next/data/pZHK-WB1IQdskOqJ6OgnT/promotion-listing.json?device-enum=0',
});

export const get = async (path, options = {}) => {
    const res = await request.get(path, options);
    return res.data;
};
