import { observable, action } from 'mobx';
import itemData from './../search-list.json';

class Store {
	
	@observable inputData = null;

	// Data Table variable
	@observable itemList = [];
	@observable filterData = [];
	@observable actionType = "pageLoading";

	@action
	preLoadData() {
		this.itemList = itemData;
		this.actionType = 'showItemList';
		this.filterData = itemData;
	}

	searchItem(search = '') {
		this.actionType = 'searchingData';
		this.filterData = this.itemList.filter(e => {
			if(e._id.toLowerCase().toString().indexOf(search) !== -1 || e.gender.toLowerCase().toString().indexOf(search) !== -1 || e.name.toLowerCase().toString().indexOf(search) !== -1) {
				return true;
			}
			return false;
		})
		setInterval(()=> {
			this.actionType = 'showItemList';
		}, 2000)
	}
		
}



const store = new Store();
export default store;
