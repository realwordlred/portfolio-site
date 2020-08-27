class Gallery{
	constructor(){
       this.eventArea = document.querySelector(".cert__gallery")
       this.mainImg = document.querySelector(".cert__gallery-main-pic")
       this.thumbs = document.querySelector(".cert__thumbs-container")
       this.imgArray = [['assets/images/certs/intro-to-html5.jpg','passed intro to html5'],
                        ['assets/images/certs/intro-to-css3.jpg','passed intro to css3'],
                        [ 'assets/images/certs/Interactivity-with-JavaScript.jpg','passed interactivity with javaScript'],
                        ['assets/images/certs/Advanced-Styling-with-Responsive-Design.jpg','advanced styling with responsive design']]
       this.currentImage = 3
       this.activeThumb
       this.events()
       this.loadImgs()
        
		
	}
	
	events() {
		
		this.eventArea.addEventListener("click", e => this.toggleImg(e))
		this.thumbs.addEventListener("click", e => this.thumbChange(e))

		
	}
 
 loadImgs(){
  let count = 0
  for(const img of this.imgArray){
  let thumb = `<img src="${img[0]}" alt="${img[1]}" id="${count}" class="cert__thumb">`
  if(count === this.currentImage){
   thumb = `<img src="${img[0]}" alt="${img[1]}" id="${count}" class="cert__thumb cert__thumb--active">`
   
   
  }
  count++
  this.thumbs.innerHTML += thumb
  this.activeThumb = document.querySelector('.cert__thumb--active')//set first active thumb
  }
	}
 
	toggleImg(e) {
   this.activeThumb = document.querySelector('.cert__thumb--active')//call fresh active thumb
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
 thumbChange(e){
  this.mainImg.src = e.target.src
  this.mainImg.alt = e.target.alt
  this.currentImage = parseInt(e.target.id)
  this.activeThumb.classList.remove('cert__thumb--active')//remove current active thumb
  e.target.classList.add('cert__thumb--active')//add active class to new active tab
 }
	
	
}



export default Gallery;