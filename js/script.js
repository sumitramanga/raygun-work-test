(function() {

	var contentSwitchBtn1 = document.getElementById('errorCrashesBtn');
	var contentSwitchBtn2 = document.getElementById('frontEndBtn');
	var contentSwitchBtn3 = document.getElementById('serverSideBtn');

	function showContent(e, contentType) {
		var tabContent = document.getElementsByClassName("contentSwitcherContent");
		var tabLinks = document.getElementsByClassName("contentSwitcher__item");

		// Looping through all the contentSwitcherContent 's to give them a no display
		for (i = 0; i < tabContent.length; i++) {
			tabContent[i].style.display = "none";
		}

		// Looping through all the contentSwitcher__item 's and replacing the
		// unselected btns with unactive
		for (i = 0; i < tabLinks.length; i++) {
			tabLinks[i].className = tabLinks[i].className.replace(" contentSwitcher__item--active", " contentSwitcher__item--unactive");
		}

		// Show the content, add the active class whilst removing the unactive
		// class of the selected btn clicked
		document.getElementById(contentType).style.display = "block";
		e.currentTarget.className += " contentSwitcher__item--active";
		e.currentTarget.classList.remove("contentSwitcher__item--unactive");
	}

	// Here we are calling the function to the right btn
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
