import { has } from 'lodash';

export const getDatabaseConfig = (env = 'development', config) => {
    if (has(config, env)) {
        return config[env];
    }
    return null;
};