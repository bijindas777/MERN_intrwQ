// Write a function that converts user entered date formatted as M/D/YYYY
//  to a format required by an API (YYYYMMDD). The parameter "userDate" and
//   the return value are strings.

// For example, it should convert user entered date "12/31/2014" to 
// "20141231" suitable for the API.


// function formatDate(userDate) {
//     // format from M/D/YYYY to YYYYMMDD
//     var parts = userDate.split('/');
//     if (parts[0].length == 1) parts[0] = '0' + parts[0];
//     if (parts[1].length == 1) parts[1] = '0' + parts[1];
//     return parts[2] + parts[0] + parts[1];
//   }
  
//   console.log(formatDate("12/31/2014"));

//question 2

// An image gallery is a set of images with corresponding remove buttons.
//  This is the HTML code for a gallery with two images:

// <div class="image">
//   <img src="https://bit.ly/3lmYVna" alt="First">
//   <button class="remove">X</button>
// </div>
// <div class="image">
//   <img src="https://bit.ly/3flyaMj" alt="Second">
//   <button class="remove">X</button>
// </div>
// Implement the setup function that registers a click event handler and implements the following logic: When the button of class remove is clicked, its parent <div> element should be removed from the gallery.

// For example, after the first image has been removed from the gallery above, it's HTML code should look like this:

// <div class="image">
//   <img src="https://bit.ly/3flyaMj" alt="Second">
//   <button class="remove">X</button>
// </div>

//answer
// function setup() {
//     // Write your code here.
//     var els = document.getElementsByClassName('remove');
  
//     for (var i = 0; i < els.length; i++) {
//       els[i].addEventListener('click', function () {
//         this.parentNode.remove();
//       });
//     }
//   }
  
//   // Example case. 
//   document.body.innerHTML = `
//   <div class="image">
//     <img src="https://bit.ly/3lmYVna" alt="First">
//     <button class="remove">X</button>
//   </div>
//   <div class="image">
//     <img src="https://bit.ly/3flyaMj" alt="Second">
//     <button class="remove">X</button>
//   </div>`;
  
//   setup();
  
//   document.getElementsByClassName("remove")[0].click();
//   console.log(document.body.innerHTML);

//question 3


// Your company assigns each customer a membership ID, and you 
// are implementing a check digit for those IDs.

// The check digit should be calculated by adding up all digits in 
// each membership ID. If the result of the sum is a number with more 
// than a single digit, another iteration is required, and the digits of
//  the result also should be added together. This process should repeat
//   until a single-digit number is calculated.

// For example, for the membership ID "55555" the sum of all digits 
// is 25. Because this is not a single-digit number, 2 and 5 would be added, 
// and the result, 7, would be the check digit.

// function createCheckDigit(membershipId) {
//     // Write the code that goes here.
//     if(membershipId.length > 1){
//         var dgts = membershipId.split('');
//         var sum = 0;
//         dgts.forEach((dgt)=>{
//           sum += Number(dgt);
//         });
        
//         //console.log('Loop 1');
//         return createCheckDigit(sum + '');
//           }
//       else{
//          //console.log('Out of Loop 1');
//           return Number(membershipId);
//       }
    
    
//   }
  
  
//   console.log(createCheckDigit("55555"));

  //question 4

  