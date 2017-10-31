import * as React from 'react';
import styled, { keyframes } from 'styled-components';

import { Link } from 'react-router-dom';

import RecipeInterface from '../interfaces/RecipeInterface';

const slideInAnim = keyframes`
    0% {
        opacity: 0;
        transform: translateY(25px);
    }
    100% {
        opacity: 100%;
        transform: translateY(0px);
    }
`;

const gradientAnim = keyframes`
    0% {
		background-position: 0% 0%
	}
	50% {
		background-position: 50% 0%
	}
	100% {
		background-position: 0% 0%
	}
`;

interface ContainerProps { 
    img: string; 
}

const RecipeContainer = styled(Link)`
    display: grid;
    background: #FFF;
    box-shadow: 0px 5px 10px 1px rgba(0, 0, 0, 0.2);
    background: url(${(props: ContainerProps) => props.img});
    background-size: cover;
    margin: 1em;
    grid-template-rows: 3fr 1fr;
    animation: ${slideInAnim} 1s;
    transition: background .5s;
    text-decoration: none;
    color: #FFF;
    > div {
        background: linear-gradient(-135deg, transparent 40%, rgba(0,0,0,0.8), transparent, rgba(0,0,0,1), transparent);
        font-size: 1em;
        color: #FFF;
        text-shadow: 0px 2px 5px rgba(0,0,0,0.5);
        padding: 1em;
        grid-row: 2/3;
        transition: all .5s;
        background-size: 400% 400%;
    }

    &:hover {
        cursor: pointer;        
        > div {
            ${props => {
                return (
                    'linear-gradient(-135deg, transparent, rgba(0,0,0,0.8), transparent, rgba(0,0,0,1), transparent, rgba(0,0,0,0.5));'
                );
            }}    
            background-size: 400% 400%;
            animation: ${gradientAnim} 20s ease infinite;
        }
    }
`;

export interface Props {
    recipe: RecipeInterface;
}

export default class RecipeCard extends React.Component<Props, object> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <RecipeContainer 
                to={{
                    pathname: `/recipes/${this.props.recipe.id}`,
                    state: this.props.recipe
                }} 
                img={this.props.recipe.img}>
                <div>
                    <h2>{this.props.recipe.name}</h2>
                    <p>
                        {this.props.recipe.desc}
                    </p>
                </div>           
            </RecipeContainer>
        );
    }
}