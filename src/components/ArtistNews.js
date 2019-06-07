import React, {Component} from 'react'
import axios from 'axios';
import ArtistNewsItem from './ArtistNewsItem'

class ArtistNews extends Component {
state = {
    artistnews: [],
    isLoaded: false
}

componentDidMount() {
    axios.get('https://dev-secondpatheontest.pantheonsite.io/wp-json/wp/v2/artist_news')
    .then(res => this.setState({
        artistnews: res.data,
        isLoaded: true
    }))
    .catch(err => console.log(err));
}
render() {
    const {artistnews, isLoaded} = this.state;
    if(isLoaded) {
        return (
            <div>
                {artistnews.map(artistnews =>(
                    <ArtistNewsItem key={artistnews.id} artistnews={artistnews} />
                ))}
            </div>
        )
    }
    return <h3> Loading...</h3>
}
}

export default ArtistNews 