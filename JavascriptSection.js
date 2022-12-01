                                                    //PART A
//NO 1
function rand() {
   for(let i = 0; i<=255; i++){
       var nums = [Math.random() * 300]
       var random = Math.round(nums.slice(0,255))
       return console.log(random)
   }
}
console.log(rand)
//NO 2

var date = new Date
var year = date.getFullYear()
console.log(year)

 var date = new Date
 var month = (date.getUTCMonth() + 1)
 console.log(month)

 var date = new Date
 var todayDate = date.getDate()
 console.log(todayDate)

var date = new Date
var currentHour = date.getHours()
console.log(currentHour);

 var date = new Date
 var currentMinute = date.getMinutes()
 console.log(currentMinute)

 var date = new Date
 var previousDate = date.setDate(1)
 var previousMonth = date.setMonth(0)
 var previousYear = date.setFullYear(1970)
var currentYear = date.getFullYear()
var currentDate = date.getDate()
var currentMonth = date.getMonth()
//NO 4
var date = new Date
 var year = date.getFullYear()
 var day = date.getDate()
 var month = (date.getMonth() + 1)
 var hour = date.getHours()
 console.log(`${year} - ${month} - ${day} - ${hour}`);
 console.log(`${day} - ${month} - ${year} - ${hour}`);
 console.log(`${day}/${month}-${year}-${hour}`)
//NO 5.
 function agePrompt() {
     var input = window.prompt("What is your age?")
     var permitted = 18
     if(input < 18) {
         alert(`Please wait ${permitted - input} years till you will be alowed to drive`)
     }
     else if(input >= 18) {
         alert(`You are allowed to drive.`)
     }
     else {
         alert( "Invalid age" )
     }
 }
agePrompt()
//NO 6.
 function ageComparison() {
     var myAge = 20
     var yourAge = window.prompt("Enter age")
     if(yourAge>myAge) {
         console.log('You are older');
     } else if(myAge>yourAge) {
         console.log('I am older')
     } return null
 }

 ageComparison()

 //No 7.
 var a = 20
 var b = 30
 //NO 8.
 function evenOrOdd(n) {
     if(n%2 === 0) {
         return console.log('This number is an even number!');
     } else if(!n%2 === 0) {
         console.log('This number is NOT an even number!')
     } return null
 }

 evenOrOdd(6)

 // PART B
 1.
 var grade = window.prompt("Please kindly input your score!");
 if (grade >= 80) {
   alert("Your grade is A");
 } else if (grade >= 70) {
   alert("Your grade is B");
 } else if (grade >= 60) {
   alert("Your grade is C");
 } else if (grade >= 50) {
   alert("Your grade is D");
 } else if (grade >= 0) {
   alert("Your grade is F");
 }
 //NO 2.
 var month = window.prompt("Input the month please!")
 function season() {
     if(month === "September" || month === "October" || month === "November") {
         alert("The season is Autumn")
     }
     else if(month === "December" || month === "January" || month === "February") {
         alert("The season is Winter")
     }
     else if(month === "March" || month === "April" || month === "May") {
         alert("The season is Spring")
     }
     else if(month === "June" || month === "July" || month==="August") {
         alert("The season is Summer")
     } return null
 }

 season()
 //NO 3.
  function multiplicationPattern() {
      for(let i= 0; i<=10; i++){
          var products = i
          var answer = products * products
          console.log(`${products} x ${products} = ${answer}`)
      }
  }
 
  multiplicationPattern()
 
 //NO 4.
 
 //NO 5.
  
  //NO 6.

  //NO 7.

// PART C
//NO 1. 
const countries = [
    "Albania",
    "Bolivia",
    "Canada",
    "Denmark",
    "Ethiopia",
    "Finland",
    "Germany",
    "Hungary",
    "Ireland",
    "Japan",
    "Kenya",
  ];
  
  
  //2. 
  
  //3. 
  
  //4. 
  
  //5. 
  
  //6. 
  
   const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
// No 7(1).
 if(!shoppingCart.includes('Meat')) {
     shoppingCart.unshift('Meat')
 } else {
     console.log('Meat already exists')
 }

//NO 7(2).
 if(!shoppingCart.includes('Sugar')) {
     shoppingCart.push('Sugar')
 } else {
     console.log('This item already exists');
 }

//No 7(3).
 var allery = window.prompt('Are you allergic to honey??? Yess or no?')
 if(allery === "Yes") {
     shoppingCart.pop()
     alert('Honey was just removed from your shopping cart!')
 }
 else if(allery === "No") {
     alert("Okay, honey will remain in your cart")
 } else {
     alert('Input Yes or No')
 }

//NO 7(4).
 var modify = window.prompt("Would you like to modify the Tea in your cart?")
 if(modify === "Yes") {
     shoppingCart[2] = 'Green Tea'
     alert('Your cart has been modified')
 } else if(modify === "No") {
     alert(" your Tea remains the same")
 } else {
     alert("Input Yes or No")
 }
 console.log(shoppingCart)

//8. 
 function exists() {
     if(countries.includes("Ethiopia")) {
         console.log('ETHIOPIA')
     }
     else {
         countries.push('Ethopia')
     }
 }

//NO 9. 
  const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
  const backEnd = ['Node','Express', 'MongoDB']
  const fullStack = frontEnd.concat(backEnd)

//NO 10. 
 const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
 const sorted = ages.sort(function(a, b){return a-b})
 const minAge = sorted[0]
 const maxAge = sorted[(sorted.length - 1)]
 const average = Math.round((ages[0] + ages[1] + ages[2] + ages[3] + ages[4] + ages[5] + ages[6] + ages[7] + ages[8] + ages[9]) / ages.length
 )
 const range = sorted[(sorted.length - 1)] - sorted[0]

//NO 11. 
const sortedCountries = countries.sort()

//NO 12.
const countriesArr = countries

//13. 

//14. 

//15. 

//16. 

//17. 

// 18.

// 19.

// 20.

// 21.

// PART C
// 