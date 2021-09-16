import args from '../src';

describe('Filter Args Test Suite', () => {
  it('should return the process.args in an object format', () => {
    expect(args).toBeDefined();
    expect(typeof args).toBe('object');
  });
  it('should return the extra args with - or --', () => {
    // running `yarn test --ci --coverage --maxWorkers=2`
    expect(args.ci).toBeDefined();
    expect(args.coverage).toBeDefined();
    expect('maxWorkers' in args).toBeTruthy();
    expect('coverage' in args).toBeTruthy();
  });
});
