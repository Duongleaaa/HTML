// tạo một biến đếm step.
let currentStep = 1;
let prevButton = document.querySelector("#prev-button");
let nextButton = document.querySelector("#next-button");
let step1 = document.querySelector("#step1");
let step2 = document.querySelector("#step2");
let step3 = document.querySelector("#step3");
let step4 = document.querySelector("#step4");
//
function upProgress() {
  let steps = document.querySelectorAll(".marker");
  for (let i = 0; i < steps.length; i++) {
    let step = steps[i];
    if (i === currentStep - 1) {
      step.classList.add("active");
    } else {
      step.classList.remove("active");
    }
  }
}

function upButton() {
  if (currentStep === 1) {
    prevButton.disabled = true;
    prevButton.classList.add("disabled");
  } else {
    prevButton.disabled = false;
    prevButton.classList.remove("disabled");
  }

  if (currentStep === 4) {
    nextButton.disabled = true;
    nextButton.classList.add("disabled");
  } else {
    nextButton.disabled = false;
    nextButton.classList.remove("disabled");
  }
}
function upStep(step) {
  currentStep = step;
  upProgress();
  upButton();
}

function prevStep() {
  if (currentStep > 1) {
    currentStep--;
    upProgress();
    upButton();
  }
}

function nextStep() {
  if (currentStep < 4) {
    currentStep++;
    upProgress();
    upButton();
  }
}

// click nút
prevButton.onclick = function () {
  prevStep();
};
nextButton.onclick = function () {
  nextStep();
};
