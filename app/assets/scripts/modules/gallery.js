class Gallery{
	constructor(){
       this.eventArea = document.querySelector(".cert__gallery")//galley event section
       this.mainImg = document.querySelector(".cert__gallery-main-pic")//image to change
       this.thumbs = document.querySelector(".cert__thumbs-container")//area to load thumbs
       //array of thumbs
       this.imgArray = [['assets/images/certs/intro-to-html5.jpg','passed intro to html5'],
                        ['assets/images/certs/intro-to-css3.jpg','passed intro to css3'],
                        [ 'assets/images/certs/Interactivity-with-JavaScript.jpg','passed interactivity with javaScript'],
                        ['assets/images/certs/Advanced-Styling-with-Responsive-Design.jpg','advanced styling with responsive design'],
                        ['assets/images/certs/web-design-for-everybody.jpg','webdesign for everybody'],
                        ['assets/images/certs/programming-for-everybody-python.jpg','python for everyone intro'],
                        ['assets/images/certs/programming-for-everybody-python-data-structures.jpg','python for everyone data-structures']]
       this.currentImage = 3
       this.activeThumb
       this.events()
       this.loadImgs()
        
		
	}
	
	events() {
		
		this.eventArea.addEventListener("click", e => this.toggleImg(e))//event for left/right nav
		this.thumbs.addEventListener("click", e => this.thumbChange(e))//event for selection by thumbs

		
	}
 //load images to thumb container
 loadImgs(){
  let count = 0
  for(const img of this.imgArray){//add default thumb
  let thumb = `<img src="${img[0]}" alt="${img[1]}" id="${count}" name="cert ${count}" class="cert__thumb">`
  if(count === this.currentImage){//add styled active thumb
   thumb = `<img src="${img[0]}" alt="${img[1]}" id="${count}" name="cert ${count}" class="cert__thumb cert__thumb--active">`
   
   
  }
  count++
  this.thumbs.innerHTML += thumb
  this.activeThumb = document.querySelector('.cert__thumb--active')//set first active thumb
  }
	}
 
	toggleImg(e) {
   this.activeThumb = document.querySelector('.cert__thumb--active')//call current active thumb
   //handle slideshow toggle left/right
	if(e.target.classList.value.includes('left') || e.target.parentNode.classList.value.includes('left')){
  if (this.currentImage > 0){
    this.currentImage--
    this.activeThumb.classList.remove('cert__thumb--active')
    this.activeThumb = this.activeThumb.previousSibling
    this.activeThumb.classList.add('cert__thumb--active')
  }
  this.mainImg.src = this.imgArray[this.currentImage][0]
  this.mainImg.alt = this.imgArray[this.currentImage][1]
  }
 if(e.target.classList.value.includes('right') || e.target.parentNode.classList.value.includes('right')){
 if (this.currentImage < this.imgArray.length-1){
    this.currentImage++
    this.activeThumb.classList.remove('cert__thumb--active')
    this.activeThumb = this.activeThumb.nextSibling
    this.activeThumb.classList.add('cert__thumb--active')
  this.mainImg.src = this.imgArray[this.currentImage][0]
  this.mainImg.alt = this.imgArray[this.currentImage][1]
  }
		
	}
	}
 //handle change by thumb
 thumbChange(e){
  this.activeThumb = document.querySelector('.cert__thumb--active')//call current active thumb
  if(e.target.name.includes('cert')){//avoid misclicks on other elements
  this.mainImg.src = e.target.src
  this.mainImg.alt = e.target.alt
  this.currentImage = parseInt(e.target.id)//update current image
  this.activeThumb.classList.remove('cert__thumb--active')//remove current active thumb
  e.target.classList.add('cert__thumb--active')//add active class to new active tab
  }
 }
	
	
}



export default Gallery;