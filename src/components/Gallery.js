
import React from 'react';
import {useStaticQuery, graphql} from 'gatsby';

import './gallery.css';

const Gallery = () => {
    const data = useStaticQuery(
        graphql`
        query CloudinaryImage {
            allCloudinaryMedia {
            edges {
                node {
                    secure_url
                    context {
                        custom {
                            alt
                            caption
                            movies
                        }
                    }
                    resource_type
                    tags
                }
            }
            }
        }`
    );
    const images = data.allCloudinaryMedia.edges
    return (
        <div>
            {images.map((image, index) => (
                <figure class="wave" key={`${index}-image`}>
                    <img 
                        src={image.node.secure_url} 
                        alt={image.node.context.custom.alt} 
                        title={`Known for ${image.node.context.custom.movies}`}>
                    </img>
                    <figcaption>{image.node.context.custom.caption}</figcaption>
                </figure>
                ))
            }
        </div>
    )
};

export default Gallery;