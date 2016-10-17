import {merge} from "ramda";

function GroceryItemController(){
    const ctrl = this;
    ctrl.showControls =false;
    ctrl.editMode = false;
    ctrl.itemToEdit={};
    console.log(ctrl)

    ctrl.setShowControls = function setShowControls(showControls){
        ctrl.showControls = showControls;
    };
    ctrl.setEditMode = function setEditMode(editMode){
        ctrl.editMode = editMode;
        ctrl.itemToEdit = merge({},ctrl.groceryItem);
    };
    ctrl.deleteItem = function deleteItem(){
        ctrl.delete({itemToDelete: ctrl.groceryItem});
    };
    ctrl.editItem = function editItem(itemToEdit){
        ctrl.update({itemToUpdate:itemToEdit});
        ctrl.groceryItem = itemToEdit;
        ctrl.editMode = false;
    };
}
export default GroceryItemController