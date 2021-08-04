
window.onload = function()
{
    const initPerson = personGenerator.getPerson();
   /* document.getElementById('firstNameOutput').innerText = initPerson.firstName;

    document.getElementById('genderOutput').innerText = initPerson.gender;
    document.getElementById('surnameOutput').innerText = initPerson.surName;
    document.getElementById('birthYearOutput').innerText = initPerson.birthYear;
    document.getElementById('middleNameOutput').innerText = initPerson.middleName;
    document.getElementById('Job').innerText = initPerson.job;
    document.getElementById('birthMonthOutput').innerText = initPerson.birthMonth;
    document.getElementById('birthDayOutput').innerText = initPerson.birthDay;
*/
    
};
document.getElementById('btn').addEventListener('click', function () {
    const initPerson = personGenerator.getPerson();
    document.getElementById('firstNameOutput').innerText = 'Генерация имени';

    document.getElementById('genderOutput').innerText ='Генерация пола' ;
    document.getElementById('surnameOutput').innerText = 'Генерация фамилии';
    document.getElementById('birthYearOutput').innerText = 'Генерация года рождения';
    document.getElementById('middleNameOutput').innerText = 'Генерация отчества';
    document.getElementById('Job').innerText = 'Генерация профессии';
    document.getElementById('birthMonthOutput').innerText ='Генерация месяца рождения' ;
    document.getElementById('birthDayOutput').innerText = 'Генерация дня рождения';
 
})


document.getElementById('generation').addEventListener('click', function () {
    
    const initPerson = personGenerator.getPerson();
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;

    document.getElementById('genderOutput').innerText = initPerson.gender;
    document.getElementById('surnameOutput').innerText = initPerson.surName;
    document.getElementById('birthYearOutput').innerText = initPerson.birthYear;
    document.getElementById('middleNameOutput').innerText = initPerson.middleName;
    document.getElementById('Job').innerText = initPerson.job;
    document.getElementById('birthMonthOutput').innerText = initPerson.birthMonth;
    document.getElementById('birthDayOutput').innerText = initPerson.birthDay;
})

