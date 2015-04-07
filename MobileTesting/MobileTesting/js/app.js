(function () {
    var app = angular.module('store', []);

    app.controller('StoreController', function () {
        this.products = gems;
    });

    var gems = [
        {
            name: 'Dodecahedron',
            price: 2.95,
            description: 'This is the description of a gem!',
            canPurchase: true,
        },
        {
            name: 'Pentagonal Gem',
            price: 5.95,
            description: ". . .",
            canPurchase: false,
        }
    ]
})();