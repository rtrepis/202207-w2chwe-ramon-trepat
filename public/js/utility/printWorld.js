export const printWorld = (nextWorld) => {
  let worldHTML = `<table class="word-cells">`;

  nextWorld.forEach((row, coordinateX) => {
    worldHTML += `<tr class="row ${coordinateX}" height="10">`;
    row.forEach((cell, coordinateY) => {
      worldHTML += `<td class="cell x-${coordinateX} y-${coordinateY} ${cell}" width="10"></td>`;
    });
    worldHTML += `</tr>`;
  });
  worldHTML += `</table>`;

  const printedWorld = document.getElementById("container");
  printedWorld.innerHTML = worldHTML;
};

export default printWorld;
