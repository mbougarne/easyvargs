import args from '../src';

describe('Filter Args Test Suite', () => {
  it('should return the process.args in an object format', () => {
    expect(args).toBeDefined();
    expect(typeof args).toBe('object');
  });
  it('should return the extra args with - or --', () => {
    // running `yarn test --foo -bar`
    expect(args.foo).toBeDefined();
    expect(args.bar).toBeDefined();
    expect('foo' in args).toBeTruthy();
    expect('bar' in args).toBeTruthy();
  });
});
