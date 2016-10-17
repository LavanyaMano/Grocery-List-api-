import template from './grocery-page.html';
import GroceryPageController from './grocery-page.controller';

const groceryPageComponent = {
    template,
    bindings:{
        filter:'<',
    },
    controller:GroceryPageController,
    controllerAs:'groceryPageCtrl',
};

export default groceryPageComponent;