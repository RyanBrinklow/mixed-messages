const arr1 = ["If You Can Dream It", "Don't Watch the Clock", "The Best Views Come", "The Future Is Promised to Noone", "Success is The Best", "Failure is a Bend in The Road", "It Always Seems Impossible", "Done is", "There is No Substitute", "Smashed it"];

 const arr2 = ["You Can Do It", "Do What It Does, Keep Moving Forward", "After the Hardest Climb", "Go for It", "Revenge", "Not the End", "Until It Is Done", "Outside of Your Comfort Zone", "Better than Perfect", "For Hard Work"];

 const arr3 = ["Unknown", "Anonymous", "Steve Jobs", "Dwayne Johnson", "Lionel Messi", "Albert Einstein", "Marie Curie", "Walt Disney", "Joe Wicks", "Stormzy"];

let quote = () => {
    let randNum1 = Math.floor(Math.random() * 10);
    let randNum2 = Math.floor(Math.random() * 10);
    let randNum3 = Math.floor(Math.random() * 10);
    return `${arr1[randNum1]}, ${arr2[randNum2]} - ${arr3[randNum3]}`
}

console.log(quote());