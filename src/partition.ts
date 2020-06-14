import type {testFn, Entries} from './_types';

/**
 * Segregates values by test result.
 * @param x entries
 * @param fn test function (v, k, x)
 * @param ths this argument
 * @returns [satisfies, doesnt]
 */
function partition<T, U>(x: Entries<T, U>, fn: testFn<T, U>, ths: object=null): [Map<T, U>, Map<T, U>] {
  var t = new Map();
  var f = new Map();
  for(var [k, v] of x) {
    if(fn.call(ths, v, k, x)) t.set(k, v);
    else f.set(k, v);
  }
  return [t, f];
}
export default partition;
