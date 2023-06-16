const button = document.querySelector('#button')
const getIngredient = document.querySelector(`#nameId`)
const getQuantity = document.querySelector(`#quantityId`)
const getUnit = document.querySelector(`#unitId`)



const cLog = async ()  =>
{
    const onHandData =
        {
            ingredient: getIngredient.value,
            quantity: getQuantity.value,
            unit: getUnit.value
        }
    
    let response = await axios.post(`http://localhost:3001/api/onHand`,
    onHandData)

}

button.addEventListener('click', async (event) =>
{
    //event.preventDefault()
   await cLog()

})






const onHandList = document.querySelector('#onHandList');







// Function to delete an OnHand item
const deleteOnHandItem = async (_id) => {
    try {
      await axios.delete(`http://localhost:3001/api/onHand/${_id}`)
      fetchOnHandData(); // Refresh the list after deletion
    } catch (error) {
      console.log(error)
    }
  };



// Function to fetch and display OnHand data
const fetchOnHandData = async () => {
  try {
    const response = await axios.get('http://localhost:3001/api/onHand')
    const onHandData = response.data;

    // Clear the existing list
    onHandList.innerHTML = ''

    // Iterate over the OnHand data and create list items with delete buttons
    onHandData.forEach(item => {
      const listItem = document.createElement('li')
      listItem.textContent = `${item.ingredient} - ${item.quantity} ${item.unit}`
        
      const deleteButton = document.createElement('button')
      deleteButton.textContent = 'Delete'

      
      deleteButton.addEventListener('click', () => {
        deleteOnHandById(_id); 
      })

      listItem.appendChild(deleteButton)
      onHandList.appendChild(listItem)
    });
  } catch (error) {
    console.log(error)
  }
};





// Call the fetchOnHandData function to populate the list on page load
fetchOnHandData()


