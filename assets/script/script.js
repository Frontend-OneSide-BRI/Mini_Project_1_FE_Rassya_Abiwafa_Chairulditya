const natureImage = [
        {
            id: 1,
            url : "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=873&q=80",
            tag : "nature"
        },
        {
            id: 2,
            url : "https://images.unsplash.com/photo-1471922694854-ff1b63b20054?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=872&q=80",
            tag : "nature"
        },
        {
            id: 3,
            url : "https://images.unsplash.com/photo-1515238152791-8216bfdf89a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=872&q=80",
            tag : "nature"
        },
        {
            id: 4,
            url : "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
            tag : "nature"
        },
]

const gadgetImage = [
    {
        id: 1,
        url : "https://images.unsplash.com/photo-1621319332247-ce870cdad56c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
        tag : "gadget"
    },
    {
        id: 2,
        url : "https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1026&q=80",
        tag : "gadget"
    },
    {
        id: 3,
        url : "https://images.unsplash.com/photo-1507804935366-720e78633272?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80",
        tag : "gadget"
    },
    {
        id: 4,
        url : "https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80",
        tag : "gadget"
    },
]

// Get elemen from HTML
const nature = document.getElementById("nature");

const galleryWrapper = document.getElementById('gallery-wrapper')


// function
function filterNature(arr){
    galleryWrapper.textContent=" "
    for(let i = 0; i < arr.length; i++){
        // create card image and add class
        // Create element
        const cardImage = document.createElement('div')
        cardImage.classList.add('col-12', 'col-md-4',  'col-lg-3', 'card-image')

        // create image and add src from data arr
        const img = document.createElement('img')
        img.src = arr[i].url

        // append image to card image
        cardImage.appendChild(img)

        // append card image to gallery wrapper
        galleryWrapper.appendChild(cardImage)

        console.log(i)
    }
}

nature.addEventListener('click', function(){
    filterNature(natureImage)
})