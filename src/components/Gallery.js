
import React from 'react';
import {useStaticQuery, graphql} from 'gatsby';

import './gallery.css';

import { GitHub, Twitter, BookOpen } from 'react-feather';

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
                }
            }
            }
        }`
    );
    const images = data.allCloudinaryMedia.edges;
    return (
        <div>
            <header>
                <h1>Imaginary</h1>
                <ul className="links">
                    <li>
                        <a 
                            href="https://github.com/atapas/imaginary" 
                            target="_blank"
                            rel="noopener noreferrer">
                                <GitHub color="#ffffff" />
                        </a>
                    </li>
                    <li>
                        <a 
                            href="https://www.freecodecamp.org/news/how-to-create-an-image-gallery-gatsby-and-cloudinary/"
                            target="_blank"
                            rel="noopener noreferrer">
                                <BookOpen color="#ffffff" />
                            </a>
                    </li>
                    <li>
                        <a 
                            href="https://twitter.com/tapasadhikary"
                            target="_blank"
                            rel="noopener noreferrer">
                                <Twitter color="#ffffff" />
                        </a>
                    </li>
                </ul>
            </header>
            <div className="container">
                {images.map((image, index) => (
                    <a 
                        href={encodeURI(`https://google.com/search?q=${image.node.context.custom.caption}`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        key={`${index}-image`}>
                        <figure className="wave">
                            <img 
                                src={image.node.secure_url} 
                                alt={image.node.context.custom.alt} >
                            </img>
                            <figcaption>{image.node.context.custom.caption}</figcaption>
                        </figure>
                    </a>
                    ))
                }
            </div>
            <footer>
                <p>
                    &copy; {new Date().getFullYear()} Imaginary. Made with ❤️ by <a 
                    href="https://tapasadhikary.com"
                    target="_blank"
                    rel="noopener noreferrer">Tapas Adhikary</a>.
                </p>
            </footer>
        </div>
    )
};

export default Gallery;