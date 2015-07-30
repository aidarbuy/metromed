class ListBottomSheetCtrl {
	constructor ($location, $mdSidenav, $mdBottomSheet, $mdDialog) {
		'ngInject';

		this.items = [
			{ name: 'Share', icon: 'share' },
			{ name: 'Upload', icon: 'upload' },
			{ name: 'Copy', icon: 'copy' },
			{ name: 'Print this page', icon: 'print' },
		];
		
		this.listItemClick = function($index) {
			var clickedItem = this.items[$index];
			$mdBottomSheet.hide(clickedItem);
		};

	}
}

export default ListBottomSheetCtrl;