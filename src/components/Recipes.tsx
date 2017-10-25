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
                    name: 'Ice cream',
                    desc: `Ice cream is a sweetened frozen food typically eaten as a snack or dessert. 
                            It is usually made from dairy products, such as milk and cream, 
                            and often combined with fruits or other ingredients and flavors.`,
                    img: 'http://victoriabuzz.com/wp-content/uploads/2017/02/04-traits-ice-cream-chocolate.jpg',
                    author: 'Sent doa',
                    steps: [
                        'step1',
                        'step2',
                        'step3'
                    ],
                    tags: [
                        'tag1',
                        'tag2',
                        'tag3'
                    ]
                },
                {
                    name: 'Sauce',
                    desc: `In cooking, a sauce is a liquid, 
                        cream, or semi-solid food served on or used in preparing other foods. 
                        Sauces are not normally consumed by themselves; they add flavor, 
                        moisture, and visual appeal to another dish.`,
                    // tslint:disable-next-line:max-line-length
                    img: 'http://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/7/26/0/NY0100_neelys-bbq-sauce_s4x3.jpg.rend.hgtvcom.616.462.suffix/1371597847826.jpeg',
                    author: 'Sent doa',
                    steps: [
                        'step1',
                        'step2',
                        'step3'
                    ],
                    tags: [
                        'tag1',
                        'tag2',
                        'tag3'
                    ]
                },
                {
                    name: 'Pasta',
                    desc: `
                    Pasta is a staple food of traditional Italian cuisine, 
                    with the first reference dating to 1154 in Sicily.
                    `,
                    // tslint:disable-next-line:max-line-length
                    img: 'http://www.seriouseats.com/recipes/assets_c/2016/08/20160827-cherry-tomato-pasta-13-thumb-1500xauto-433876.jpg',
                    author: 'Sent doa',
                    steps: [
                        'step1',
                        'step2',
                        'step3'
                    ],
                    tags: [
                        'tag1',
                        'tag2',
                        'tag3'
                    ]
                },
                {
                    name: 'Peanut butter',
                    desc: `
                    Peanut butter is a food paste or spread made from ground dry roasted peanuts. 
                    It often contains additional ingredients that modify the taste or 
                    texture, such as salt, sweeteners or emulsifiers. 
                    Peanut butter is popular in many countries.
                    `,
                    // tslint:disable-next-line:max-line-length
                    img: 'http://food.fnr.sndimg.com/content/dam/images/food/fullset/2007/10/15/0/EA1112_Peanut_Butter.jpg.rend.hgtvcom.616.462.suffix/1382375731291.jpeg',
                    author: 'Sent doa',
                    steps: [
                        'step1',
                        'step2',
                        'step3'
                    ],
                    tags: [
                        'tag1',
                        'tag2',
                        'tag3'
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