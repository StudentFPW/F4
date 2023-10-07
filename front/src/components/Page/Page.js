import React from 'react';
import axios from 'axios';

import withRouter from '../withRouter/withRouter';

class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            name: "",
            text: "",
            category: "",
            func: null,
        };
    };

    componentDidMount() {
        this.updateItems();
    };

    updateItems() {
        // console.log("Page loaded")
        // console.log(this.props.params.page)
        axios.get(`http://127.0.0.1:8000/recipes/${this.props.params.page}`)
            // .then(response => console.log(response.data))
            .then(
                (response) => {
                    this.setState({
                        isLoaded: true,
                        name: response.data.name,
                        text: response.data.text,
                        func: this.getCategory(response.data.category)
                    })
                }
            )
            .catch((error) => { console.log(error) });
    };

    getCategory(url) {
        // console.log(`Loading ${url}`);
        axios.get(url)
            // .then(response => console.log(response.data.name))
            .then((response) => { this.setState({ category: response.data.name }) })
            .catch((error) => { console.log(error) });
    };

    render() {
        // console.log(this.props.query)
        // console.log(this.props.location)
        return !this.state.isLoaded ? <h1>"loading..."</h1> : (
            <React.Fragment>
                <h1>{this.state.name}</h1>
                <p>{this.state.text}</p>
                <small>Category: {this.state.category}</small>
            </React.Fragment>
        );
    };
};

export default withRouter(Page);