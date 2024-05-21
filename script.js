// Mixed zodiac generator

function generateRandomNumber(num) {
    // Gets # from 0 -> num - 1
    return Math.floor(Math.random() * num)
  }
  
  // collection zodiac object of arrays to  message
const collectiveSigns = {
    zodiacInfo:[ "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", 
    "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"],
    fortuneOutput: [ "You will have a great day!", 
    "Challenges are coming your way.", 
    "A surprise is waiting for you.", 
    "Love is around the corner.", 
    "Hard work will pay off soon.",
    "A new opportunity is on the horizon."],
    luckyNumber: ["3", "7", "9", "13", "21", "26", "33", "42", "50", "58"]
}

// store signs and display message
    let zodiacSigns = []

// Iterate over the object to  generate message
for(let signs in collectiveSigns){
    let optionIdx = generateRandomNumber(collectiveSigns[signs].length)

    // use the object's properties to create customize the message being added to zodiaSigns
    switch(signs) {
        case 'zodiacInfo':
            zodiacSigns.push(`Your sign rigth now is a "${collectiveSigns[signs][optionIdx]}".`)
            break
        case 'fortuneOutput':
            zodiacSigns.push(`You are having: "${collectiveSigns[signs][optionIdx]}".`)
            break
        case 'luckyNumber':
            zodiacSigns.push(`You luck number is: "${collectiveSigns[signs][optionIdx]}".`)
            break
        default:
            zodiacSigns.push('There is not enough info.')           
    }
}

function formatSigns(sign){
    // Add some ASCII here?
    // Add in more symbols to the array? like emojies or what not?
    const formatted = zodiacSigns.join('\n')
    console.log(formatted)
}

formatSigns(zodiacSigns);
