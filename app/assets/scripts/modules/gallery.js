class Gallery{
	constructor(){
       this.eventArea = document.querySelector(".cert__gallery")
       this.mainImg = document.querySelector(".cert__gallery-main-img")
       this.thumbs = document.querySelector(".cert__thumbs-container")
        
		
	}
	
	events() {
		
		this.eventArea.addEventListener("click", () => this.toggleImg())
		this.thumbs.addEventListener("click", () => this.thumbChange())
		
	}
	
	toggleImg() {
	console.log('ran')
		
	}
	
 thumbChange(){
  console.log('ran2')
  
  
 }
	
	
}



export default Gallery;