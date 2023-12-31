var noOfDrums = document.querySelectorAll(".drum").length;

document.addEventListener("keypress",(event)=>
{
    
    makeSound(event.key);
    buttonAnimation(event.key);
}
);

for(let i=0;i<=noOfDrums;i++)
{
   document.querySelectorAll(".drum")[i].addEventListener
   (
    "click",
        function () 
        {
            makeSound(this.innerHTML)
            buttonAnimation(this.innerHTML);
        }
    ); 
};


function makeSound (selected) {
    switch(selected)
            {
                case 'w':
                    var audio = new Audio("sounds/tom-1.mp3");
                    audio.play();
                    break;

                case 'a':
                    var audio = new Audio("sounds/tom-2.mp3");
                    audio.play();
                    break;
                
                case 's':
                    var audio = new Audio("sounds/tom-3.mp3");
                    audio.play();
                    break;

                case 'd':
                    var audio = new Audio("sounds/tom-4.mp3");
                    audio.play();
                    break;

                case 'j':
                    var audio = new Audio("sounds/snare.mp3");
                    audio.play();
                    break;

                case 'k':
                    var audio = new Audio("sounds/crash.mp3");
                    audio.play();
                    break;

                case 'l':
                    var audio = new Audio("sounds/kick-bass.mp3");
                    audio.play();
                    break;
                default:
                    console.log("Invalid");

            }
}

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
    setTimeout(()=>{
        activeButton.classList.remove("pressed");
    },100);     

}