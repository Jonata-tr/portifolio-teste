function navStateChange(){
	const navLinks = document.querySelectorAll('.nav-top a');

	navLinks.forEach(link => {
		link.addEventListener('click', () => {
			navLinks.forEach(a => {
				if(a.classList.contains("nav-active")){
					a.classList.remove("nav-active")
				}
			});

			console.log(link);
			
			link.classList.add("nav-active");
		})
	})
}

navStateChange();

function aboutSideBar(){
	let sideBar = document.querySelectorAll(".side-nav button");
	let descContent = document.querySelectorAll(".desc-holder");

	sideBar.forEach((button, indice) => {
		console.log('teste');

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