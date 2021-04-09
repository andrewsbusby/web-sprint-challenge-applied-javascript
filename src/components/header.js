const Header = (title, date, temp) => {
  const header = document.createElement('div');
  const sDate = document.createElement('span');
  const h1Title = document.createElement('h1');
  const sTemp = document.createElement('span')

  header.classList.add('header');
  sDate.classList.add('date');
  sTemp.classList.add('temp');

  header.append(sDate);
  header.append(h1Title);
  header.append(sTemp);

  sDate.textContent = `${date}`;
  h1Title.textContent = `${title}`;
  sTemp.textContent = `${temp}`;
  


  return header;
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
const entryPoint = document.querySelector('header-container');


const headerAppender = (entryPoint) => {
 Header('Lambda Times', 'April 9 2021', '65')
 const hArr = Array.from(Header);
    console.log(hArr);
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
}

export { Header, headerAppender }
