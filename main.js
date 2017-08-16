var Food = function (name, calories, isVegan, isGlutenFree){
		this.name = name
		this.calories = calories
		this.isVegan = isVegan
		this.glutenFree = isGlutenFree
}


//INGREDIENTS
var cheddar = new Food ('Cheddar cheese', 100, false, true)
//console.log(cheddar)
var lettuce = new Food('Lettuce', 5, true, true)
var burger = new Food ('Hamburger', 300, false, true)
var turkey = new Food ('Turkey', 120, false, true)
var ham = new Food ('Ham', 200, false, true)
var bacon = new Food ('Bacon', 250, false, true)
var bbq = new Food ('BBQ', 200, false, true)


Food.prototype.stringify = function(){
	var vegan;
	var glutenFree
	if (!this.isVegan) {//NOT WORKING: RETURNING "NOT" EVERY TIME
		vegan = 'not'
	} 
	if (!this.isGlutenFree) {
		glutenFree = 'not'
	}

	return`${this.name} has ${this.calories} calories. It's ${vegan} vegan and is ${glutenFree} gluten free.`
}

// console.log(cheddar.stringify())
// console.log(lettuce.stringify())
// console.log(burger.stringify())


//PART 2
var Plate = function (name, description, price, Food){
	this.name = name
	this.description = description
	this.price = price
	this.food = Food

}
Plate.prototype.stringify = function(){
	var output = `${this.name}: ${this.description} for $${this.price}. It contains: `
		for (var i = 0; i < this.food.length; i++) {
			output += this.food[i].stringify()
		}
	return output
}

var saladPlate = new Plate ('Cobb Salad', 'salad with ham and turkey on top', 10, [lettuce, cheddar, turkey, ham])
var burgerPlate = new Plate ('BBQ Bacon Burger', 'hamburger with cheddar cheese, bacon and BBQ sauce', 15, [cheddar, burger, bacon, bbq])

// console.log(saladPlate.stringify())
// console.log(burgerPlate.stringify())



var Menu = function (name, plates){
	this.name = name
	this.plates = plates
}
Menu.prototype.stringify = function (){
	var output = this.name
	for (var i = 0; i < this.plates.length; i++) {
		output += this.plates[i].stringify()
	}
	return output
}
var happyHour = new Menu ('Happy Hour ', [saladPlate, burgerPlate])

//console.log(happyHour.stringify())


var Restaurants = function (name, description, menu){
	this.name = name
	this.description = description
	this.menu = menu
}

Restaurants.prototype.stringify = function (){
	return `${this.name}: ${this.description} restaurant has ${happyHour.stringify()}`
}


var aliceAndBobs = new Restaurants ("Alice and Bob's", "The best burger joint in town!", [happyHour])
console.log(aliceAndBobs.stringify())


























