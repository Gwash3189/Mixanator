import { left } from 'composanator';

export const mix = (...factories) => {
  const fac = left(...factories);
  fac.extend = (...facs) => {
    return left(...factories.concat(facs));
  };
  return fac;
};
