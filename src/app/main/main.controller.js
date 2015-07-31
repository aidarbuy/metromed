class MainController {
	constructor () {
		'ngInject';

		// TOP SIDEBAR
		this.topSidebars = [
			{
				header: "CALLING ALL PHYSICALS!",
				text: [
					"Come in between July 1, 2015 and August 31, 2015 for any sports or school physical for just $20!",
					"Looking forward to seeing you here!"
				]
			},
			{
				header: "Urgent Care",
				text: [
					"Our Emergency Medicine doctors can diagnose and treat a wide variety of illnessess and injuries.",
					"You only need to go to the emergency department to be admitted for extended care or surgery."
				]
			},
			{
				header: "Self-pay prices",
				text: [
					"We guarantee the lowest self-pay prices in the area."
				]
			},
			{
				header: "Hours of operation",
				text: [
					"Open 7 days a week",
					"from 10am to 8pm.",
					"We observe major holidays"
				]
			}
		];

		"If You Feel Sick You Should Not Wait",
		"We are passionate about caring for your health and providing exceptional urgent care"


		this.isOpen = false;

		this.demo = {
			isOpen: false,
			count: 0,
			selectedAlignment: 'md-right'
		};
	}
}

export default MainController;