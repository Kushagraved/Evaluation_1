const {calculateScore,bestScore}=require('./bowlingGameUtils');

describe('Bowling Game Utilities',()=>{
    describe('Calculate score of particular game', () => {
        const testCases = [
          {
            numberList: [10,5,5,9,0],
            expected: 48
          },
          {
            numberList: [3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6],
            expected: 90
          }
          ,
          {
            numberList: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2,3],
            expected: 5
          }
          ,
          {
            numberList: [6, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            expected: 16
            
          }
        ];
      
        testCases.forEach(test => {
          it('', () => {
            const res = calculateScore(test.numberList);
            expect(res).toEqual(test.expected);
          });
        });
      });

})

