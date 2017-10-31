import * as React from 'react';
import styled from 'styled-components';
import { 
    NavLink
  } from 'react-router-dom';

const HeaderContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr 2fr .5fr; 
    background: #2f323a;
    font-family: 'Open Sans', sans-serif;
    color: #FFF;
    grid-auto-rows: 70px;
    align-items: center;
`;

const Menu = styled.div`
    display: grid;
    grid-template-columns: repeat(4, .8fr);
    grid-gap: 1em;
    grid-column: 3/4;
    > div,a {
        transition: background 0.5s;
        grid-auto-rows: 70px;
        display: grid;
        align-items: center;
        justify-items: center;
        color: inherit;
        text-decoration: none;
    }
    > div:hover, a:hover {
        background: rgba(0,0,0,0.5);
        cursor: pointer;
    }

    > .activepage {
        background: rgba(0,0,0,0.5);
    }
`;

const Brand = styled.h2`
    display: grid;
    justify-items: center;
    align-items: center;
    grid-row: 1/2;
    grid-auto-rows: 70px;
`;

export interface Props {
    
}

export default class Header extends React.Component<Props, object> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <HeaderContainer>
                <Brand>Recipes App</Brand>
                <Menu>
                    <NavLink to="/" exact={true} activeClassName="activepage">
                        Home
                    </NavLink>
                    <NavLink to="/recipes" activeClassName="activepage">
                        Recipes
                    </NavLink>
                    <NavLink to="/add" activeClassName="activepage">
                        Add
                    </NavLink>
                    <NavLink to="/about" activeClassName="activepage">
                        About
                    </NavLink>
                </Menu>
            </HeaderContainer>
        );
    }
}