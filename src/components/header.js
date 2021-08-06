const Header = (title, date, temp) => {
  //instantiating the elements
  const the_header = document.createElement('header');
  const the_date = document.createElement('span');
  const the_title = document.createElement('h1');
  const the_temp = document.createElement('span');
  //setting class names, attributes, and txt
  the_header.classList.add('header');
  the_date.classList.add('date');
  the_temp.classList.add('temp');

  the_date.textContent = ` ${date} `;
  the_title.textContent = ` ${title} `;
  the_temp.textContent = ` ${temp} `;
  //creating hierarchy
  the_header.appendChild(the_date);
  the_header.appendChild(the_title);
  the_header.appendChild(the_temp);

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

const headermain = Header('Lambda Times', 'Jan 6, 2021', '26 degrees');
const headerAppender = (selector) => {
  document.querySelector(selector).appendChild(headermain);
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
}

export { Header, headerAppender }
