const button = document.querySelector('#button')
const getIngredient = document.querySelector('#nameId')
const getQuantity = document.querySelector('#quantityId')
const getUnit = document.querySelector('#unitId')

const cLog = async () => {
  const onHandData = {
    ingredient: getIngredient.value,
    quantity: getQuantity.value,
    unit: getUnit.value,
  };

  try {
    await axios.post('http://localhost:3001/api/onHand', onHandData)
    fetchOnHandData()
  } catch (error) {
    console.log(error)
  }
};

button.addEventListener('click', async (event) => {
  event.preventDefault()
  await cLog()
});

const onHandList = document.querySelector('#onHandList')

// delete item
const deleteOnHandItem = async (itemId) => {
  try {
    await axios.delete(`http://localhost:3001/api/onHand/${itemId}`)
    fetchOnHandData(); // Refresh list again
  } catch (error) {
    console.log(error)
  }
};

// get and display data
const fetchOnHandData = async () => {
  try {
    const response = await axios.get('http://localhost:3001/api/onHand');
    const onHandData = response.data;

    // clear screen
    onHandList.innerHTML = ''

    // iterae over buttons
    onHandData.forEach((item) => {
      const listItem = document.createElement('li');
      listItem.textContent = `${item.ingredient} - ${item.quantity} ${item.unit}`

      const deleteButton = document.createElement('button')
      deleteButton.textContent = 'Delete'

      deleteButton.addEventListener('click', () => {
        deleteOnHandItem(item._id);
      });

      listItem.appendChild(deleteButton)
      onHandList.appendChild(listItem)
    });
  } catch (error) {
    console.log(error)
  }
};

// run
fetchOnHandData()