const random = Math.floor(Math.random() * 3);
const elRefreshBtn = document.querySelector(".hero__result-btn");
const area = document.querySelector(".hero__btn-wrapper");
const elResult = document.querySelector(".hero__result");
const elTitle = document.querySelector(".hero__result-title");
const arr = ["rock", "paper", "screw"];
console.log(arr[random]);
const elBtn = document.querySelectorAll(".hero__btn");

elBtn.forEach((item, index) => {
  item.addEventListener("click", function () {
    const dataType = item.getAttribute("data-type");
    area.innerHTML = `<button class="hero__btn btn-${item.getAttribute(
      "data-type"
    )}" data-type=${item.getAttribute("data-type")}></button>
    <button class="hero__btn btn-${arr[random]}" data-type=${
      arr[random]
    }></button>`;
    elResult.classList.add("open");
    if (dataType == "paper" && arr[random] == "rock") {
      elTitle.textContent = "YOU WIN";
    } else if (dataType == "paper" && arr[random] == "paper") {
      elTitle.textContent = "DRAW";
    } else if (dataType == "paper" && arr[random] == "screw") {
      elTitle.textContent = "YOU LOOSE";
    } else if (dataType == "screw" && arr[random] == "rock") {
      elTitle.textContent = "YOU LOOSE";
    } else if (dataType == "screw" && arr[random] == "paper") {
      elTitle.textContent = "YOU WIN";
    } else if (dataType == "screw" && arr[random] == "screw") {
      elTitle.textContent = "DRAW";
    } else if (dataType == "rock" && arr[random] == "rock") {
      elTitle.textContent = "DRAW";
    } else if (dataType == "rock" && arr[random] == "paper") {
      elTitle.textContent = "YOU LOOSE";
    } else if (dataType == "rock" && arr[random] == "screw") {
      elTitle.textContent = "YOU WIN";
    }
  });
});

elRefreshBtn.addEventListener("click", function () {
  location.reload();
});
