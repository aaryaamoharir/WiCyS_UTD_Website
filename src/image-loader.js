// src/image-loader.js

// 1. Import the images from their paths within the src folder
import logoURL from './NEWWiCySLogotoplinestackedhoriz.png';
import heroImageURL from './privacy-image.jpg';

// 2. Find the img elements by their IDs and set their src attribute
document.getElementById('logo-img').src = logoURL;
document.getElementById('hero-img').src = heroImageURL;