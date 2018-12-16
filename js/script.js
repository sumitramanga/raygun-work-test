(function() {

	var contentSwitchBtn1 = document.getElementById('errorCrashesBtn');
	var contentSwitchBtn2 = document.getElementById('frontEndBtn');
	var contentSwitchBtn3 = document.getElementById('serverSideBtn');
	
	function showContent(e, contentType) {
		var tabContent = document.getElementsByClassName("contentSwitcherContent");
		var tabLinks = document.getElementsByClassName("contentSwitcher__item");

		for (i = 0; i < tabContent.length; i++) {
			tabContent[i].style.display = "none";
		}

		for (i = 0; i < tabLinks.length; i++) {
			tabLinks[i].className = tabLinks[i].className.replace(" contentSwitcher__item--active", " contentSwitcher__item--unactive");
		}

		document.getElementById(contentType).style.display = "block";
		e.currentTarget.className += " contentSwitcher__item--active";
		e.currentTarget.classList.remove("contentSwitcher__item--unactive");
	}

	function contentSwitchBtn1Clicked(){
		 showContent(event, 'errorCrashesContent');
	}

	function contentSwitchBtn2Clicked(){
		 showContent(event, 'frontEndContent');
	}

	function contentSwitchBtn3Clicked(){
		 showContent(event, 'serverSideContent');
	}

	contentSwitchBtn1.addEventListener('click', contentSwitchBtn1Clicked);
	contentSwitchBtn2.addEventListener('click', contentSwitchBtn2Clicked);
	contentSwitchBtn3.addEventListener('click', contentSwitchBtn3Clicked);

}());
