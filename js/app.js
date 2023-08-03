var theCats = [
        {
            clickCount: 0,
            name: 'Michi 1',
            imgSrc: 'img/434164568_fea0ad4013_z.jpg',
            nickNames: ['Michi 1', 'Mingo']
        },
        {
            clickCount: 0,
            name: "Michi 2",
            imgSrc:"img/22252709_010df3379e_z.jpg",
            nickNames: ['Michi 2', 'black']
        },
        {
            clickCount: 0,
            name: "Michi 3",
            imgSrc:"img/1413379559_412a540d29_z.jpg",
            nickNames: ['Michi 3', 'Aang']
        },
        {
            clickCount: 0,
            name: "Michi 4",
            imgSrc:"img/4154543904_6e2428c421_z.jpg",
            nickNames: ['Michi 4', 'Artimus']
        },
        {
            clickCount: 0,
            name: "Michi 5",
            imgSrc:"img/9648464288_2516b35537_z.jpg",
            nickNames: ['Michi 5', 'Lonsgate']
        }
];

var Cat = function (data){
    this.clickCount = ko.observable(data.clickCount);
    this.name = ko.observable(data.name);
    this.imgSrc = ko.observable(data.imgSrc);
    this.nickNames = ko.observable(data.nickNames);

    this.level = ko.computed(function (){
        var title, 
        clicks = this.clickCount();
        if (clicks < 10){
            title = 'NewBorn';
        } else if (clicks < 50){
            title = 'Infant';
        } else if (clicks < 100){
            title = 'Child';
        } else if (clicks < 200){
            title = 'Teen';
        } else if (clicks < 500){
            title = 'Adult';
        } else {
            title = 'Ninja';
        }

        return title;
    }, this);
    
}

var ViewModel = function (){
    var self = this; // se almacena a ViewModel, para poder trabajar con el al usar with en el html
    
    this.catList = ko.observableArray([]);

    theCats.forEach(function (catItem){
        self.catList.push(new Cat(catItem));
    });

    this.currentCat = ko.observable(self.catList()[0]);

    this.incrementCounter = function (){
        self.currentCat().clickCount(self.currentCat().clickCount() + 1);
    };

    this.changeCat = function (newCat){
        self.currentCat(newCat);
    };

};

ko.applyBindings(new ViewModel());