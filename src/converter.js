/* eslint-disable no-unused-vars */
'use strict';

const RATES = {
  usd: 0.027,
  eur: 0.026,
};

function convert({ uah, currency }) {
  if (!RATES[currency]) {
    return null;
  }

  return uah * RATES[currency];
}
