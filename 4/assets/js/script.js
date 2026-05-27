function calculateFunction() {
    // Отримуємо значення з полів вводу
    let xMin = parseFloat(document.getElementById('xMin').value);
    let xMax = parseFloat(document.getElementById('xMax').value);
    let step = parseFloat(document.getElementById('step').value);
    
    let resultContainer = document.getElementById('result-container');
    
    // Формуємо початок HTML-таблиці
    let tableHTML = `
        <table>
            <tr>
                <th>Значення x</th>
                <th>Значення W(x)</th>
            </tr>
    `;

    // Цикл для обчислення функції із заданим кроком
    for (let x = xMin; x <= xMax; x += step) {
        let w;
        
        // Розгалужений процес згідно з умовами варіанту 10
        if (x < -4) {
            w = Math.abs(x) + Math.tan(x); // |x| + tg(x)
        } else if (x === -4) {
            w = 23;                        // 23
        } else {
            w = Math.cos(x) + x;           // cos(x) + x
        }

        // Додаємо рядок з результатами до таблиці
        // toFixed(4) залишає 4 знаки після коми для красивого відображення
        tableHTML += `
            <tr>
                <td>${x}</td>
                <td>${w.toFixed(4)}</td>
            </tr>
        `;
    }

    // Закриваємо таблицю і виводимо її на екран
    tableHTML += `</table>`;
    resultContainer.innerHTML = tableHTML;
}