var images = [ 
    {path: 'images/cat1.png',
    description : 'Персидська довгошерста'
    },
    {path: 'images/cat2.png',
    description : 'Шиншила'
    },
    {path: 'images/cat3.png',
    description : 'Британська короткошерста кішка '
    }
];

var imageIndex = 0;
var nextButton = document.getElementById("next")
var previousButton = document.getElementById("previous")

function UpdatePhoto() {
    document.getElementById("image").src = images[imageIndex].path;
    document.getElementById("description").innerHTML = images[imageIndex].description;
    document.getElementById("photoNumber").innerHTML = `Фотографія ${imageIndex+1} з ${images.length}`;
    
    if (imageIndex == 2){
        nextButton.innerHTML = ""
    }
    else{
        nextButton.innerHTML = 'Вперед'
    };
    if (imageIndex == 0){
        previousButton.innerHTML = ""
    }
    else{
        previousButton.innerHTML = 'Назад'
    }
};    

function NextPhoto(){
    if (imageIndex != 2){
        imageIndex = (imageIndex + 1) % images.length;
        UpdatePhoto();
    }
};

function PreviousPhoto(){
    if (imageIndex != 0){
        imageIndex = (imageIndex - 1) % images.length;
        UpdatePhoto();
    }
};

UpdatePhoto();