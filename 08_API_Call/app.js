const btn = document.querySelector("button")
const errorM = document.querySelector('.errorMsg')
btn.addEventListener("click", fetchData)

async function fetchData() {
    try {
        const response = await fetch(`https://opendata.bordeaux-metropole.fr/api/records/1.0/search/?dataset=bor_frequentation_piscine_tr&q=`)
        
        if (!response.ok) {
            throw new Error(`Erreur: ${response.status}`)
        }
        
        const data = await response.json()
        // btnChange()
        // displayData(data);
        console.log(data)
    }
    catch (error) {
        // btnChange()
        errorM.textContent = `${error}`
    }
}