// create a list of all the images I want to use
// have a button or item in html change the index that is shown and have the current index show 
//maybe create different tabs to change 'scenes' 

const imageList = ['./cdc-ruFBkCruBVk-unsplash.jpg', './raimond-klavins-bJiLmqLSdAc-unsplash.jpg', './usgs-hoS3dzgpHzw-unsplash.jpg', './usgs-XFWg9u0TYs4-unsplash.jpg', "pexels-barna-morvai-19256770.jpg"];

const imageHolder = document.getElementById("imageHolder");

for(let i=0; i<imageList.length; i++){
     const image = document.createElement("img");
     image.setAttribute("id","image"+i);
     image.src = imageList[i];;
     image.alt = "";

     imageHolder.append(image);
   
 }
//* get buttons 
var pictureIndex = 0;
var index = 0;

const prevButton = document.getElementById("buttonPrev");
const nextButton = document.getElementById("buttonNext")

function buttonClickNext(){
    if(index < imageList.length -1 && index >= 0){
        pictureIndex += 1;
        index+= 1
        
    }
    hideImage(index)
}
function buttonClickPrev(){
    if(index > 0 && index <= imageList.length){
        pictureIndex -= 1;
        index-=1;
        
    }
    hideImage(index)
}

function indexStatus(i){
    const imgBtnClass = document.querySelectorAll('.imgBtnClass');
    imgBtnClass.forEach(button => {
        button.style.backgroundColor = "";
    });

    const imgBtn = document.getElementById("imgBtn"+i);
    imgBtn.style.backgroundColor = "#67729D";

}
updateLocationNum();
function hideImage(index){
    for(let i =0; i< imageList.length; i++){
        if(i != index){
            let element = document.getElementById("image"+i);
            element.style.display = "none";
            element.classList.remove("active");
           
        }
        else if (i === index){
            let element = document.getElementById("image"+i);
            element.style.display = "block";
            element.classList.add('active')
           
           indexStatus(i);
        } 
    }
}
hideImage(0);
function updateLocationNum(){ 
    const imgWrap = document.getElementById("imgWrap");
    for(let i =0; i< imageList.length; i++){
        const imageBtn = document.createElement("button");
        imageBtn.setAttribute("id", "imgBtn" + i )
        imageBtn.setAttribute("class", "imgBtnClass")
        imgWrap.append(imageBtn);
        
    }
   
}

function changeColor(btn){ //TODO come back to this i wanna focus on changing by clicking on the buttons instead
    const imgBtnClass = document.querySelectorAll(".imgBtnClass")

    imgBtnClass.forEach(function(button){
        if(index===btn){
            btn.style.backgroundColor = "black";  
        }else{
            button.style.backgroundColor = ""
        }  
    })
}

//? Works but there is slight delay between clicking button and image showing up, maybe add animation in css to clean it up?
const switchPage = setInterval(imageSwitchFunct, 5000)
function imageSwitchFunct(){
    if (index < imageList.length -1){
        index += 1
    }
    else{
        index = 0
    }
    hideImage(index);
}

function btnImgChange(){
    for(let i=0; i<imageList.length; i++){
        const imgBtn = document.getElementById("imgBtn"+i);
        imgBtn.addEventListener('click', function(){
            index = i;
            pictureIndex = i;
            hideImage(i)
        })
    }
}

btnImgChange()
// todo : Add a pause button for the image carousel use clearInterval and then if the play button is clicked just use setInterval again and recall the function
// todo :"" Create Buttons that show what image and how many images"", and then if a button is clicked oyu skip to that image(replace 1/4..2/4 with this)
// todo add transition effects
