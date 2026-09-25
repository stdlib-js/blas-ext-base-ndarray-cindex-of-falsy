/** @license Apache-2.0 */

'use strict';

/**
* Return the index of the first falsy element in a one-dimensional single-precision complex floating-point ndarray.
*
* @module @stdlib/blas-ext-base-ndarray-cindex-of-falsy
*
* @example
* var Complex64Vector = require( '@stdlib/ndarray-vector-complex64' );
* var scalar2ndarray = require( '@stdlib/ndarray-from-scalar' );
* var cindexOfFalsy = require( '@stdlib/blas-ext-base-ndarray-cindex-of-falsy' );
*
* var x = new Complex64Vector( [ 1.0, 2.0, 0.0, 0.0, 3.0, 0.0, 2.0, 0.0 ] );
*
* var fromIndex = scalar2ndarray( 0, {
*     'dtype': 'generic'
* });
*
* var v = cindexOfFalsy( [ x, fromIndex ] );
* // returns 1
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
