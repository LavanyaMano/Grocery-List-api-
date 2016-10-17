import template from './grocery-item.html';
import GroceryItemController from './grocery-item.controller';

const groceryItemComponent = {
    template,
    bindings:{
        groceryItem:'<',
        delete:'&',
        update:'&',
    },
    controller: GroceryItemController,
    controllerAs:'groceryItemCtrl',
};

export default groceryItemComponent;
