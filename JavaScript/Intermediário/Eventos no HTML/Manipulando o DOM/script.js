function saveHouse() {
    // pegar propriedade value de cada elemento
        let area = document.querySelector("input[name='area']").value
    //("input[name='area']") procurar elemento
        let number = document.querySelector("input[name='number']").value
        let neighborhood = document.querySelector("input[name='neighborhood']").value
        let city = document.querySelector("input[name='city']").value

    //createElement vai criar elementos na li
        let newListValue = document.createElement("li")

    // innerText vai acrescentar um texto
        newListValue.innerText = area + "m², número " + number + " (" + neighborhood + " - " + city + ")"
        let removeButton = document.createElement("button")
        removeButton.type = "button"
        removeButton.innerText = "Remover"
        removeButton.setAttribute("onclick", "removeHouse(this)")
        newListValue.appendChild(removeButton)
        document.getElementById("house-list").appendChild(newListValue)
    }
    function removeHouse(button) {
        let liToRemove = button.parentNode
        document.getElementById("house-list").removeChild(liToRemove)
    }