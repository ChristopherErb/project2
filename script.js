const button = document.querySelector('#button')
const getIngredient = document.querySelector(`#nameId`)
const getQuantity = document.querySelector(`#quantityId`)
const getUnit = document.querySelector(`#unitId`)

console.log('hello world')


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