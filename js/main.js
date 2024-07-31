const container = document.querySelector(".container");
document.body.style.margin = "1px"
container.style.cssText = "display: flex; flex-wrap: wrap; gap: 2px; width: 960px; height: 960px;"



for(let i = 0; i <= 6; i++){
    // Create row
    let row = document.createElement("div");
    row.className = "column";
    row.style.cssText = "display: flex; gap: 1px; flex-direction: column; flex: 1 0 0; box-sizing: border-box;";

    for(let j = 0; j <= 6; j++){
        let column = document.createElement("div");
        column.className = "row";
        column.style.cssText = "border: 1px solid black; background-color: white; box-sizing: border-box; flex: 1 0 0; aspect-ratio: 1/1; background-color: green";
        row.appendChild(column);
    }
    container.appendChild(row);
}