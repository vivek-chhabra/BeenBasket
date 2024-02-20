import { images } from '../constants';

const CoffeeData = [
    {
        id: 'C1',
        name: 'Americano',
        description: `The Americano is another popular type of coffee drink, and it's very easy to make! It's just espresso with hot water dripping over it. The name came about during World War II when European baristas added water to their espresso drinks for the American soldiers stationed there. The resulting drink had a smoother, less concentrated flavour than espresso and thus the Americano was born.`,
        roasted: 'Medium Roasted',
        imagelink_square: images.americanoSquare1,
        imagelink_portrait: images.americanoPort1,
        ingredients: 'Milk',
        special_ingredient: 'With Steamed Milk',
        prices: [
            { size: 'S', price: '1.38', currency: '$' },
            { size: 'M', price: '3.15', currency: '$' },
            { size: 'L', price: '4.29', currency: '$' }
        ],
        average_rating: 4.7,
        ratings_count: '6,879',
        favourite: false,
        type: 'Coffee',
        index: 0
    },
    {
        id: 'C2',
        name: 'Americano',
        description: `The Americano is another popular type of coffee drink, and it's very easy to make! It's just espresso with hot water dripping over it. The name came about during World War II when European baristas added water to their espresso drinks for the American soldiers stationed there. The resulting drink had a smoother, less concentrated flavour than espresso and thus the Americano was born.`,
        roasted: 'Medium Roasted',
        imagelink_square: images.americanoSquare2,
        imagelink_portrait: images.americanoPort2,
        ingredients: 'Milk',
        special_ingredient: 'With Steamed Milk',
        prices: [
            { size: 'S', price: '1.38', currency: '$' },
            { size: 'M', price: '3.15', currency: '$' },
            { size: 'L', price: '4.29', currency: '$' }
        ],
        average_rating: 4.7,
        ratings_count: '6,879',
        favourite: false,
        type: 'Coffee',
        index: 1
    },
    {
        id: 'C3',
        name: 'Americano',
        description: `The Americano is another popular type of coffee drink, and it's very easy to make! It's just espresso with hot water dripping over it. The name came about during World War II when European baristas added water to their espresso drinks for the American soldiers stationed there. The resulting drink had a smoother, less concentrated flavour than espresso and thus the Americano was born.`,
        roasted: 'Medium Roasted',
        imagelink_square: images.americanoSquare3,
        imagelink_portrait: images.americanoPort3,
        ingredients: 'Milk',
        special_ingredient: 'With Steamed Milk',
        prices: [
            { size: 'S', price: '1.38', currency: '$' },
            { size: 'M', price: '3.15', currency: '$' },
            { size: 'L', price: '4.29', currency: '$' }
        ],
        average_rating: 4.7,
        ratings_count: '6,879',
        favourite: false,
        type: 'Coffee',
        index: 2
    },
    {
        id: 'C4',
        name: 'Black Coffee',
        description: `Black coffee is arguably the most common type of coffee drink out there. Its popularity can be mainly attributed to how easy it is to make this beverage, be it drip, pour-over, French press, or anything else. Black coffee is usually served with no add-ins.`,
        roasted: 'Medium Roasted',
        3: images.blackCoffSquare1,
        imagelink_portrait: images.blackCoffPort1,
        ingredients: 'Milk',
        special_ingredient: 'With Steamed Milk',
        prices: [
            { size: 'S', price: '1.38', currency: '$' },
            { size: 'M', price: '3.15', currency: '$' },
            { size: 'L', price: '4.29', currency: '$' }
        ],
        average_rating: 4.7,
        ratings_count: '6,879',
        favourite: false,
        type: 'Coffee',
        index: 3
    },
    {
        id: 'C5',
        name: 'Black Coffee',
        description: `Black coffee is arguably the most common type of coffee drink out there. Its popularity can be mainly attributed to how easy it is to make this beverage, be it drip, pour-over, French press, or anything else. Black coffee is usually served with no add-ins.`,
        roasted: 'Medium Roasted',
        imagelink_square: images.blackCoffSquare2,
        imagelink_portrait: images.blackCoffPort2,
        ingredients: 'Milk',
        special_ingredient: 'With Steamed Milk',
        prices: [
            { size: 'S', price: '1.38', currency: '$' },
            { size: 'M', price: '3.15', currency: '$' },
            { size: 'L', price: '4.29', currency: '$' }
        ],
        average_rating: 4.7,
        ratings_count: '6,879',
        favourite: false,
        type: 'Coffee',
        index: 4
    },
    {
        id: 'C6',
        name: 'Black Coffee',
        description: `Black coffee is arguably the most common type of coffee drink out there. Its popularity can be mainly attributed to how easy it is to make this beverage, be it drip, pour-over, French press, or anything else. Black coffee is usually served with no add-ins.`,
        roasted: 'Medium Roasted',
        imagelink_square: images.blackCoffSquare3,
        imagelink_portrait: images.blackCoffPort3,
        ingredients: 'Milk',
        special_ingredient: 'With Steamed Milk',
        prices: [
            { size: 'S', price: '1.38', currency: '$' },
            { size: 'M', price: '3.15', currency: '$' },
            { size: 'L', price: '4.29', currency: '$' }
        ],
        average_rating: 4.7,
        ratings_count: '6,879',
        favourite: false,
        type: 'Coffee',
        index: 5
    },
    {
        id: 'C7',
        name: 'Cappucchino',
        description: `Cappuccinos are a classic Italian type of coffee drink made of espresso, steamed milk, and thick foam in equal parts. The name comes from the resemblance to the hoods worn by Capuchin monks. Making cappuccino is relatively easy and can be done at home too if you know how to make espresso.`,
        roasted: 'Medium Roasted',
        imagelink_square: images.cappSquare1,
        imagelink_portrait: images.cappPort1,
        ingredients: 'Milk',
        special_ingredient: 'With Steamed Milk',
        prices: [
            { size: 'S', price: '1.38', currency: '$' },
            { size: 'M', price: '3.15', currency: '$' },
            { size: 'L', price: '4.29', currency: '$' }
        ],
        average_rating: 4.7,
        ratings_count: '6,879',
        favourite: false,
        type: 'Coffee',
        index: 6
    },
    {
        id: 'C8',
        name: 'Cappucchino',
        description: `Cappuccinos are a classic Italian type of coffee drink made of espresso, steamed milk, and thick foam in equal parts. The name comes from the resemblance to the hoods worn by Capuchin monks. Making cappuccino is relatively easy and can be done at home too if you know how to make espresso.`,
        roasted: 'Medium Roasted',
        imagelink_square: images.cappSquare2,
        imagelink_portrait: images.cappPort2,
        ingredients: 'Milk',
        special_ingredient: 'With Steamed Milk',
        prices: [
            { size: 'S', price: '1.38', currency: '$' },
            { size: 'M', price: '3.15', currency: '$' },
            { size: 'L', price: '4.29', currency: '$' }
        ],
        average_rating: 4.7,
        ratings_count: '6,879',
        favourite: false,
        type: 'Coffee',
        index: 7
    },
    {
        id: 'C9',
        name: 'Cappucchino',
        description: `Cappuccinos are a classic Italian type of coffee drink made of espresso, steamed milk, and thick foam in equal parts. The name comes from the resemblance to the hoods worn by Capuchin monks. Making cappuccino is relatively easy and can be done at home too if you know how to make espresso.`,
        roasted: 'Medium Roasted',
        imagelink_square: images.cappSquare3,
        imagelink_portrait: images.cappPort1,
        ingredients: 'Milk',
        special_ingredient: 'With Steamed Milk',
        prices: [
            { size: 'S', price: '1.38', currency: '$' },
            { size: 'M', price: '3.15', currency: '$' },
            { size: 'L', price: '4.29', currency: '$' }
        ],
        average_rating: 4.7,
        ratings_count: '6,879',
        favourite: false,
        type: 'Coffee',
        index: 8
    },
    {
        id: 'C10',
        name: 'Espresso',
        description: `Espresso is made by forcing nearly boiling water through finely-ground coffee beans, which results in a concentrated, syrup-like coffee drink. This is the base for many Italian beverages in coffee shops. When compared to regular brewed coffee, espresso is much stronger than the other types of coffee drinks. Espressos are enjoyed in shots where a single shot is one ounce and a long (single and double) shot is two ounces in amount, respectively.`,
        roasted: 'Medium Roasted',
        imagelink_square: images.espressoSquare1,
        imagelink_portrait: images.espressoPort1,
        ingredients: 'Milk',
        special_ingredient: 'With Steamed Milk',
        prices: [
            { size: 'S', price: '1.38', currency: '$' },
            { size: 'M', price: '3.15', currency: '$' },
            { size: 'L', price: '4.29', currency: '$' }
        ],
        average_rating: 4.7,
        ratings_count: '6,879',
        favourite: false,
        type: 'Coffee',
        index: 9
    },
    {
        id: 'C11',
        name: 'Espresso',
        description: `Espresso is made by forcing nearly boiling water through finely-ground coffee beans, which results in a concentrated, syrup-like coffee drink. This is the base for many Italian beverages in coffee shops. When compared to regular brewed coffee, espresso is much stronger than the other types of coffee drinks. Espressos are enjoyed in shots where a single shot is one ounce and a long (single and double) shot is two ounces in amount, respectively.`,
        roasted: 'Medium Roasted',
        imagelink_square: images.espressoSquare2,
        imagelink_portrait: images.espressoPort2,
        ingredients: 'Milk',
        special_ingredient: 'With Steamed Milk',
        prices: [
            { size: 'S', price: '1.38', currency: '$' },
            { size: 'M', price: '3.15', currency: '$' },
            { size: 'L', price: '4.29', currency: '$' }
        ],
        average_rating: 4.7,
        ratings_count: '6,879',
        favourite: false,
        type: 'Coffee',
        index: 10
    },
    {
        id: 'C12',
        name: 'Espresso',
        description: `Espresso is made by forcing nearly boiling water through finely-ground coffee beans, which results in a concentrated, syrup-like coffee drink. This is the base for many Italian beverages in coffee shops. When compared to regular brewed coffee, espresso is much stronger than the other types of coffee drinks. Espressos are enjoyed in shots where a single shot is one ounce and a long (single and double) shot is two ounces in amount, respectively.`,
        roasted: 'Medium Roasted',
        imagelink_square: images.espressoSquare3,
        imagelink_portrait: images.espressoPort3,
        ingredients: 'Milk',
        special_ingredient: 'With Steamed Milk',
        prices: [
            { size: 'S', price: '1.38', currency: '$' },
            { size: 'M', price: '3.15', currency: '$' },
            { size: 'L', price: '4.29', currency: '$' }
        ],
        average_rating: 4.7,
        ratings_count: '6,879',
        favourite: false,
        type: 'Coffee',
        index: 11
    },
    {
        id: 'C13',
        name: 'Latte',
        description: `A latte is an espresso with steamed milk and a dollop of milk foam on top. This beverage is more prevalent in America than other coffee drinks like cappuccinos because it contains less foam, making it smoother and gentler for those with sensitive palettes. And if you want to spice up your latte, add some flavouring syrup. To make an iced version of this drink, simply pour espresso and steamed milk over ice cubes.`,
        roasted: 'Medium Roasted',
        imagelink_square: images.latteSquare1,
        imagelink_portrait: images.lattePort1,
        ingredients: 'Milk',
        special_ingredient: 'With Steamed Milk',
        prices: [
            { size: 'S', price: '1.38', currency: '$' },
            { size: 'M', price: '3.15', currency: '$' },
            { size: 'L', price: '4.29', currency: '$' }
        ],
        average_rating: 4.7,
        ratings_count: '6,879',
        favourite: false,
        type: 'Coffee',
        index: 12
    },
    {
        id: 'C14',
        name: 'Latte',
        description: `A latte is an espresso with steamed milk and a dollop of milk foam on top. This beverage is more prevalent in America than other coffee drinks like cappuccinos because it contains less foam, making it smoother and gentler for those with sensitive palettes. And if you want to spice up your latte, add some flavouring syrup. To make an iced version of this drink, simply pour espresso and steamed milk over ice cubes.`,
        roasted: 'Medium Roasted',
        imagelink_square: images.latteSquare2,
        imagelink_portrait: images.lattePort2,
        ingredients: 'Milk',
        special_ingredient: 'With Steamed Milk',
        prices: [
            { size: 'S', price: '1.38', currency: '$' },
            { size: 'M', price: '3.15', currency: '$' },
            { size: 'L', price: '4.29', currency: '$' }
        ],
        average_rating: 4.7,
        ratings_count: '6,879',
        favourite: false,
        type: 'Coffee',
        index: 13
    },
    {
        id: 'C15',
        name: 'Latte',
        description: `A latte is an espresso with steamed milk and a dollop of milk foam on top. This beverage is more prevalent in America than other coffee drinks like cappuccinos because it contains less foam, making it smoother and gentler for those with sensitive palettes. And if you want to spice up your latte, add some flavouring syrup. To make an iced version of this drink, simply pour espresso and steamed milk over ice cubes.`,
        roasted: 'Medium Roasted',
        imagelink_square: images.latteSquare3,
        imagelink_portrait: images.lattePort3,
        ingredients: 'Milk',
        special_ingredient: 'With Steamed Milk',
        prices: [
            { size: 'S', price: '1.38', currency: '$' },
            { size: 'M', price: '3.15', currency: '$' },
            { size: 'L', price: '4.29', currency: '$' }
        ],
        average_rating: 4.7,
        ratings_count: '6,879',
        favourite: false,
        type: 'Coffee',
        index: 14
    },
    {
        id: 'C16',
        name: 'Macchiato',
        description: `The word "macchiato" means spotted, so a macchiato espresso is an espresso with a splash of milk. Most coffee shops will top off this type of coffee drink with some foamed milk instead of just steamed milk for what's known as a traditional macchiato. `,
        roasted: 'Medium Roasted',
        imagelink_square: images.macchiatoSquare1,
        imagelink_portrait: images.macchiatoPort1,
        ingredients: 'Milk',
        special_ingredient: 'With Steamed Milk',
        prices: [
            { size: 'S', price: '1.38', currency: '$' },
            { size: 'M', price: '3.15', currency: '$' },
            { size: 'L', price: '4.29', currency: '$' }
        ],
        average_rating: 4.7,
        ratings_count: '6,879',
        favourite: false,
        type: 'Coffee',
        index: 15
    },
    {
        id: 'C17',
        name: 'Macchiato',
        description: `The word "macchiato" means spotted, so a macchiato espresso is an espresso with a splash of milk. Most coffee shops will top off this type of coffee drink with some foamed milk instead of just steamed milk for what's known as a traditional macchiato. `,
        roasted: 'Medium Roasted',
        imagelink_square: images.macchiatoSquare2,
        imagelink_portrait: images.macchiatoPort2,
        ingredients: 'Milk',
        special_ingredient: 'With Steamed Milk',
        prices: [
            { size: 'S', price: '1.38', currency: '$' },
            { size: 'M', price: '3.15', currency: '$' },
            { size: 'L', price: '4.29', currency: '$' }
        ],
        average_rating: 4.7,
        ratings_count: '6,879',
        favourite: false,
        type: 'Coffee',
        index: 16
    },
    {
        id: 'C18',
        name: 'Macchiato',
        description: `The word "macchiato" means spotted, so a macchiato espresso is an espresso with a splash of milk. Most coffee shops will top off this type of coffee drink with some foamed milk instead of just steamed milk for what's known as a traditional macchiato. `,
        roasted: 'Medium Roasted',
        imagelink_square: images.macchiatoSquare3,
        imagelink_portrait: images.macchiatoPort3,
        ingredients: 'Milk',
        special_ingredient: 'With Steamed Milk',
        prices: [
            { size: 'S', price: '1.38', currency: '$' },
            { size: 'M', price: '3.15', currency: '$' },
            { size: 'L', price: '4.29', currency: '$' }
        ],
        average_rating: 4.7,
        ratings_count: '6,879',
        favourite: false,
        type: 'Coffee',
        index: 17
    }
];
export default CoffeeData;
