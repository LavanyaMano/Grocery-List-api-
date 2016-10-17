import { findIndex } from 'ramda';
function GroceryPageController(groceryAPIService,flashesService,$interval){
    const ctrl = this;
    ctrl.editedItem = {};

    function getGroceryItems(){
        groceryAPIService.groceryitems.get().$promise.then((data)=>{
            ctrl.groceryitems = data.results;
            ctrl.itemsCount = ctrl.groceryitems.length;
            console.log("item count is in page controller"+ ctrl.itemsCount);
        });
    }
    getGroceryItems();
    $interval(getGroceryItems,9000);


    ctrl.saveItem = function saveItem(editedItem){
        groceryAPIService.groceryitems.save(editedItem).$promise.then((savedItem) =>{
            ctrl.groceryitems =[
                savedItem,
                ...ctrl.groceryitems,
            ];
            ctrl.editedItem={};
            flashesService.displayMessage('Item added!','success');
        });
    };
    ctrl.updateItem = function updateItem(itemToUpdate){
        groceryAPIService.groceryitems.update(itemToUpdate).$promise.then(() =>{
            flashesService.displayMessage('Item is update!','warning');
        });
    };
    ctrl.deleteItem = function deleteItem(itemToDelete){
        const index =findIndex(item => itemToDelete.id === item.id)(ctrl.groceryitems);
            if(index !== -1) {
                ctrl.groceryitems.splice(index,1);
            }
        groceryAPIService.groceryitems.delete(itemToDelete).$promise.then(() => {
            flashesService.displayMessage('Item removed!',"danger");
        });
    };

}

export default GroceryPageController;