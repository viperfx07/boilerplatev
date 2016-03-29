/**
 * Some useful packages (you can install by using npm)
 * 1. webfontloader  = async font loaders
 * 2. slick-carousel = Simple, easy, responsive carousel 
 * 3. jquery-match-height = Use this to match the height of elements. Either use this or Equalizer from Foundation
 * 4. dropkickjs = if you need custom dropdown
 *
 * NOTES:
 * This boilerplate uses CDN/external for jQuery package. Configured in gulp/webpack.js
 */

// import wf from 'webfontloader';
import $ from 'jquery';

// wf.load({
//     google: {
//       families: ['Open Sans:400,600,800:latin', 'Slabo 27px:400:latin']
//     }
// });

$(() => {

    // if ($('.dropkick').length) {

    //     //load dropkick async-ly
    //     require.ensure([], () => {
    //         require('dropkickjs');

    //         //all dropkick
    //         $('.dropkick').dropkick({
    //             mobile: true
    //         });
    //     });
    // }

    // match-height
    // if ($('[data-mh], .mh').length) {

    //     //load match height async-ly
    //     require.ensure([], () => {
    //         require('jquery-match-height');
    //     });
    // }
});
