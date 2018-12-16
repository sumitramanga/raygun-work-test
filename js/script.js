(function() {

	var contentSwitchBtn1 = document.getElementById('errorCrashesBtn');
	var contentSwitchBtn2 = document.getElementById('frontEndBtn');
	var contentSwitchBtn3 = document.getElementById('serverSideBtn');

	var errorCrashesContent = document.getElementById('errorCrashesContent');
	var frontEndContent = document.getElementById('frontEndContent');
	var serverSideContent = document.getElementById('serverSideContent');


	function addContentSwitchClasses() {
		if(this.id === 'errorCrashesBtn') {
			// Add active class to clicked btn. Remove active class from other btns
			// and add unactive class
			contentSwitchBtn1.classList.add('contentSwitcher__item--active');
			contentSwitchBtn1.classList.remove('contentSwitcher__item--unactive');
			contentSwitchBtn2.classList.remove('contentSwitcher__item--active');
			contentSwitchBtn2.classList.add('contentSwitcher__item--unactive');
			contentSwitchBtn3.classList.remove('contentSwitcher__item--active');
			contentSwitchBtn3.classList.add('contentSwitcher__item--unactive');

			errorCrashesContent.style.display = 'block';
			frontEndContent.style.display = 'none';
			serverSideContent.style.display = 'none';

		} else if(this.id === 'frontEndBtn') {
			contentSwitchBtn2.classList.add('contentSwitcher__item--active');
			contentSwitchBtn2.classList.remove('contentSwitcher__item--unactive');
			contentSwitchBtn1.classList.remove('contentSwitcher__item--active');
			contentSwitchBtn1.classList.add('contentSwitcher__item--unactive');
			contentSwitchBtn3.classList.remove('contentSwitcher__item--active');
			contentSwitchBtn3.classList.add('contentSwitcher__item--unactive');

			errorCrashesContent.style.display = 'none';
			frontEndContent.style.display = 'block';
			serverSideContent.style.display = 'none';

		} else if (this.id === 'serverSideBtn') {
			contentSwitchBtn3.classList.add('contentSwitcher__item--active');
			contentSwitchBtn3.classList.remove('contentSwitcher__item--unactive');
			contentSwitchBtn2.classList.remove('contentSwitcher__item--active');
			contentSwitchBtn2.classList.add('contentSwitcher__item--unactive');
			contentSwitchBtn1.classList.remove('contentSwitcher__item--active');
			contentSwitchBtn1.classList.add('contentSwitcher__item--unactive');

			errorCrashesContent.style.display = 'none';
			frontEndContent.style.display = 'none';
			serverSideContent.style.display = 'block';
		}
	}
		contentSwitchBtn1.addEventListener('click', addContentSwitchClasses);
		contentSwitchBtn2.addEventListener('click', addContentSwitchClasses);
		contentSwitchBtn3.addEventListener('click', addContentSwitchClasses);

}());
