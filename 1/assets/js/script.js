let userName = prompt('Введіть ваше ім\'я та прізвище:', '');
let position = prompt('Введіть вашу професію:', '');
let phone = prompt('Введіть ваш телефон:', '');

if (!userName) userName = "Ім'я не вказано";
if (!position) position = "Професія не вказана";
if (!phone) phone = "Телефон не вказано";

let visitcard = 
    '<table class="inner-table">' +
        '<tr>' +
            '<td align="center" valign="middle" width="30%">' +
                '<img src="assets/images/visit_card.png" alt="Логотип" class="logo-img">' +
            '</td>' +
            '<td align="center">' +
                '<b>' + userName + '</b><br>' +
                '<i>' + position + '</i><br>' +
                '<span class="phone-text">' + phone + '</span>' +
            '</td>' +
        '</tr>' +
    '</table>';

document.write('<table class="main-table">');

for (let y = 0; y < 12; y++) {
    document.write('<tr>');
    
    for (let x = 0; x < 3; x++) {
        document.write('<td class="card-cell" align="center" valign="middle">');
        document.write(visitcard);
        document.write('</td>');
    }
    document.write('</tr>');
}
document.write('</table>');