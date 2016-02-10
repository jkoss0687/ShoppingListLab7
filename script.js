var  groceries = [
		{
			name:'Milk',
			price: 2.49
		},
		{
			name:'Cereal',
			price: 1.99
		},
		{
			name:'Eggs',
			price: 2.60
		},
		{
			name:'Bread',
			price: 1.00
		},
	];
	
var total = 0;

// for (var i = 0; i < groceries.length; i++) {
// 	console.log(groceries[i].name + "-" + (groceries[i].price));
// 	total+=groceries[i].price;
// }

groceries.forEach(function(item){
	console.log(item.name + " - " + item.price);
	total += item.price;
});

console.log(total);
