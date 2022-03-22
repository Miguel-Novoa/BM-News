let readingTime;
let timeInSeconds;

const determineReadingTime = (charsNumber) =>{

    //Suite a un test, il a été déterminé que 229 caractères sont lus en moyenne en 16.89 secondes
    timeInSeconds = (charsNumber * 16.89)/229;

    time = Math.round(timeInSeconds/60);

    if(time < 10){
        readingTime = '0' + time + ':00';
    }else{
        readingTime = time + ':00';
    };

    return readingTime;
};

const determineCharsNumber = (chars) =>{
    let contentResume = chars.substring(0, 200).split(' ').join('').length;

    let remainingChars1 = chars.substring(201).split(' ').join('');
    let remainingChars2 = remainingChars1.split('[').join('');
    let remainingChars3 = remainingChars2.split(']').join('');
    let remainingChars4 = remainingChars3.split('chars').join('');
    let remainingChars5 = remainingChars4.split('+').join('');

    let totalChars = Number(contentResume) + Number(remainingChars5);

    return totalChars;
};