import * as React from 'react';

export interface AddProps {

}

export interface AddState {
    
}

export default class Add extends React.Component<AddProps, AddState> {
    constructor(props: AddProps) {
        super(props);
    }

    render() {
        return (
            <div>
                Hello world! This is where you add things!
            </div>
        );
    }
}