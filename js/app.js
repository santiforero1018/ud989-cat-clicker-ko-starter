var ViewModel = function (){
    this.clickCount = ko.observable(0);
    this.name = ko.observable('Michi');
    this.imgSrc = ko.observable('img/22252709_010df3379e_z.jpg');
    this.level = ko.observable('NewBorn');

    this.incrementCounter = function (){
        this.clickCount(this.clickCount() + 1);
        this.improveCat();
    };

    this.improveCat = function (){
        if(this.clickCount() == 10){
            this.level('Infant');
        }
        else if(this.clickCount() == 100){
            this.level('Teen');
        }
    }
}

ko.applyBindings(new ViewModel());