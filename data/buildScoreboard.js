// Take results data after each workout calculate the scoreboard for each workout for each "group" (all, men, women, rx, scaled, etc)

// input format
// name|team|gender|age|division|score|tiebreaker
/*
Victoria Thompson|Wodlanders|F|42|S|58||
Olive Stevenson|PR Pants|F|55|S|339||
Belle Neal|PR Pants|F|33|S|188||
Margaret Cruz|Wodlanders|F|38|R|86||
Keith Gross|PR Pants|M|30|S|104||
Mable Austin|Wodstars|F|60|R|423||
Sylvia Weber|PR Pants|F|36|S|353||
Randall Gonzalez|Wodlanders|M|57|S|451||
Nate Barnes|PR Pants|M|60|S|7||
Grace Reed|Wodstars|F|43|R|219||
Oliver McCarthy|Wodlanders|M|20|S|479||
Sylvia McCormick|Wodlanders|F|41|S|368||
Luke Castro|Buck Furpees|M|59|R|405||
*/

// `${chance.first()} ${chance.last()}|${chance.pickone(['Wodstars','Buck Furpees','Wodlanders','PR Pants'])}|${chance.character({pool: 'MF'})}|${chance.age({min:14, max: 60})}|${chance.character({pool:'SR'})}|${chance.integer({min: 0, max: 500})}||`