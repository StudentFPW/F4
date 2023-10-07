import React from 'react';
import axios from 'axios';

class Category extends React.Component {
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
        // console.log("Category loaded");
        axios.get("http://127.0.0.1:8000/category/")
            // .then(response => console.log(response.data.results))
            .then(
                (response) => {
                    this.setState({
                        isLoaded: true,
                        items: response.data.results
                    });
                }
            )
            .catch((error) => { console.log(error) });
    };

    render() {
        return !this.state.isLoaded ? "loading..." : (
            <ul>
                {
                    this.state.items.map((item, index) => <li key={index + 1}>

                        <a href={`/category${item.url.slice(-3, -1)}`} target="_blank" rel="noreferrer">
                            <button>{item.name}</button>
                        </a>

                    </li>)
                }
            </ul>
        );
    };
};

export default Category;