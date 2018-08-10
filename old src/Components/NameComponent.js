import React, { Component } from 'react';


class NameComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            ChildUser: 'Child Component'
        }
    }


    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
        if (this.state.user !== nextProps.user && nextProps.user) {
            if (nextProps.user.includes(' ') > -1) {
                this.setState({
                    ChildUser: 'Space found in parent'
                })
            }
            else {
                this.setState({
                    ChildUser: 'space not found in parent'
                })
            }
        }
    }

    render() {
        const { user } = this.props;
        const { ChildUser } = this.state;
        var Name = 'Vivek this is child component'
        return (
            <div className="text-large">
                <p>{ChildUser}</p>
                <h1 style={{ color: 'blue' }}>{user ? user : 'No Name'}</h1>
            </div>

        );
    }
}

export default NameComponent;
