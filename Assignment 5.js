// list of categories
const categories = ['Lunch', 'Dinner', 'Sushi', 'Drinks'];
<a href="#" onclick="$dc.loadMenuItems('${randomCategoryShortName}');">Specials</a>
// generate random category short_name
const randomCategoryShortName = categories[Math.floor(Math.random() * categories.length)];
