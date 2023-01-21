let cards =[];
let sum =0;
let hasblackjack =false;
let isAlive =false ;
let message ="";
let messageEl=document.getElementById("message-el");
let sumEl=document.getElementById("sum-el");
let cardsEl=document.getElementById("cards-el");

let player = {
    name : "fatima :",
    chips: 145 



}
let playerEl=document.getElementById("player-el") ;
playerEl.textContent =player.name+ " $"+ player.chips ;





function startgame(){ 
isAlive =true;
let firstcard =getRandomCard();
let secondcard =getRandomCard();
cards =[firstcard ,secondcard]
sum=firstcard +secondcard;
rendergame();


}

function getRandomCard(){
let randomcard= Math.floor((Math.random()*13)+1)

if(randomcard ==1){

    return 11;
} else
 if (randomcard >10){
return 10;

} else return randomcard ;



}
function rendergame(){

sumEl.textContent ="Sum :" + " "+ sum;
let textcards= "" ;
let  i;
for (i=0; i<cards.length ; i++) {
textcards =textcards + " " +cards[i] ;
}
cardsEl.textContent = "Cards :  " + "  " + textcards ;

    if (sum <= 20){

        message ="Do You Want to draw a new card ?";
       
        } else if (sum === 21){
        
            message =" you've got Balckjack ! ";
               hasblackjack  =true;
               
        } else {
            message = "you're out of the game ! " ;
        isAlive =false ; 
       
    
    }
        
    messageEl.textContent=message ;


}

function newcard(){

    if (isAlive ==true && hasblackjack ==false) {
    let card =getRandomCard();
   
    sum+= card;

     cards.push(card);
    
  
    rendergame();
    } 


}