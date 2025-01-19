export function applyInputRangeStyle() {

    const inputRange = document.querySelector("#range");
    console.log(inputRange)
    inputRange.addEventListener("input", (event) => {
      const currentInputValue = event.target.value;
      console.log(currentInputValue)
      const runnableTrackProgress = (currentInputValue / inputRange.max) * 100;
      inputRange.style.background = `linear-gradient(to right, var(--color-brand-1) ${runnableTrackProgress}%, var(--color-gray-5) ${runnableTrackProgress}%)`;
    });
    
  }