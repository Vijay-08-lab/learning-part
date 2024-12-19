const gameinit = () => {
    if(confirm('Shall we Play Guess Number Game'))
    {
        const playervalue = () => {
            let player = prompt('Choose the number 0 to 10')
            if( player !== null && player < 10 && player > 0)
            {
                return parseInt(player)
            }
            else{
                alert('Choose a valid number between 0 to 10')
                return null
            }
        } 

        let computer = () => {
            computerChoice = Math.floor(Math.random()*10)
            return computerChoice
        }
        let gameresult = () => {
            if (playervalue() === computer() ){
                alert("You Guessed Correctly")
            }
             else if (playervalue() != computer()) {
                alert('you Guessed Worng')
             }   
            
            }
        }
        
        else{
            alert('k thanks see you later')
    }
}
    
gameinit()