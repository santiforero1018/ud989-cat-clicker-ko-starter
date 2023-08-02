var Cat = function (){
    this.clickCount = ko.observable(0);
    this.name = ko.observable('Michi');
    this.imgSrc = ko.observable('img/22252709_010df3379e_z.jpg');
    this.nickNames = ko.observable([{name: 'Michi'},
                                    {name: 'Mushi'},
                                    {name: 'Bigotes'}, 
                                    {name:  'Tilin'}, 
                                    {name: 'Silvestre'}]);
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
    this.currentCat = ko.observable(new Cat());

    this.incrementCounter = function (){
        self.currentCat().clickCount(self.currentCat().clickCount() + 1);
    };

};

ko.applyBindings(new ViewModel());