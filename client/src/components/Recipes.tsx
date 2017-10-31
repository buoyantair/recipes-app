import * as React from 'react';
import styled from 'styled-components';

import RecipeCard from './RecipeCard';

import RecipeInterface from '../interfaces/RecipeInterface';

const RecipesContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: 400px;
    grid-gap: 1em;
`;

export interface Props {
    
}

export interface State {
    data: RecipeInterface[];
}

export default class Recipes extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            data: [
                {
                    id: '0',
                    name: 'Ice cream',
                    desc: `Ice cream is a sweetened frozen food typically eaten as a snack or dessert. 
                            It is usually made from dairy products, such as milk and cream, 
                            and often combined with fruits or other ingredients and flavors.`,
                    img: 'http://victoriabuzz.com/wp-content/uploads/2017/02/04-traits-ice-cream-chocolate.jpg',
                    author: 'Sent doa',
                    ingredients: [
                        '4 egg yolks',
                        '1/2 cup granulated sugar',
                        '1 cup milk - Whole milk, half & half cream, and/or low-fat condensed milk may be used to lower the calories (these substitutions may effect how creamy your ice cream will turn out).',
                        '1 cup heavy cream or whipping cream',
                        'Crushed Ice',
                        'Rock Salt - large crystal salt with a gray color, due to minerals not removed from normal table salt.  This form of salt is available in most grocery stores, and also through hardware stores.',
                        '2 teaspoons pure vanilla extract or 1 vanilla bean, split and scraped'
                    ],
                    steps: [
                        'In a medium-size bowl, add the egg yolks and sugar; beat until thick and lemon colored; set aside.  NOTE: If making Chocolate Ice Cream, add the cocoa powder to the egg mixture now.',
                        'In a small heavy saucepan over low to medium-low heat, add milk.  Slowly bring milk just to a gentle simmer or until it begins to bubble around the edges (do not let the mixture boil).  Remove from heat.',
                        'Gradually stir hot milk into beaten egg/sugar mixture with a wire whisk.  Pour mixture back into the saucepan.  Over low heat, stirring constantly, heat until the mixture (custard) thickens and will coat the back of a metal spoon with a thin film, approximately 7 to 10 minutes.',
                        'On your instant-read cooking thermometer, the temperature should reach between 165 and 180 degrees F.  This process is known as tempering.  NOTE: Do not let the mixture boil or it will curdle.  If, of course by accident, your custard base does curdle, immediately remove from heat and place in a blender; process until smooth.',
                        'The FDA and the USDA advise consumers to use a recipe that contains a cooked custard base when using eggs in your ice cream recipe.  The custard base must reach 160 degrees F, measured with a cooking thermometer, to kill the salmonella bacteria.  Additionally, it is important to only used pasteurized milk and cream products in making your homemade ice cream.',
                        'Remove the custard mixture from heat and let custard cool.  NOTE: Cool quickly by setting pan in ice or cold water and stirring for a few minutes. Using the ice water method, the mixture will cool in about 15 minutes.  Once the custard is cool, cover and refrigerate until thoroughly chilled, at least 1 hour or until it reaches 65 degrees F. on your instant-read cooking thermometer.',
                        'When the custard base is cold, stir in the heavy cream and vanilla extract or vanilla bean scrapings.  Stir or whisk just until mixture is well combined.  If you want to add any extra additions (fresh or dried fruit, candies or confections, nuts, or alcohol), now is the time (see below for directions).  The ice cream is now ready for the freezing process.',
                        "Transfer the mixture into your ice cream maker and freeze according to the manufacturer's instructions.  Either churn your ice cream by hand or by motor."
                    ]
                },
                {
                    id: '1',
                    name: 'Sauce',
                    desc: `In cooking, a sauce is a liquid, 
                        cream, or semi-solid food served on or used in preparing other foods. 
                        Sauces are not normally consumed by themselves; they add flavor, 
                        moisture, and visual appeal to another dish.`,
                    img: 'http://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/7/26/0/NY0100_neelys-bbq-sauce_s4x3.jpg.rend.hgtvcom.616.462.suffix/1371597847826.jpeg',
                    author: 'Sent doa',
                    ingredients: [
                        'a', 'b', 'c'
                    ],
                    steps: [
                        'step1',
                        'step2',
                        'step3'
                    ]
                },
                {
                    id: '2',
                    name: 'Pasta',
                    desc: `
                    Pasta is a staple food of traditional Italian cuisine, 
                    with the first reference dating to 1154 in Sicily.
                    `,
                    img: 'http://www.seriouseats.com/recipes/assets_c/2016/08/20160827-cherry-tomato-pasta-13-thumb-1500xauto-433876.jpg',
                    author: 'Sent doa',
                    ingredients: [
                        'a', 'b', 'c'
                    ],
                    steps: [
                        'step1',
                        'step2',
                        'step3'
                    ]
                },
                {
                    id: '3',
                    name: 'Peanut butter',
                    desc: `
                    Peanut butter is a food paste or spread made from ground dry roasted peanuts. 
                    It often contains additional ingredients that modify the taste or 
                    texture, such as salt, sweeteners or emulsifiers. 
                    Peanut butter is popular in many countries.
                    `,
                    img: 'http://food.fnr.sndimg.com/content/dam/images/food/fullset/2007/10/15/0/EA1112_Peanut_Butter.jpg.rend.hgtvcom.616.462.suffix/1382375731291.jpeg',
                    author: 'Sent doa',
                    ingredients: [
                        'a', 'b', 'c'
                    ],
                    steps: [
                        'step1',
                        'step2',
                        'step3'
                    ]
                }
            ]
        };
    }

    render() {
        return (
            <RecipesContainer>
                {
                    this.state.data.map((recipe, i) => {
                        return (
                            <RecipeCard key={i} recipe={recipe}/>
                        );
                    })
                }
            </RecipesContainer>
        );
    }
}