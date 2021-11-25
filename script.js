// Берем счетчик который мы писали на и добавляем к нему возможность

// Подсчитывать сколько раз были вызваны функции (increase, decrease, get)
// Добавить метод getStatistic который вернет на объект с данными которые 
// мы подсчитывали в пункте выше
// Добавить метод который будет обнулять наш счетчик

class Counter {
	constructor(number) {

		this.a = number
	}
	increaseCount = 0;
	decreaseCount = 0;
	getCount = 0;

	increase(num) {
		this.increaseCount++
		return this.a += num
	}
	decrease(num) {
		this.decreaseCount++
		return this.a -= num
	}
	get() {
		this.getCount++
		return this.a
	}
	getStatistic() {
		return {
			["increaseCount"]: this.increaseCount,
			["decreaseCount"]: this.decreaseCount,
			["getCount"]: this.getCount,
		}
	}
	refreshCount() {
		this.increaseCount = this.decreaseCount = this.getCount = 0;
		return "Counters were refreshed"
	}
}

let numb = new Counter(25)

console.log(numb.increase(5));
console.log(numb.increase(5));
console.log(numb.decrease(2));
console.log(numb.get());
console.log(numb.getStatistic());
console.log(numb.refreshCount());
console.log(numb.getStatistic(5));


