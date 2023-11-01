
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
        <header className="flex justify-between p-[5px] bg-black">
          <h1 className="text-white text-3xl font-bold mr-1">Imaginary</h1>
          <ul className="flex">
            <li className="mr-[10px]">
              <a
                href="https://github.com/atapas/imaginary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHub color="#ffffff" />
              </a>
            </li>
            <li className="mr-[10px]">
              <a
                href="https://www.freecodecamp.org/news/how-to-create-an-image-gallery-gatsby-and-cloudinary/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BookOpen color="#ffffff" />
              </a>
            </li>
            <li className="mr-[10px]">
              <a
                href="https://twitter.com/tapasadhikary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter color="#ffffff" />
              </a>
            </li>
          </ul>
        </header>
        <div className="mt-14 flex flex-row flex-wrap content-center justify-center items-center">
          {images.map((image, index) => (
            <a
              href={encodeURI(
                `https://google.com/search?q=${image.node.context.custom.caption}`
              )}
              target="_blank"
              rel="noopener noreferrer"
              key={`${index}-image`}
            >
              <figure className="wave flex flex-col content-center justify-center items-center m-5 w-[200px]">
                <img
                  src={image.node.secure_url}
                  alt={image.node.context.custom.alt}
                  className='block w-[200px] h-[250px] bg-black'
                ></img>
                <figcaption className='text-center'>{image.node.context.custom.caption}</figcaption>
              </figure>
            </a>
          ))}
        </div>
        <footer className='flex justify-center p-[10px]'>
          <p>
            &copy; {new Date().getFullYear()} Imaginary. Made with ❤️ by{" "}
            <a
              href="https://tapasadhikary.com"
              target="_blank"
              rel="noopener noreferrer"
              className='underline font-bold hover:no-underline'
            >
              Tapas Adhikary
            </a>
            .
          </p>
        </footer>
      </div>
    );
};

export default Gallery;
