const Header = (title, date, temp) => {

  // CREATING ELEMENTS
  const head = document.createElement('div');
  const dateS = document.createElement('span');
  const h1Title = document.createElement('h1');
  const tempS = document.createElement('span');

  // ADDING CLASSES
  head.classList.add('header');
  dateS.classList.add('date');
  tempS.classList.add('temp');

  // APPENDING
  head.append(dateS);
  head.append(h1Title);
  head.append(tempS);

  // TEXT CONTENT
  dateS.textContent = `${date}`;
  h1Title.textContent = `${title}`;
  tempS.textContent = `${temp}`;

  return head;
}
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

  const headerAppender = (selector) =>{
    const head = Header('Lambda Time', 'May 7 2021', '72');
    document.querySelector(selector).append(head);
  }



  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //


export { Header, headerAppender }
