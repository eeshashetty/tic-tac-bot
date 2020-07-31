const patterns = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]]

function checkpattern(pattern) {
    if(pattern.length<3)
    { return false; }
    let iLen = 0
    if(pattern.length<6)
    {iLen = pattern.length%3}
    else 
    {iLen = pattern.length - (pattern.length%3)*3 }
    
    for(let i = 0; i <= iLen; i++)
    {   for(let j = i+1; j <= pattern.length - (pattern.length%2)*2; j++)
            {   for(let k = j+1; k < pattern.length; k++)
                    {   
                        let pat = [pattern[i], pattern[j], pattern[k]]
                        let match =  patterns.filter(p => JSON.stringify(p) === JSON.stringify(pat))
                        if(match.length>0)
                        { return match }
                    }
                
            }
    }
    return []
}

function check(grid) {
    let patX = []
    let patO = []
    for(let pos = 0; pos < grid.length; pos++) {
        if(grid[pos]==="X") {
            patX.push(pos)
        }
        if(grid[pos]==="O") {
            patO.push(pos)
        }
    }
        let matchX = checkpattern(patX)
        let matchO = checkpattern(patO)
       
        if(matchX.length>0)
        {return {res: 'X', pattern: matchX[0]}}

        if(matchO.length>0)
        {return {res: 'O', pattern: matchO[0]}}
    

    return {res: 'D', pattern: []}
}

function checkscore(grid) {
    let value = 0

    if (check(grid).res === 'X') {
        value = -10
    }
    
    if (check(grid).res === 'O') {
        value = 10
    }

    return value

}

module.exports = {check, checkscore}