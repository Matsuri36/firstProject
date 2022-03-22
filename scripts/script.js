const slideItems = document.querySelectorAll('.slide_item');

if (slideItems.length > 0){
	let position = 0;
	const slideTrack = document.querySelector('.slide_track');
	const btnPrev = document.querySelector('.btn-prev');
	const btnNext = document.querySelector('.btn-next');
	let moveNext = function(){
		if (position == slideItems.length - 1){
			slideTrack.style.left = '0%';
			position = 0;
		} else {
			position += 1;
			slideTrack.style.left = -position * 100 +'%'
		}
	};

	let moveBack = function(){
		if (position == 0){
			slideTrack.style.left = (slideItems.length - 1) * -100 + '%';
			position = slideItems.length - 1;
		} else {
			position -= 1;
			slideTrack.style.left = -position * 100 + '%';
		}
	};

	btnNext.addEventListener('click', moveNext);
	btnPrev.addEventListener('click', moveBack);
}



const animScrollItems = document.querySelectorAll('.anim_scroll');

if (animScrollItems.length > 0){
	window.addEventListener('scroll', animOnScroll);
	function animOnScroll(){
		for (let i = 0; animScrollItems.length > i ; i++) {
			const animItem = animScrollItems[i];
			if (animItem.offsetTop - 50 < window.innerHeight + window.scrollY && animItem.offsetHeight + animItem.offsetTop > window.scrollY){
				animItem.classList.add('_active_' + animItem.classList[0]);
			} else {
				animItem.classList.remove('_active_' + animItem.classList[0]);
			}
		}
	}
	animOnScroll();
}



const headLogo = document.querySelector('.logo');
const animNav = document.querySelector('.navigation');

headLogo.addEventListener('mouseover', navOpen);
headLogo.addEventListener('mouseout', navClose);
animNav.addEventListener('mouseover', navOpen);
animNav.addEventListener('mouseout', navClose);

function navOpen(event){
	headLogo.classList.add('_active_logo');
	animNav.classList.add('_active_navigation');
	event.stopPropagation();
}

function navClose(){
	setTimeout(() => headLogo.classList.remove('_active_logo'), 800);
	animNav.classList.remove('_active_navigation');
}
