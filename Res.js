// var reservationA = {
// 	name: "Jen",
// 	claimed: false
// };
// var reservationB = {
// 	name: "Ted",
// 	claimed: false
// };
// var reservationC = {
// 	name: "Ben",
// 	claimed: false
// };

// var reservation = [reservationA, reservationB, reservationC];
// console.log('hi')
// $(document).ready(function() {
// 	$('#button').on('click', function(e) {
// 		console.log('hello');
// 	})

//     $('#button').on('click', function() {
//         var toAdd = $('#item').val();
//         console.log(toAdd);
//         $('.list').append('<div class="item">' + toAdd + '</div>');
//     	sendTo(toAdd);
//     });
//     function sendTo(toAdd){
//     for(var i in reservation){
//     	if (toAdd == i.name) {
//     		if (i.claimed == false) {
//     			$('.list').append('<div class="item"> Your table is ready ' + toAdd + ' </div>');
//     		} else {
//     			$('.list').append('<div class="item"> You need to make a reservation ' + toAdd + ' </div>');

//     		}

//     		};
//     	};
//     }
//  }

// });



// var userName = prompt("What name is the reservation under?").toUpperCase();

// switch(userName) {
// 	case 'Jen':
// 		console.log("Welcome, your table awaits!");
// 		break;
// 	case 'Ted':
// 		console.log("Welcome, your table awaits");
// 		break;
// 	case 'Ben':
// 		console.log("Welcome, your table awaits");
// 		break;
// 	default:
// 		console.log("You will need to make a reservation");
// }

// if (userName = Jen) {
// 	console.log("Welcome, your table awaits!");
// };

var reservationA = {
   name: "Jen",
   claimed: false
};
var reservationB = {
   name: "Ted",
   claimed: false
};
var reservationC = {
   name: "Ben",
   claimed: false
};

var reservation = [reservationA, reservationB, reservationC];

$(document).ready(function() {
   
  $('#button').on('click', function() {
      var toAdd = $('#item').val();
      console.log(toAdd);
      $('.list').append('<div class="item">' + toAdd + '</div>');
      sendTo(toAdd);
  });
  function sendTo(toAdd){
  for(var i in reservation){
      if (toAdd == i.name) {
          if (i.claimed == false) {
              $('.list').append('<div class="item"> Your table is ready ' + toAdd + ' </div>');
          } else {
              $('.list').append('<div class="item"> You need to make a reservation ' + toAdd + ' </div>');
          }
    	} else if (i.claimed == true) {
    		$('.list').append('<div class="item"> Your reservation has been claimed ' + toAdd + ' </div>');
    	} else {
    		$('.list').append('<div class="item"> You need to make a reservation ' + toAdd + ' </div>');
    	}     
        };
      };
  }


});

