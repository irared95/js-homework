const car = {
    manufacturer: 'UA',
    model: 'BMW',
    year: '2020',
    averageSpeed: 60,
    showInfo: function() {
        console.log(
            'manufacturer:' + this.manufacturer + ', ' +
            'model:' + this.model + ', ' +
            'year:' + this.year + ', ' +
            'averageSpeed:' + this.averageSpeed + ', '
        )
    },
    calcDistance: function(distance) {
        let timeInWay = distance / this.averageSpeed;
        let timeInRest = (timeInWay % 4 == 0) ? (timeInWay / 4 | 0) - 1 : timeInWay / 4 | 0;
        let timeTotal = distance / this.averageSpeed + timeInRest;
        console.log(timeTotal)
    }
}
car.showInfo()
car.calcDistance(22)