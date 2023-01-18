const calculateScore=(input)=>{
    let sumFrames=0;
    for(let i=0;i<input.length;){

        let currFrameScore=0;
        //Strike
        if(input[i]===10){
            currFrameScore+=10+input[i+1]+input[i+2];
            i++;
        }
        else if(input[i]<10){
            currFrameScore+=input[i];
            currFrameScore+=input[i+1];

            if(currFrameScore===10){
                currFrameScore+=input[i+2];
                i=i+2;
            }
            else{
                currFrameScore=currFrameScore;
                i=i+2;
            }
        }
        console.log(currFrameScore);
        sumFrames+=currFrameScore;
    }

    return sumFrames;
}
// console.log(calculateScore([10,5,5,9,0]));
// console.log(calculateScore([3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6]));
// console.log(calculateScore( [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10]));
// console.log(calculateScore([6, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]));
