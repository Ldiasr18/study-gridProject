document.body.style.margin = "1px;"
document.body.style.cssText="display: flex; flex-direction: column; justify-content: center; align-items: center; background-color: #a0a0a0"
const container = document.querySelector(".container");
container.style.cssText = "display: flex; flex-wrap: wrap; gap: 2px; width: 960px; height: 960px;"
const submitBtn = document.getElementById("submitBtn");



function createGrid(numberColumns, numberRows) {
    container.innerHTML = '';
    for (let i = 0; i < numberColumns; i++) {
        // Create column
        let column = document.createElement("div");
        column.className = "column";
        column.style.cssText = "display: flex; gap: 1px; flex-direction: column; flex: 1 0 0; box-sizing: border-box;";
        //create row
        for (let j = 0; j < numberRows; j++) {
            let cell = document.createElement("div");
            cell.className = "cell";
            cell.style.cssText = "border: 1px solid black; box-sizing: border-box; flex: 1 0 0; aspect-ratio: 1/1; background-color: #606060";
            cell.addEventListener("mouseover", ()=>{
                cell.style.backgroundColor = "#303030";
            })
            column.appendChild(cell);
        }
        container.appendChild(column);
    }
}

//maybe just let the user enter one value and make it square always
submitBtn.addEventListener("click", ()=>{
        const numberColumns = parseInt(document.getElementById("columnNumber").value)
        const numberRows = parseInt(document.getElementById("rowNumber").value)
        if(numberColumns < 1 || numberColumns > 100 || isNaN(numberColumns)){
            alert("Number of columns must be between 1 and 100.");
            return;
        }
        if(numberRows < 1 || numberRows > 100 || isNaN(numberRows)){
            alert("Number of rows must be between 1 and 100.")
            return;
        }
        createGrid(numberColumns, numberRows);
    })
