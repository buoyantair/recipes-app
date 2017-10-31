import * as React from 'react';
import styled from 'styled-components';

import RecipeInterface from '../interfaces/RecipeInterface';

const centerTextLayout = `
    display: grid;
    grid-template-columns: 0.2fr 1fr 0.2fr;
    grid-template-rows: 0.2fr 1fr 0.2fr;

    > p {
        grid-row: 2/3;
        grid-column: 2/3;
    }
`;

const RecipeHeader = styled.div`
    min-height: 100vh;
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 0.5fr 5fr 0.5fr;

    > .img {
        display: grid;
        grid-column: 1/4;
        grid-template-columns: 0.2fr 1fr 0.2fr;
        grid-template-rows: 0.2fr .8fr .2fr 0.2fr;
        > h1 {
            grid-column: 2/3;
            grid-row: 2/3;
            align-self: end;
            color: #FFF;
            margin: 0;
            font-size: 4em;
            font-family: 'Dosis', sans-serif;
            text-shadow: 0px 2px 1px rgba(0,0,0,0.5);
        }
        > h3 {
            margin: 0;
            grid-column: 2/3;
            grid-row: 3/4;
            align-self: start;
            color: #FFF;
            font-size: 2em;
            font-family: 'Dosis', sans-serif;
            text-shadow: 0px 2px 1px rgba(0,0,0,0.5);
        }
    }
`;

const RecipeDesc = styled.div`
    ${centerTextLayout}
    > p {
        font-family: 'Oxygen', sans-serif;
    }
`;

const ListItemGroup = styled.div`
    display: grid;
    grid-gap: 1em;
    grid-column: 2/3;
    grid-row: 2/3;
`;

const ListItem = styled.div`
    background: #FFFFFF;
    min-height: 70px;
    box-shadow: 0px 5px 10px 1px rgba(64, 64, 64, 0.2);
    border-radius: 5px;
    ${centerTextLayout}
`;

const RecipeIngredients = styled.div`
    display: grid;
    grid-template-columns: 0.2fr 1fr 0.2fr;
    grid-template-rows: 0.2fr 1fr 0.2fr;
    background: #E5E5E5;
`;

export interface RecipeProps {
    location: {
        state: RecipeInterface;
    };
}

export interface RecipeState {
    recipe: RecipeInterface;
}

export default class Recipe extends React.Component<RecipeProps, RecipeState> {
    constructor(props: RecipeProps) {
        super(props);
        this.state = {
            recipe: this.props.location.state
        };
    }

    render () {
        return [
            <RecipeHeader key="header">
                <div className="img" style={{
                    background: `url('${this.state.recipe.img}') no-repeat`,
                    backgroundSize: 'cover'
                }}>
                    <h1>
                        {
                            this.state.recipe.name
                        }
                    </h1>
                    <h3>
                        by {this.state.recipe.author}
                    </h3>
                </div>
            </RecipeHeader>,
            <RecipeDesc key="desc">
                <p>
                    {
                        this.state.recipe.desc
                    }
                </p>
            </RecipeDesc>,
            <RecipeIngredients key="ingredients">
                <ListItemGroup>
                {
                    this.state.recipe.ingredients.map((ing, i) => {
                        return (
                            <ListItem key={i}>
                                <p>
                                    {
                                        ing
                                    }
                                </p>
                            </ListItem>
                        );
                    })
                }
                </ListItemGroup>
            </RecipeIngredients>
        ];
    }
}