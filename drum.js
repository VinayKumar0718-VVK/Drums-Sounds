//without Animation
//  let numberofDrums=document.querySelectorAll(".drum").length;
//  for(let i=0;i<numberofDrums;i++){
//     let oneDrum = document.querySelectorAll(".drum")[i];
//     oneDrum.addEventListener("click",function(){
//         this.style.color="red";
//         var Text = this.innerText;
//         switch (Text) {
//             case "W":
//                 var audio = new Audio("sounds/drum1.mp3.mp3");
//                  audio.play();
//                  break;
//             case "A":
//                 var audio = new Audio("sounds/drum2.mp3.mp3");
//                 audio.play();
//                 break;
//             case "S":
//                 var audio = new Audio("sounds/drum3.mp3.mp3");
//                 audio.play();
//                 break;
//             case "D":
//                 var audio = new Audio("sounds/drum4.mp3.mp3");
//                 audio.play();
//                 break;
//              case "J":
//                 var audio = new Audio("sounds/drum5.mp3.mp3");
//                 audio.play();
//                 break;
//             case "K":
//                 var audio = new Audio("sounds/drum6.mp3.mp3");
//                 audio.play();
//                 break;
//              case "L":
//                 var audio = new Audio("sounds/drum7.mpw.mp3");
//                 audio.play();
//                 break;
//         }
//     });
//  }
//  document.addEventListener("keypress",function(event){
//     console.log(event);
//     let eventkey = event.key;
//With Animation
   function playSound(buttonKey){
    switch (buttonKey.toUpperCase()) {
            case "W":
                var audio = new Audio("sounds/drum1.mp3.mp3");
                 audio.play();
                 break;
            case "A":
                var audio = new Audio("sounds/drum2.mp3.mp3");
                audio.play();
                break;
            case "S":
                var audio = new Audio("sounds/drum3.mp3.mp3");
                audio.play();
                break;
            case "D":
                var audio = new Audio("sounds/drum4.mp3.mp3");
                audio.play();
                break;
             case "J":
                var audio = new Audio("sounds/drum5.mp3.mp3");
                audio.play();
                break;
            case "K":
                var audio = new Audio("sounds/drum6.mp3.mp3");
                audio.play();
                break;
             case "L":
                var audio = new Audio("sounds/drum7.mpw.mp3");
                audio.play();
                break;
        }
    } 
    
 
 document.querySelectorAll(".drum").forEach(button=>{
    button.addEventListener("click",function(){
       let buttonKey = this.id;
       this.style.color="red";
       playSound(buttonKey);
       this.classList.add("pressed");

       setTimeout(()=>{
         this.classList.remove("pressed");
       },150);

    })
 })