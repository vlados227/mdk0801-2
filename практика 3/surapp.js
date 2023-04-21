alert("сюрприз");
for (let i = 1; i<=5; i++){
  setTimeout(() => {
    document.write('<h1>'+ i +'<h1/>');
  }, i * 1000);
  }

  let setbgc = () => {
    document.body.style.backgroundColor = 'red';
  }
setTimeout(setbgc, 5000);