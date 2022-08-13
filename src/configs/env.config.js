import dotenv from 'dotenv';

export const envConfigs = () => {
    if (process.env.ENV !== 'production') {
        dotenv.config();
    }
}
