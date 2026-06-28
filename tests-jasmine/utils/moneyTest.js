import { formatCurrency } from "../../scripts/utils/money.js";

describe('test suite: formatCurrency', () => {

  it('converts paisa into rupees', () => {
    expect(formatCurrency(2095)).toEqual('1976.84');
  });

  it('works with 0', () => {
    expect(formatCurrency(0)).toEqual('0.00');
  });

  it('rounds up to the nearest paisa', () => {
    expect(formatCurrency(2000.5)).toEqual('1888.14');
  });

});