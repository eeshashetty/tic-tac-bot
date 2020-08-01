function check(grid) {
    for(let i = 0; i<=6; i+=3)
    {
        if(grid[i]===grid[i+1] && grid[i+1]===grid[i+2])
        {    
            if(grid[i]==='X')
            { return {'res': 'X', 'pattern': [i,i+1,i+2]}}
        
            if(grid[i]==='O')
            { return {'res': 'O', 'pattern':[i,i+1,i+2]}}
        }

    }

    for(let i = 0; i<3; i++)
    {
        if(grid[i]===grid[i+3] && grid[i+3]===grid[i+6])
       {   
           if(grid[i]==='X')
           { return {'res': 'X', 'pattern':[i,i+3,i+6]}}
           
           if(grid[i]==='O')
            { return {'res': 'O', 'pattern':[i,i+3,i+6]}}
        }
                

    }

    if(grid[0]===grid[4] && grid[4]===grid[8]) {
        {    
            if(grid[0]==='X')
            { return {'res': 'X', 'pattern': [0,4,8]}}
        
            if(grid[0]==='O')
            { return {'res': 'O', 'pattern':[0,4,8]}}
        }
            
    }

    if(grid[2]===grid[4] && grid[4]===grid[6]) {
        if(grid[2]==='X')
            { return {'res': 'X', 'pattern': [2,4,6]}}
        
            if(grid[2]==='O')
            { return {'res': 'O', 'pattern':[2,4,6]} }
     
    }

    return {'res': 'D', 'pattern': []}
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