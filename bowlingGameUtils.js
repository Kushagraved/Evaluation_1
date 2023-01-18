const calculateScore=(input)=>{
    let sumFrames=0;
    let currFrame=0;
    for(let i=0;i<input.length;){

        let currFrameScore=0;
        //Last Frame
        if(currFrame===10){
            if(input[i]===10){
                currFrameScore+=10+(i+1<input.length ?input[i+1]: 0)+(i+2<input.length ?input[i+2]:0);
            }
            else if(input[i]+input[i+1]===10){
                
                currFrameScore+=10+(i+2<input.length ? input[i+2] :0);
            }
            else{
                currFrameScore+=input[i];
                currFrameScore+=(i+1<input.length ? input[i+1] :0);
            }
            break;
        }
        //Strike
        if(input[i]===10){
            currFrameScore+=10+(i+1<input.length ?input[i+1]: 0)+(i+2<input.length ?input[i+2]:0);
            i++;
        }
        else if(input[i]<10){
            currFrameScore+=input[i];
            currFrameScore+=(i+1<input.length ? input[i+1] :0);
            //Spare
            if(currFrameScore===10){
                currFrameScore+=input[i+2];
                i=i+2;
            }
            else{
                currFrameScore=currFrameScore;
                i=i+2;
            }
        }

        sumFrames+=currFrameScore;
        currFrame++;
    }

    return sumFrames;
}

const bestScore=(input)=>{
    let max_score=0;
    input.forEach((game)=>{
        const currGameScore=calculateScore(game);
        max_score=max(max_score,currGameScore);
    })

    return max_score;
}
console.log(calculateScore([10,5,5,9,0]));
console.log(calculateScore([3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6]));
console.log(calculateScore( [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2,3]));
console.log(calculateScore([6, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]));

module.exports={calculateScore,bestScore};