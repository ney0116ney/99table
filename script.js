var table = document.getElementById("99table");
var start = 2;
var end = 9;
const headerRow = document.createElement("tr");
for(i = start;i<= end;i++)
{
    const th = document.createElement("th");
    th.textContent = i;
    headerRow.appendChild(th);
}
table.appendChild(headerRow);

for (let j = 1; j <= 9; j++) {
    const row = document.createElement("tr");
    for (let i = start; i <= end; i++) {
        const td = document.createElement("td");
        td.textContent = `${i} × ${j} = ${i * j}`;
        row.appendChild(td);
    }
    table.appendChild(row);
}
