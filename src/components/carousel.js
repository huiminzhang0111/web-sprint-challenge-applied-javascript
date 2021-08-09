



const Carousel = (image_array) => {
  //instantiating the elements
  const img1 = document.createElement('img');
  const img2 = document.createElement('img');
  const img3 = document.createElement('img');
  const left_button = document.createElement('button');
  const right_button = document.createElement('button');

  //setting class names, attributes, and txt
  img1.setAttribute('src', 'https://picsum.photos/200/300');
  img2.setAttribute('src', 'https://picsum.photos/200/300');
  img3.setAttribute('src', 'https://picsum.photos/200/300');
  left_button.classList.add('left-button');
  right_button.classList.add('right-button');
  img2.classList.add('carousel');
  img2.classList.add('carousel');
  img2.classList.add('carousel');
  //creating hierarchy
  

  return the_header;

  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
}

const carouselAppender  = (selector) => {
  document.querySelector(selector).appendChild(headermain);
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
}

export { Carousel, carouselAppender }
