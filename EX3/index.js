const Moment = require( "moment" );
const myMoment = new Moment();
var yearsSince = myMoment.diff( '1976-11-26', 'years', false );
console.log( myMoment.format( 'dddd, MMMM Do YYYY') );
console.log( `It has been ${yearsSince} years since November 26, 1976` );