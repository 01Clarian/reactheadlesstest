import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types'
import axios from 'axios';

export class ArtistNewsItem extends Component {
    state = {
        imgUrl: '',
        author: '',
        isLoaded: false
    }
    
    static propTypes = {
        artistnews: PropTypes.object.isRequired
    }

componentDidMount() {
    const { featured_media} = this.props.artistnews;
    const getImageUrl = axios.get(`http://dev-secondpatheontest.pantheonsite.io/wp-json/wp/v2/media/${featured_media}`);
    Promise.all([getImageUrl]).then(res => {
        this.setState({
          imgUrl: res[0].data.media_details.sizes.full.source_url,
          isLoaded: true
       })
    })
}

    render() {
    const {id, title, excerpt} = this.props.artistnews;
    const {imgUrl, isLoaded} = this.state;
    if(isLoaded) {
        return (
            <div>
            <h2 style={{marginBottom: '0'}}>{title.rendered}</h2>
            <img style={{width:'50%'}} src={imgUrl} alt={title.rendered} />
            <div dangerouslySetInnerHTML={{__html: excerpt.rendered}} 
            />
            <Link to={`/reactheadlesstest/artistnews/${id}`}> More Info</Link>        
           
            </div>
        )
}
return null;
    }
}

export default ArtistNewsItem