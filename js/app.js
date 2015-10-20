function MyViewModel() {
	var self = this;
	
	self.itemCost = ko.observable();
	self.moneyGiven = ko.observable();
	
	self.change = ko.computed(function() {
		var change = self.moneyGiven() - self.itemCost();
		
		if(isNaN(change) || change < 0) return '';
		
		return (change).toFixed(2);
	});
	
	self.twenties = ko.computed(function() {
		return Math.floor(self.change() / 20);
	});
	
	self.tens = ko.computed(function() {
		return Math.floor((self.change() % 20) / 10);
	});
	
	self.fives = ko.computed(function() {
		return Math.floor(((self.change() % 20) % 10) / 5);
	});
	
	self.ones = ko.computed(function() {
		return Math.floor((((self.change() % 20) % 10) % 5) / 1);
	});
	
	self.quarters = ko.computed(function() {		
		return Math.floor(((((self.change() % 20) % 10) % 5) % 1) / 0.25);
	});
	
	self.dimes = ko.computed(function() {
		return Math.floor((((((self.change() % 20) % 10) % 5) % 1) % 0.25) / 0.10);
	});
	
	self.nickels = ko.computed(function() {
		return Math.floor(((((((self.change() % 20) % 10) % 5) % 1) % 0.25) % 0.10) / 0.05);
	});
	
	self.pennies = ko.computed(function() {
		return Math.floor((((((((self.change() % 20) % 10) % 5) % 1) % 0.25) % 0.10) % 0.05) / 0.01);
	});
	
	

};

ko.applyBindings(new MyViewModel());



