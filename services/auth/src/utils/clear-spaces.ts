import { has } from 'lodash';

interface ReduceData {
    [x: string] : any;
}

export const clearSpaces = (body: object) => 
  Object.entries(body)
    .reduce((acc: ReduceData, [key, value]) => {
			if (!has(acc, key)) {
					acc[key] = typeof value === 'string' ? value.trim() : value;
			}
			return acc;
    }, {});


