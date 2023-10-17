const sliderWrapper = document.querySelector(".slider-wrapper");
const sliderInput = sliderWrapper.querySelector(".slider-input");

const minValue = +sliderInput.min || 0;
const maxValue = +sliderInput.max || 100;

const updateSlider = () => {
  sliderWrapper.style.setProperty("--slider-value", (100 * +sliderInput.value) / (maxValue - minValue));
};

sliderInput.addEventListener("input", () => {
  updateSlider();
});

updateSlider();
