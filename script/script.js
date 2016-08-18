var theDrinks = {
    strong: "Hard",
    sweet: "Sweetie",
    salty: "Sea-Dog",
    bitter: "Biter",
    fruity: "Melon Bomb"
}

/*
Bartender Object
*/
var Bartender = function() {
    this.createDrink = function(preferences, pantry) {

        var nameOfDrink = "";
        var ingredients = [];


        var randomIng = function() {
            return Math.floor(Math.random() * 4) + 1;
        }

        for (var property in preferences) {
            nameOfDrink += theDrinks[property] + " ";
            ingredients.push(pantry[property][randomIng()].ingredient);

        }

        var servedDrink = "Arrg, I made you a " + nameOfDrink + "with " + ingredients.join(" and ");
        $('#output').html(servedDrink); //

    }

};

function newDrink(){
    $('#output').html("");
    $('#question').html(questionArray[currentQuestionIndex].questionText);

}

var Question = function(questionText, flavor) {
    this.questionText = questionText;
    this.flavor = flavor;
};


/*
Ingredient Object
*/

var Ingredient = function(ingredient) {
    this.ingredient = ingredient;
};

/*
Pantry Object
*/
var ThePantry = function(strong, salty, sweet, bitter, fruity) {
    this.strong = strong;
    this.salty = salty;
    this.sweet = sweet;
    this.bitter = bitter;
    this.fruity = fruity;
}




$(document).ready(function() {
    $('#new_drink').hide();
    // using our "objects" defined above
    var strongIngs = [new Ingredient("a shot o' rum"), new Ingredient("a guzzle of whisky"), new Ingredient("a splash o' gin")];
    var saltyIngs = [new Ingredient("olives"), new Ingredient("some salt brine"), new Ingredient("a rasher of bacon")]
    var sweetIngs = [new Ingredient("a sugar cube"), new Ingredient("honey"), new Ingredient("cola")]
    var bitterIngs = [new Ingredient("a shake of bitters"), new Ingredient("tonic"), new Ingredient("a lemon peel")]
    var fruityIngs = [new Ingredient("a slice of orange"), new Ingredient("cassis"), new Ingredient("a maraschino cherry")]
    var strongQuestion = new Question("Do ye like yer drink strong?", "strong")
    var sweetQuestion = new Question("Would ye like a bit of sweetness with yer poison?", "sweet")
    var saltyQuestion = new Question("Do ye like it with a salty tang?", "salty")
    var bitterQuestion = new Question("Are ye a lubber who likes it bitter?", "bitter")
    var fruityQuestion = new Question("Are ye on for a fruity finish?", "fruity")

    var questionArray = [strongQuestion, saltyQuestion, bitterQuestion, sweetQuestion, fruityQuestion];

    var bar = new Bartender();

    var preferences = {};
    var currentQuestionIndex = 0;
    var pantry = new ThePantry(strongIngs, saltyIngs,
        sweetIngs, bitterIngs, fruityIngs
    );

    $('#question').html(questionArray[currentQuestionIndex].questionText);

    $('#response').on('submit', function(e) {
        e.preventDefault();
        if ($('input:checked').val() == "Yay") {
            preferences[questionArray[currentQuestionIndex].flavor] = true;
        }
        if (currentQuestionIndex >= questionArray.length - 1) {
            bar.createDrink(preferences, pantry)
            //$('new_drink').show();

        } else {
            console.log(preferences);
            currentQuestionIndex++;
            $('#question').html(questionArray[currentQuestionIndex].questionText);
            $("input:radio").attr("checked", false);
        }
    });


});


// console.log(preferences);
// if ($.isEmptyObject(preferences)) {}
//nameOfDrink and firstIngUsed and secondIngUsed are not defined
//ingredients chosen randomly based on the user's 2 preferences

// for (var property in preferences) { // {strong: true, fruity: true}
//     // there are 2 to 3 different ways of doing a for loop in JS
//     // for -in loop 
//     // it loops through properites of an object - property is a property
//     // this is very different from
//     // for (var i = 0; i < some.length; i++){} i is an index
//     // you were asked to construct a preferences object (objects have properties)
//     // var servedDrink = "Arrg, I made you a" + nameOfDrink + "with " + firstIngUsed + secondIngUsed;
//     nameOfDrink += theDrinks[property] + " ";
//     // for(var i = 0; i < pantry.length; i++){
//     //     var randomNumber = Math.floor(Math.random() * 4);
//     //     ingredients.push(pantry[property][randomNumber[i]].ingredient);
//     // }
//     ingredients.push(pantry[property][randomIng()].ingredient);

//     //ingredients.push(pantry[property][0].ingredient);

//     // console.log(pantry[property]); // e.g. pantry[strong]
// }


// newDrink();
//     // $('new_drink').on('submit', function(e) {
//     //     e.preventDefault();
//     //     $('#output').html("");
//     //     questionArray[0];
//     //     var nameOfDrink = "";
//     //     var ingredients = [];
//     // });