// 继承：类与类之间的关系
/* 继承后类与类之间的叫法：
    A类继承了B这个类，那么此时A类叫子类，B类叫基类
    子类--->派生类
    基类--->超类（父类）
    一旦发生了继承的关系，就出现了父子类的关系（叫法）
*/
const jic = ()=>{
    // 定义一个类，作为基类
    class Person{
        //定义属性
        name:string
        age: number
        gender:string
        // 定义构造器函数：为了将来实例化对象的时候，可以直接对属性的值进行初始化
        constructor(name:string='张三',age: number=18,gender:string='男'){
            // 更新对象中的数据
            this.name = name
            this.age = age
            this.gender = gender
        }
        // 定义实例方法
        sayHi(str:string){
            console.log(`大家好，我是${this.name}，今年${this.age}岁，我是${this.gender}孩，`,str);
            
        }
    }

    // 定义一个类，继承自Person
    class Student extends Person{
        constructor(name:string='张三',age: number=18,gender:string='男'){
            // 调用的是父类中的构造器，使用的是super
            super(name,age,gender)
        }
        // 可以调用父类的方法
        sayHi(str: string): void {
            super.sayHi(str)
        }
    }
    
    // 实例化Person
    const person = new Person()
    person.sayHi('1')
    // 实例化Student
    const stu = new Student()
    stu.sayHi('2')
    // 总结：类和类之前如果要有继承关系，需要使用extends关键字
    // 子类中可以调用父类中的构造函数，使用的是super关键字(包括调用父类中的实例方法，也可以使用super)
    // 子类中可以重写父类的方法
}
export default jic