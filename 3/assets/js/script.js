
const resultsDiv = document.getElementById('math-results');

let output = "<h3>КОНСТАНТИ</h3>";

output += "1. Значення константи e = " + Math.E + "<br>";
output += "2. Значення константи π = " + Math.PI + "<br>";
output += "3. Десятковий логарифм постійної Ейлера (e) = " + Math.LOG10E + "<br>";
output += "4. Двійковий логарифм постійної Ейлера (e) = " + Math.LOG2E + "<br>";
output += "5. Натуральний логарифм числа 10 = " + Math.LN10 + "<br>";
output += "6. Натуральний логарифм числа 2 = " + Math.LN2 + "<br>";
output += "7. Корінь квадратний із двох = " + Math.SQRT2 + "<br>";
output += "8. Корінь квадратний з однієї другої = " + Math.SQRT1_2 + "<br>";


output += "<h3>ФУНКЦІЇ (Варіант 10)</h3>";
output += "10. Результат обчислення арксинуса одиниці: y = " + Math.asin(1) + "<br>";
output += "11. Тангенс 45 градусів (π/4 радіан): y = " + Math.tan(Math.PI/4) + "<br>";
output += "12. Результат обчислення арктангенса одиниці: y = " + Math.atan(1) + "<br>";
output += "13. Результат зведення e в степінь 2: y = " + Math.exp(2) + "<br>";
output += "14. Натуральний логарифм від e^2: y = " + Math.log(Math.exp(2)) + "<br>"; // Math.exp(2) це e^2

output += "<h3>ГЕНЕРАТОР ВИПАДКОВИХ ЧИСЕЛ</h3>";
output += "Формування випадкових чисел в інтервалі [0;1]: y = " + Math.random();


resultsDiv.innerHTML = output;