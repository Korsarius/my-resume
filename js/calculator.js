const multSelect = document.getElementById("calculator-form-technologies");
const calculatorForm = document.querySelector(".calculator-form");

const technologiesMultiSelect = new Choices(multSelect, {
  allowSearch: false,
  silent: false,
  renderChoiceLimit: -1,
  maxItemCount: -1,
  removeItems: true,
  removeItemButton: true,
  editItems: false,
  duplicateItemsAllowed: false,
  delimiter: ",",
  paste: true,
  searchEnabled: false,
  searchChoices: true,
  searchResultLimit: -1,
  position: "auto",
  resetScrollPosition: true,
  shouldSort: true,
  shouldSortItems: false,
  placeholder: true,
  noChoicesText: "No available options",
  itemSelectText: "Click to select",
  classNames: {
    containerInner: "choices__inner tech-input-container",
    input: "choices__input",
  },
});

calculateSum();

function extractPriceFromValue(str) {
  const price = str.match(/:\d+/);

  if (price) {
    return Number(price[0].slice(1)) || 0;
  }

  return 0;
}

function getTechnologiesSum(technologiesArr) {
  let totalSum = 0;

  for (let item of technologiesArr) {
    totalSum = totalSum + extractPriceFromValue(item.value);
  }

  return totalSum;
}

function convertCartOptionToPrice(option) {
  if (option === "yes") {
    return 300;
  }

  return 0;
}

function convertReceptionOptionToPrice(option) {
  if (option === "yes") {
    return 500;
  }

  return 0;
}

function renderSum(sum) {
  const costElement = document.querySelector(".calculator-form-total-cost");

  costElement.textContent = "Calculating...";

  setTimeout(() => (costElement.textContent = sum + "$"), 2000);
}

function calculateSum() {
  //   Selectors
  const websiteType = document.getElementById("calculator-form-website-type");
  const websiteShoppingCart = document.querySelector(
    "#radio-container-cart input:checked"
  );
  const websiteReception = document.querySelector(
    "#radio-container-reception input:checked"
  );

  //   Selectors value
  const websiteTypeValue = extractPriceFromValue(websiteType.value);
  const technologiesValue = getTechnologiesSum(
    technologiesMultiSelect.getValue()
  );
  const websiteShoppingCartValue = convertCartOptionToPrice(
    websiteShoppingCart.value
  );
  const websiteReceptionValue = convertReceptionOptionToPrice(
    websiteReception.value
  );

  const totalSum =
    websiteTypeValue +
    technologiesValue +
    websiteShoppingCartValue +
    websiteReceptionValue;

  renderSum(totalSum);
}

calculatorForm.addEventListener("submit", (event) => {
  event.preventDefault();
  calculateSum();
});
