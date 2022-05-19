const tableBody = document.querySelector('.content');
const badge = document.querySelector('.badge');
const nameInput = document.querySelector('#specificSizeInputName');
const usernameInput = document.querySelector('#specificSizeInputGroupUsername');
const genderInput = document.querySelector('#specificSizeSelect');
const submitBtn = document.querySelector('.submit-btn');

const createTableDoc = (contextData, newRowTable) => {
  const newTableDoc = document.createElement('td');
  newTableDoc.innerHTML = contextData;
  newRowTable.appendChild(newTableDoc);
}

submitBtn.addEventListener('click', () => {
  const dataArr = [genderInput.value, nameInput.value, usernameInput.value]
  let badgeNum = parseInt(badge.innerHTML)

  const newRowTable = document.createElement('tr');
  for(let i of dataArr) {
    createTableDoc(i, newRowTable)
  }

  tableBody.appendChild(newRowTable)
  badge.innerHTML = badgeNum + 1
})