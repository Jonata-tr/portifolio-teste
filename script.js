function navStateChange(){
	const navLinks = document.querySelectorAll('.nav-top a');

	navLinks.forEach(link => {
		link.addEventListener('click', () => {
			navLinks.forEach(a => {
				if(a.classList.contains("nav-active")){
					a.classList.remove("nav-active")
				}
			});

			link.classList.add("nav-active");
		})
	})
}

navStateChange();

function aboutSideBar(){
	let sideBar = document.querySelectorAll(".side-nav button");
	let descContent = document.querySelectorAll(".desc-holder");

	sideBar.forEach((button, indice) => {
		button.addEventListener("click", () => {
			sideBar.forEach(btn =>  {
				btn.classList.remove('active');
			})
			descContent.forEach(holder => {
				if(holder.classList.contains('active'))  holder.classList.remove('active') 
			})

			button.classList.add('active')
			descContent[indice].classList.add("active")
		})
	})
}

aboutSideBar();

window.addEventListener('scroll', () => setScrollChanges()) 

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-top a');
	
let lastScrollTop = 0;
let current = '';

function setScrollChanges(){
	const nav = document.querySelector("header");
	const st = document.documentElement.scrollTop;

  if(st > 180){
		if (st > lastScrollTop){
			// Rolagem para baixo
				nav.classList.add("hide");
		}
		if(st < lastScrollTop) nav.classList.remove('hide');
	} else{
		nav.classList.remove('hide')
	}

  lastScrollTop = st <= 0 ? 0 : st

	
	sections.forEach(section => {
		const sectionTop = section.offsetTop - 250;
		console.log(sectionTop);
		
		if(scrollY >= sectionTop) {
			current = section.getAttribute('id');
		}
	});

	navLinks.forEach(link => {
    link.classList.remove('nav-active');
    if (link.hash === '#' + current) {
      link.classList.add('nav-active');
    }
  });

}