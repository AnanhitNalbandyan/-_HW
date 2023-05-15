const findClosestLift=(floor, lifts)=> {
    let closestLift = null
    let closestDistance = Infinity

    for (let i = 0; i < lifts.length; i++) {
        const lift = lifts[i]
        const distance = Math.abs(lift.position - floor)
        if (distance < closestDistance) {
            closestDistance = distance
            closestLift = lift
        }
    }

    return closestLift
}

// Пример использования
const lifts = [
    { name: 'Лифт А', position: 0 },
    { name: 'Лифт В', position: 8 }
]

findClosestLift(5, lifts)

 // Функция Math.abs() принимает один аргумент, число, и возвращает его абсолютное значение.Если число положительное или ноль, то оно возвращается без изменений.Если число отрицательное, то оно возвращается со знаком минус удаленным.Например:

