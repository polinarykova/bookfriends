import React, {Component} from "react";
import CardList from "../components/CardList.js";
import {books} from '../components/books.js';
import SearchBox from '../components/SearchBox.js';
import Scroll from '../components/Scroll.js';
import ErrorBounry from "../components/ErrorBoundry.js";

class App extends Component {
    constructor() {
        super();
        this.state = {
            books: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        this.setState({books: books})
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
    }

    render() {
        const filteredBooks = this.state.books.filter(book => {
            return book.title.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        return(
            <div className='tc'>
                <h1 className='tc f1 serif i b'>BookFriends</h1>
                <SearchBox searchChange = {this.onSearchChange}/>
                <Scroll>
                    <ErrorBounry>
                        <CardList books={filteredBooks} />
                    </ErrorBounry>
                </Scroll>
            </div>
        );
    }
}

export default App;