// Создать массив аудиторий академии. Объект-аудитория состоит из  
// названия,количества посадочных мест (от 10 до 20) и названия факультета, для которого она предназначена. 
// Написать несколько функций для работы с ним

// 1.Вывод на экран всех аудиторий;
// 2.Вывод на экран аудиторий для указанного факультета;
// 3.Вывод на экран только тех аудиторий, которые подходят для переданной группы. 
//Объект-группа состоит из названия, количества студентов и названия факультета;
// 4.Функция сортировки аудиторий по количеству мест;
// 5.Функция сортировки аудиторий по названию (по алфавиту).

const academyAditorium = [{
        nameAudience: 'teacher',
        numberSeats: 10,
        nameFaculty: 'pedagogical',
    },
    {
        nameAudience: 'doctor',
        numberSeats: 13,
        nameFaculty: 'medical',
    },
    {
        nameAudience: 'economist',
        numberSeats: 20,
        nameFaculty: 'economic',
    },
    {
        nameAudience: 'lawyer',
        numberSeats: 15,
        nameFaculty: 'juridical',
    }
];
console.log(academyAditorium)
academyAditorium.forEach(function(item) {
    document.write('<div> name: ' + item.nameAudience + '</div>')
})

const searchAudienceByFaculty = function(audienceByFaculty) {
    const result = academyAditorium.find(function(itemAudiences) {
        return itemAudiences.nameFaculty === audienceByFaculty;
    })
    return result.nameAudience
}
searchAudienceByFaculty('juridical');
console.log(searchAudienceByFaculty('juridical'));

const sortByNumberSeats = academyAditorium.slice();
sortByNumberSeats.sort(function(a, b) {
    if (a.numberSeats > b.numberSeats) return 1;
    if (a.numberSeats == b.numberSeats) return 0;
    if (a.numberSeats < b.numberSeats) return -1;
});

const sortByNameAudience = academyAditorium.slice();
sortByNameAudience.sort(function(a, b) {
    if (a.nameAudience < b.nameAudience) { return -1; }
    if (a.nameAudience > b.nameAudience) { return 1; }
    return 0;
})
console.log(sortByNameAudience)