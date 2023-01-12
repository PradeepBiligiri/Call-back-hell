var a = 10;

var element = document.getElementById("count");
// element.innerHTML = a;

// var a = a - 1;
setTimeout(() => {
  element.innerHTML = a;

  setTimeout(() => {
    element.innerHTML = a--;
    console.log("10");
    setTimeout(() => {
      element.innerHTML = a--;
      console.log("9");
      setTimeout(() => {
        element.innerHTML = a--;
        console.log("8");
        setTimeout(() => {
          element.innerHTML = a--;
          console.log("7");
          setTimeout(() => {
            element.innerHTML = a--;
            console.log("6");
            setTimeout(() => {
              element.innerHTML = a--;
              console.log("5");
              setTimeout(() => {
                element.innerHTML = a--;
                console.log("4");
                setTimeout(() => {
                  element.innerHTML = a--;
                  console.log("3");
                  setTimeout(() => {
                    element.innerHTML = a--;
                    console.log("2");
                    setTimeout(() => {
                      element.innerHTML = a--;
                      console.log("1");
                      setTimeout(() => {
                        element.innerHTML = "Happy new year 2023 🎉🎇🎆🎊";
                        console.log("Happy new year 2023 ");
                      }, 1000);
                    }, 1000);
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
});
