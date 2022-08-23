// 多态：父类型的引用指向了子类型的对象，把不同类型的对象针对相同的方法，产生了不同的行为
const duo = ()=>{
    // 定义一个父类
    class Animal{
        //定义属性
        name:string
        // 定义构造器函数
        constructor(name:string){
            // 更新对象中的数据
            this.name = name
        }
        // 定义实例方法
        sayHi(str:number = 0){
            console.log(`我是${this.name}，我跑了 `,str,'米');
            
        }
    }

    // 定义子一个类，继承自Animal
    class Dog extends Animal{
        constructor(name:string){
            // 调用的是父类中的构造器，使用的是super
            super(name)
        }
        // 可以调用父类的方法
        sayHi(str: number= 5): void {
            console.log(`我是${this.name}，我跑了 `,str,'米');
        }
    }
    // 定义子一个类，继承自Animal
    class Pig extends Animal{
        constructor(name:string){
            // 调用的是父类中的构造器，使用的是super
            super(name)
        }
        // 可以调用父类的方法
        sayHi(str: number= 10): void {
            console.log(`我是${this.name}，我跑了 `,str,'米');
        }
    }
    
    // 实例化Animal(父类)
    const animal:Animal = new Animal('动物')
    animal.sayHi()
    // 实例化Dog(子类)
    const dog:Animal = new Dog('小狗')
    dog.sayHi()
    // 实例化pig(子类)
    const pig:Animal = new Pig('小猪')
    pig.sayHi()

    // 该函数需要的参数是Animal类型的
    function showRun(ani:Animal):void{
        ani.sayHi()
    }

    showRun(dog)
    showRun(pig)
}
export default duo