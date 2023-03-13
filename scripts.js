

/**
 * Function to get the day of the week.
 * @param birthDate The birth date.
 * @returns The day of the week.
 */
function getDayOfTheWeek(birthDate){
    return birthDate.getDay()    
}


/**
 * Function to update the ui.
 */
function updateUI(){
    let birthDate = document.querySelector('input[type="date"]').value
    birthDate = new Date(birthDate);
    
    
    
    const gender = document.getElementById("gender").value 
    
    const dayOfWeek = getDayOfTheWeek(birthDate);
    const name = akranName(dayOfWeek, gender);
    document.getElementById("result").innerHTML ="Your akran name is " + name;
}

/**
 * Function to return Akran Name from day of the week and gender inputs
 * @param dayOfTheWeek the birthdate entered by user
 * @param gender the gender entered by user
 * @returns returns the Akran name
 */
function akranName(dayOfTheWeek, gender) {
    let akranName;
    if (!dayOfTheWeek) {
        throw new Error("Day of the week has not been provided");
    }

    if (!gender) {
        throw new Error("Gender has not been provided");
    }

    if(gender.toLowerCase() =="male"){
        return maleAkranName(dayOfTheWeek)
    }
    
    if(gender.toLowerCase() =="female"){
        return femaleAkranName(dayOfTheWeek)
    }
   
}


/**
 * Function to handle male Akran names.
 * @param dayOfTheWeek The day of the week.
 * @returns The male Akran name.
 */
function maleAkranName(dayOfTheWeek) {
    const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]

    switch (dayOfTheWeek) {
        case 0:
            return maleNames[0];
        case 1:
            return maleNames[1];
        case 2:
            return maleNames[2]
        case 3:
            return maleNames[3];
        case 4:
            return maleNames[4]
        case 5:
            return maleNames[5]
        case 6:
            return maleNames[6]
        default:
            break;
    }
}

/**
 * Function to handle male Akran names.
 * @param dayOfTheWeek The day of the week.
 * @returns The male Akran name.
 */
function femaleAkranName(dayOfTheWeek) {
    const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]

    switch (dayOfTheWeek) {
        case 0:
            return femaleNames[0];
        case 1:
            return femaleNames[1];
        case 2:
            return femaleNames[2]
        case 3:
            return femaleNames[3];
        case 4:
            return femaleNames[4]
        case 5:
            return femaleNames[5]
        case 6:
            return femaleNames[6]
        default:
            break;
    }
}

