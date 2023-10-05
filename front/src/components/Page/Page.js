import React from 'react';
import axios from 'axios';

import withRouter from '../withRouter/withRouter';

class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            items: []
        };
    };

    componentDidMount() {
        this.updateItems();
    };

    updateItems() {
        axios.get(`http://127.0.0.1:8000/recipes/?category=${this.props.params.page}`)
            // .then(response => console.log(response))
            .then(
                response => {
                    this.setState({
                        isLoaded: true,
                        items: response.data.results
                    });
                }
            )
            .catch(error => { console.log(error) })
    };

    render() {
        return !this.state.isLoaded ? "loading..." : (
            <ul>
                {
                    this.state.items.map(
                        (item, index) => <li key={index + 1}>
                            {item.name} <br />
                            {item.text}
                        </li>)
                }
            </ul>
        )
    };
}

export default withRouter(Page);