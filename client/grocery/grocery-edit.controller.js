import { merge } from 'ramda';

function GroceryEditController(){
    const ctrl = this;
    ctrl.editedItem = {};
    ctrl.$onChanges = function $onChanges(){
        ctrl.editedItem = merge({},ctrl.groceryItem);
    }
    ctrl.saveItem = function saveItem(){
        ctrl.save({editedItem: ctrl.editedItem})
        ctrl.editedItem={};
    };
}

export default GroceryEditController;