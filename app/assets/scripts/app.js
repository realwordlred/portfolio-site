import '../styles/styles.css'
import "lazysizes"
import MobileMenu from "./modules/mobilemenu"
import Gallery from "./modules/gallery"


let currentPage = document.title

if(currentPage === 'PR\'s portfolio contact-us'){
	
	
	import(/* webpackChunkName: "contact"*/"./modules/form").then(x => {
			  modal = new x.default()}).catch(() => console.log("there was a problem"))
	
}

let mobileMenu= new MobileMenu()

let modal




if (module.hot) {
  module.hot.accept()
}

document.querySelectorAll(".open-modal").forEach(el => {
	   el.addEventListener("click", e => {
		   
		   e.preventDefault()
		   if (typeof modal == "undefined"){
			   
			   import(/* webpackChunkName: "modal"*/"./modules/modal").then(x => {
			  modal = new x.default()
			  setTimeout(() => modal.openTheModal(), 20)
			   
		   }).catch(() => console.log("there was a problem"))
			   
			   
		   }else{
			   
			   modal.openTheModal()
			   
			   
		   }


           
		   
	   })
	
})




