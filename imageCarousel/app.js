// create a list of all the images I want to use
// have a button or item in html change the index that is shown and have the current index show 
//maybe create different tabs to change 'scenes' 

const imageList = ['./cdc-ruFBkCruBVk-unsplash.jpg', './raimond-klavins-bJiLmqLSdAc-unsplash.jpg', './usgs-hoS3dzgpHzw-unsplash.jpg', './usgs-XFWg9u0TYs4-unsplash.jpg'];

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
    // console.log("Ive been pressed forwards")
    if(index < imageList.length -1 && index >= 0){
        pictureIndex += 1;
        index+= 1
        // console.log(pictureIndex);
        
    }
    hideImage(index)
}

function buttonClickPrev(){
    // console.log("Ive been pressed backwards")
    if(index > 0 && index <= imageList.length){
        pictureIndex -= 1;
        index-=1;
        // console.log(pictureIndex)
        
    }
    hideImage(index)
}

//* Not sure if i need to make 2 functions or if one function will work for the button 

// todo Buttons work now, just need to create the function that hides all other pictures and only shows the current index picture

function hideImage(index){
    for(let i =0; i< imageList.length; i++){
        if(i != index){
            let element = document.getElementById("image"+i);
            element.style.display = "none";
        }
        else if (i === index){
            let element = document.getElementById("image"+i);
            element.style.display = "block"
           
        }
    }
}

hideImage(0);


function updateLocationNum(){ //Todo buttons up but they dont do anyhting
    const imgWrap = document.getElementById("imgWrap");
    for(let i =0; i< imageList.length; i++){
        const imageBtn = document.createElement("button");
        imageBtn.setAttribute("id", "imgBtn" + i )
        imageBtn.setAttribute("class", "imgBtnClass")
        imgWrap.append(imageBtn)
    }
   
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





// todo : Add a pause button for the image carousel use clearInterval and then if the play button is clicked just use setInterval again and recall the function
// todo :"" Create Buttons that show what image and how many images"", and then if a button is clicked oyu skip to that image(replace 1/4..2/4 with this)
updateLocationNum();

// todo add transition effects