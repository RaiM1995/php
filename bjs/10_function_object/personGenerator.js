const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,
    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Вероника",
            "id_2": "Виктория",
            "id_3": "Галина",
            "id_4": "Дарья",
            "id_5": "Диана",
            "id_6": "Ева",
            "id_7": "Евгения",
            "id_8": "Елена",
            "id_9": "Елизавета",
            "id_10": "Инна"
        }
    }`,
    birthYearJson: `{  
        "count": 15,
        "list": {
            "id_1": "1978",
            "id_2": "1985",
            "id_3": "2000",
            "id_4": "2001",
            "id_5": "1998",
            "id_6": "1940",
            "id_7": "2015",
            "id_8": "1970",
            "id_9": "1980",
            "id_10": "1990",
            "id_11": "1993",
            "id_12": "2004",
            "id_13": "1968",
            "id_14": "1987",
            "id_15": "1997",
            "id_16": "1989"
        }
    }`,
    middleNameJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Степан",
            "id_6": "Владимир",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Олег"
        }
    }`,
    maleJobJson: `{
        "count": 10,
        "list": {     
            "id_1": "летчик  ",
            "id_2": "шахтер",
            "id_3": "лесоруб",
            "id_4": "сантехник",
            "id_5": "милиционер",
            "id_6": "телохранитель",
            "id_7": "охранник",
            "id_8": "пожарный",
            "id_9": "военный",
            "id_10": "дальнобойщик"
        }
    }`,
    femaleJobJson: `{
        "count": 10,
        "list": {     
            "id_1": "косметолог",
            "id_2": "визажист ",
            "id_3": "няня",
            "id_4": "медсестра",
            "id_5": "горничная",
            "id_6": "дизайнер",
            "id_7": "кассир ",
            "id_8": "товаровед",
            "id_9": "швея",
            "id_10": "Дизайнер"
        }
    }`,
    dayJson: `{  
        "count": 31,
        "list": {
            "id_1": "1",
            "id_2": "2",
            "id_3": "3",
            "id_4": "4",
            "id_5": "5",
            "id_6": "6",
            "id_7": "7",
            "id_8": "8",
            "id_9": "9",
            "id_10": "10",
            "id_11": "11",
            "id_12": "12",
            "id_13": "13",
            "id_14": "14",
            "id_15": "15",
            "id_16": "16",
            "id_17": "17",
            "id_18": "18",
            "id_19": "19",
            "id_20": "20",
            "id_21": "21",
            "id_22": "22",
            "id_23": "23",
            "id_24": "24",
            "id_25": "25",
            "id_26": "26",
            "id_27": "27",
            "id_28": "28",
            "id_29": "29",
            "id_30": "30",
            "id_31": "31"

        }
    }`,
    monthJson: `{  
        "count": 12,
        "list": {
            "id_1": "Января",
            "id_2": "Февраля",
            "id_3": "Марта",
            "id_4": "Апреля",
            "id_5": "Мая",
            "id_6": "Июня",
            "id_7": "Июля",
            "id_8": "Августа",
            "id_9": "Сентября",
            "id_10": "Октября",
            "id_11": "Ноября",
            "id_12": "Декабря"
           
        }
    }`,

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomGender: function() {
        return (this.randomIntNumber()==1)?this.GENDER_MALE:this.GENDER_FEMALE;

    },
    randomValue: function (json) {
        const obj = JSON.parse(json);
        if(this.person.birthMonth=='Февраля'){
        const prop = `id_${this.randomIntNumber(28, 1)}`; }  //for define of birthmonth 
        if(this.person.birthMonth=='Апреля'||this.person.birthMonth=='Июня'||this.person.birthMonth=='Сентября'||this.person.birthMonth=='Ноября'){
        const prop = `id_${this.randomIntNumber(30, 1)}`; } //for define of birthmonth 


        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;// this = personGenerator
        return obj.list[prop];
    },
    randomJob: function() {

        if(this.person.gender=='Мужчина')
        return this.randomValue(this.maleJobJson);

        if(this.person.gender=='Женщина')
     return this.randomValue(this.femaleJobJson);

    },
    randomFirstName: function() {

        if(this.person.gender=='Мужчина')
        return this.randomValue(this.firstNameMaleJson);

        if(this.person.gender=='Женщина')
     return this.randomValue(this.firstNameFemaleJson);

    },
    randomBirthYear: function() {

       
        return this.randomValue(this.birthYearJson);

     

    },
    randomBirthMonth: function() {

       
        return this.randomValue(this.monthJson);

     

    },
    randomBirthDay: function() {

       
        return this.randomValue(this.dayJson);

     

    },

     randomSurname: function() {
        if(this.person.gender=='Мужчина')
        return this.randomValue(this.surnameJson);
        if(this.person.gender=='Женщина')
        return this.randomValue(this.surnameJson)+'a';

    },

    randomMiddlename: function() {
        if(this.person.gender=='Мужчина')
        return this.randomValue(this.middleNameJson)+'ович';
        if(this.person.gender=='Женщина')
        return this.randomValue(this.middleNameJson)+'овна';

    },

    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName();
        this.person.surName = this.randomSurname();
        this.person.birthYear = this.randomBirthYear();
        this.person.middleName = this.randomMiddlename();
        this.person.job = this.randomJob();
       this.person.birthMonth = this.randomBirthMonth();
        this.person.birthDay = this.randomBirthDay();

        return this.person;
    }
};
