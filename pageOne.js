const form = document.querySelector(".form");
const add = document.querySelector(".add");
const input = document.querySelectorAll("input");
const table = document.querySelector(".packageTable");
const tbody = document.querySelector(".tbody");
const places = document.querySelector(".places");
const edit = document.querySelector(".edit");
const deleteEntry = document.querySelector(".delete");
let data = [];
function addPackage(dataObj) {
  let template = `<tr data-id=${dataObj.id}>
  <td>${dataObj.package}</td>
  <td>${dataObj.rate}</td>
  <td>${dataObj.fromDate}</td>
  <td>${dataObj.toDate}</td>
  <td>${dataObj.number}</td>
  <td class="places">Add Places</td>
  <td class="edit">Edit</td>
  <td class="delete">Delete</td>
</tr>`;
  tbody.innerHTML = tbody.innerHTML + template;
  data.push(dataObj);
  console.log(data);
}
add.addEventListener("click", (e) => {
  const formDataObj = {};
  let flag = 1;

  const formData = new FormData(form);

  formData.forEach((value, key) => {
    if (value == "") {
      flag = 0;
    } else {
      formDataObj[key] = value;
    }
  });
  formDataObj["id"] = Math.floor(Math.random() * 1000);
  console.log(formDataObj);
  //   if (flag === 0) {
  //     alert("Please enter all details");
  //     return;
  //   } else {
  //     console.log("all ok");
  //   }
  addPackage(formDataObj);
});
places.forEach((place) => {
  place.addEventListener("click", handleAddPlaces);
});
function handleAddPlaces(e) {
  console.log("fsdf");
  const trElem = e.target.closest("tr");
  const packageId = trElem.getAttribute("data-id");
  window.location.href = `pageTwo.html?packageId=${packageId}`;
}
