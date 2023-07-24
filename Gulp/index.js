function displayTable() {
  const form = document.getElementById("registrationForm");
  const table = document.getElementById("dataTable");

  table.innerHTML = "";

  const headerRow = document.createElement("tr");
  const headers = ["Ім'я", "Прізвище", "Дата народження", "Стать", "Місто", "Адреса", "Мови, якими володіє"];
  for (const headerText of headers) {
    const headerCell = document.createElement("th");
    headerCell.textContent = headerText;
    headerRow.appendChild(headerCell);
  }
  table.appendChild(headerRow);

  const dataRow = document.createElement("tr");
  const firstName = form.elements.firstName.value;
  const lastName = form.elements.lastName.value;
  const birthdate = form.elements.birthdate.value;
  const gender = form.elements.gender.value;
  const city = form.elements.city.value;
  const address = form.elements.address.value;
  const languages = Array.from(form.elements.languages)
    .filter((checkbox) => checkbox.checked)
    .map((checkbox) => checkbox.value)
    .join(", ");

  const userData = [firstName, lastName, birthdate, gender, city, address, languages];
  for (const data of userData) {
    const dataCell = document.createElement("td");
    dataCell.textContent = data;
    dataRow.appendChild(dataCell);
  }
  table.appendChild(dataRow);

  table.style.display = "table";
}
