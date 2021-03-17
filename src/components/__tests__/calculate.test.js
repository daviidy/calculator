import calculate from '../../logic/calculate';

describe('Calculate', () => {
  it('reset data object when pressing AC', () => {
    expect(calculate({
      total: '0',
      next: '0',
      operation: '+',
      live: '0',
      reset: false,
    }, 'AC')).toEqual({
      total: '0',
      next: '',
      operation: '',
      live: '',
      reset: null,
    });
  });

  it('return pourcentage base number when pressing %', () => {
    expect(calculate({
      total: '0',
      next: '10',
      operation: '+',
      live: '0',
      reset: false,
    }, '%')).toEqual({
      total: '0.1',
      next: '0.1',
      operation: '',
      live: '0.1',
      reset: false,
    });
  });

  it('return the sum when pressing +', () => {
    expect(calculate({
      total: '2',
      next: '10',
      operation: '+',
      live: '0',
      reset: false,
    }, '+')).toEqual({
      total: '12',
      next: '',
      operation: '+',
      live: '12+',
      reset: false,
    });
  });

  it('return the number pressed by the user', () => {
    expect(calculate({
      total: '2',
      next: '10',
      operation: '+',
      live: '2+10',
      reset: false,
    }, '2')).toEqual({
      total: '2',
      next: '102',
      operation: '+',
      live: '2+102',
      reset: false,
    });
  });

  it('return the result when pressing =', () => {
    expect(calculate({
      total: '2',
      next: '10',
      operation: '+',
      live: '2+10',
      reset: false,
    }, '=')).toEqual({
      total: '12',
      next: '',
      operation: '',
      live: '12',
      reset: true,
    });
  });
});
