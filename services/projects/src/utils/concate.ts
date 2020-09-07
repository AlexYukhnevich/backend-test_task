import { values } from 'lodash';

interface AnyDict {
  [key: string]: any;
}

export const concate = (dictionary: AnyDict) => {
  return values(dictionary).reduce((acc, val) => {
    if (val || val === 0) {
      acc += val;
    }
    return acc;
  }, '');
};