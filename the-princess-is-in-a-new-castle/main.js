// Requirements:

//- Create a class for a player that has the following properties:
//- `name` of type `String`
//- `totalCoins` of type `Number`
// - `status` of type `String` (options are `Powered Up`, `Big`,`Small`, and `Dead`)
// - `hasStar` of type `Boolean` (Is a star active?)
// - `setName` of type `function` - Has a parameter called `namePicked` where you pass in "Mario" or "Luigi". Sets `name` to "Mario" or "Luigi".
// - `gotHit` of type `function` - this is called whenever the player is hit by an enemy. `gotHit()` will set the `status` property accordingly. (Statuses go from "Powered Up" to "Big" to "Small" to "Dead".)
// - `gotPowerup` of type `function` - called when a powerup is received and sets the status accordingly. (Statuses go from "Small" to "Big" to "Powered Up". If you are Powered Up and it hits this function, you get a star)
// - `addCoin` of `function` - adds a coin to totalCoins
// - `print` of type `function` - prints to the console the name, totalCoins, status, and star properties. Make sure you make this look nice such as:
//     - Name: Luigi,
//     - Status: Small, etc, etc

// Use that class to create the object.

// Create a [random range function](http://stackoverflow.com/questions/1527803/generating-random-numbers-in-javascript-in-a-specific-range) that returns either 0, 1, or 2.

// If the value is 0 call the `gotHit()` function on the object.If the value is 1 call the `gotPowerup()` function on the objectIf the value is 2 call the `addCoin()` function

// Then call the print method on the object.

// Now put the random range function inside a `setInterval` function that ends after the player is dead

// The end product will look something like this:

// function whichPlayer(){
//     let randoNum = getRandomInt(0,1)
//     if (randoNum === 0){
//         setName = 'Mario'
//     } else if ( randoNum === 1){
//         setName = 'Luigi'
//     }
// }

// whichPlayer()

// class Player {
//     constructor (name, totalCoins, status, hasStar){
//         this.name = name
//         this.totalCoins = totalCoins
//         this.status = status
//         this.hasStar = hasStar
//     }
//     setName(namePicked){
//         if (namePicked === 'Mario'){
//             this.name === 'Mario'
//             console.log(`Aloha ${this.name}!`)
//         }
//         else if (namePicked === 'Luigi'){
//             this.name === 'Luigi'
//             console.log(`Asuhlamaleykum my friend, ${this.name}!`)
//         }
//     }
// // gotHit Function
//     gotHit(){
//         if(this.hasStar === true){
//             console.log("Your star protected you from taking damage but, you lose the star")
//             this.hasStar = false
//         } else if (this.status === 'small'){
//             console.log(`${this.name} has been hit! ${this.name} has died. RIP!`)
//             this.status === 'dead'
//             // clear interval clearInterval(gameRun)
//         } 
//         else if (this.status === 'big'){
//             this.status === 'small' // put console.log first
//             console.log(`${this.name} has been hit! ${this.name} is now small.`)
//         } 
//         else if (this.status === 'poweredUp'){
//             this.status === 'big'
//             console.log(`${this.name} has been hit! ${this.name} is now big instead of Powered Up.`)
//         } 
//     }  
// // print Function - set interval
//     print(){ // ADD IN BIG AND SMALL PRINTS
//         if(this.status === "poweredUp"){
//             console.log(`Name: ${this.name} \n Status: ${this.status} \n Total Coins: ${this.totalCoins}`)
//         } else if(this.status === "big"){
//             console.log(`Name: ${this.name} \n Status: ${this.status} \n Total Coins: ${this.totalCoins}`)
//         } else if(this.status === "small"){
//             console.log(`Name: ${this.name} \n Status: ${this.status} \n Total Coins: ${this.totalCoins}`)
//         }else if( this.status === 'dead') {
//             console.log(`Name: ${this.name}\n Status: ${this.status}\n Coins: ${this.totalCoins}\n`)
//             clearInterval(printOut)
//             process.kill(process.pid, 'SIGINT')
//         }
//     }
// // gotPowerup Function
// gotPowerup(){
//     if (this.status === 'small'){ 
//         console.log(`${this.name} has been Powered Up! ${this.name} is now big!`) 
//         this.status === 'big'
//     } 
//     else if (this.status === 'big'){        
//         console.log(`${this.name} has been Powered Up! ${this.name} is now Powered Up.`)
//         this.status === 'poweredUp'
//     } 
//     else if (this.status === 'poweredUp'){
//         this.hasStar === true
//         console.log(`${this.name} has been Powered Up Again! ${this.name} now has a Star!`)
//     } 
    

// }  

// // addCoin Function

// addCoin(){
//     this.totalCoins++
//     console.log(`Congrats ${this.name}, you now have ${this.totalCoins} Coins!`)
// }
// }

// let userOne = new Player ("userOne", 0, "small", false)
// let userTwo = new Player ("userTwo", 0, "small", false)

// userOne.setName("Mario")
// userTwo.setName("Luigi")
// // Random Math Function for the random number selection:

// function getRandomInt(min, max){
//      min = Math.ceil(min);
//      max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1)) + min
// }

// // Game Run Function

// function getRandomInt(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1)) + min
// }

// function randomEvent(){
//     randoNum = Math.floor(Math.random() * (2 - 0 + 1)) + 0

//     if(userOne){
//         randoNum = getRandomInt(0,2)
//         if (randoNum === 0){
//             userOne.gotHit()
//             userOne.print()
//         } else if (randoNum === 1){ 
//             userOne.gotPowerup()
//             userOne.print()
//         }else if (randoNum === 2){ 
//             userOne.addCoin()
//             userOne.print()      
//         }
//     }
//     else if (userTwo){
//         randoNum = getRandomInt(0,2)
//         if (randoNum === 0){
//             userTwo.gotHit()
//             userTwo.print()
//         } else if (randoNum === 1){ 
//             userTwo.gotPowerup()
//             userTwo.print()
//         }else if (randoNum === 2){
//             userTwo.addCoin()
//             userTwo.print()      
//         }
//     }
// }


        
          
 

// let printOut = setInterval(() => randomEvent(), 1000)

// let death = setInterval(() => userOne.status = "Dead", 5000);


function whichPlayer(){
    let randoNum = getRandomInt(0,1)
    if (randoNum === 0){
        setName = "Mario"
    } else if (randoNum === 1){
        setName = "Luigi"
    }
}

whichPlayer()

class player {
    constructor (name, totalCoins, status, hasStar) {
    this.name = name
    this.totalCoins = totalCoins
    this.status = status
    this.hasStar = hasStar
    }
    setName(namePicked){
        if (namePicked === "Luigi"){
            this.name = "Luigi"
        } else if (namePicked === "Mario"){
            this.name = "Mario"
        }
    }
    gotHit(){
        if (this.hasStar === true){
            console.log("Your star protected you from the hit! As a consequence you lose your star..")
            this.hasStar = false
        }
        else if (this.status === "Powered Up"){
            console.log("You got hit and went from powered up to big")
            this.status = "Big"
        }
        else if (this.status === "Big"){
            console.log("You got hit and went from big to small")
            this.status = "Small"
        }
        else if (this.status === "Small"){
            console.log("You got hit and died!")
            this.status = "Dead"
        }
    }
    gotPowerup(){
        if (this.status === "Powered Up"){
            this.hasStar = true
            console.log("OH BOY LOOK WHAT YOU FOUND!?! Congratulations, you got a star! ")
        } else if (this.status === "Big"){
            console.log("You found a powerup and went from big to powered up!")
            this.status = "Powered Up"
        } else if (this.status === "Small"){
            console.log("You found a powerup and went from small to big!")
            this.status = "Big"
        }
    }
    addCoin(){
        this.totalCoins++
        console.log("You found a coin!")
    }
    print(){
        if (this.status === "Powered Up"){
            console.log(`Name: ${this.name} \nStatus: ${this.status} \nTotal Coins: ${this.totalCoins}`)
        }   
        else if (this.status === "Big"){
            console.log(`Name: ${this.name} \nStatus: ${this.status} \nTotal Coins: ${this.totalCoins}`)
        } 
        else if(this.status === "Small"){
            console.log(`Name: ${this.name} \nStatus: ${this.status} \nTotal Coins: ${this.totalCoins}`)
        } 
        else if (this.status === "Dead"){
            console.log(`Name: ${this.name} \nStatus: ${this.status} \nTotal Coins: ${this.totalCoins}`)
            clearInterval(printout)
            process.kill(process.pid, 'SIGINT')
    }
    }
}

// if (this.status === "dead")
        // clearInterval(printout)
let userOne = new player ("userOne", 0, "Small", false)
let userTwo = new player ("userTwo", 0, "Small", false)

userOne.setName("Mario")
userTwo.setName("Luigi")

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function randomEvent(){
    randoNum = Math.floor(Math.random() * (2 - 0 + 1)) + 0

    if(userOne){
        randoNum = getRandomInt(0,2)
        if (randoNum === 0){
            userOne.gotHit()
            userOne.print()
        } else if (randoNum === 1){ 
            userOne.gotPowerup()
            userOne.print()
        }else if (randoNum === 2){ 
            userOne.addCoin()
            userOne.print()      
        }
    }
    else if (userTwo){
        randoNum = getRandomInt(0,2)
        if (randoNum === 0){
            userTwo.gotHit()
            userTwo.print()
        } else if (randoNum === 1){ 
            userTwo.gotPowerup()
            userTwo.print()
        }else if (randoNum === 2){
            userTwo.addCoin()
            userTwo.print()      
        }
    }
}

let printout = setInterval(() => randomEvent(),1000)



let death = setInterval(() => userOne.status = "Dead", 5000);