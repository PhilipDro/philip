// var pins = [];
// PDK.request('/boards/466967123802407218/pins/', function (response) {
//   if (!response || response.error) {
//     alert('Error occurred');
//   } else {
//     pins = pins.concat(response.data);
//     if (response.hasNext) {
//       response.next(); // this will recursively go to this same callback
//     }
//   }
// });

// $(document).ready(function() {
//
//
//   $.ajax({
//     type: "POST",
//     url: "https://api.pinterest.com/v1/boards/466967123802407218/pins/?access_token=ATQFtAAWMrhBvoEsp8uJw7F3mSBPFRSPEePMcc9Etvpvk4A3VgAAAAA",
//     success: function(result) {
//       console.log("result");
//     }
//   });
//
// });

// // Initialize library
// lozad('.lozad', {
//     load: function(el) {
//         el.src = el.dataset.src;
//         el.onload = function() {
//             el.classList.add('fade')
//         }
//     }
// }).observe()
//
// $.post( "https://api.pinterest.com/v1/boards/466967123802407218/pins/?access_token=ATQFtAAWMrhBvoEsp8uJw7F3mSBPFRSPEePMcc9Etvpvk4A3VgAAAAA&fields=id%2Clink%2Cnote%2Curl%2Cimage", function( data ) {
//   console.log( "Data Loaded: " + data );
// });
