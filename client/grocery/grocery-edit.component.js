import template from './grocery-edit.html';
import GroceryEditController from './grocery-edit.controller';

const groceryEditComponent ={
    template,
    bindings:{
        save:'&',
        groceryItem:'<',
        cancel:'&?',
    },
    controller:GroceryEditController,
    controllerAs:'groceryEditCtrl',
};

export default groceryEditComponent;
