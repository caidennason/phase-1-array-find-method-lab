// code your solution here
function superbowlWin(record){
  const scores = record.find(element => element.result ==='W')
        if (scores === undefined){
            return undefined
        } else {
            return scores.year
        }
}


//record.find(element => element.result === 'W')

