import React, {Component, Fragment} from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom'

export class ArtistNewsPage extends Component {
    state = {
        artistnews: {},
        isLoaded: false
    }

    componentDidMount() {
        axios.get(`http://dev-secondpatheontest.pantheonsite.io/wp-json/wp/v2/artist_news/${this.props.match.params.id}`)
        .then(res => this.setState({
            artistnews: res.data,
            isLoaded: true
        }))
        .catch(err =>console.log(err));
    }

    render() {
        const {artistnews, isLoaded} = this.state;
        if(isLoaded) {

        return (
            <Fragment>
                <Link to='/reactheadlesstest/'>Go Back</Link>
                <hr/>
                <h1>{artistnews.title.rendered}</h1>
                <div dangerouslySetInnerHTML={{__html:artistnews.content.rendered}}></div>
            </Fragment>
        )
    }
    return <h3> Loading....</h3>
    }
}

export default ArtistNewsPage