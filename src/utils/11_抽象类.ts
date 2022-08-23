// 抽象类：包含抽象方法（抽象方法一般没有任何的具体内容的实现），也可以包含实例方法，抽象类是不能被实例化的，
//        为了让子类进行实例化及实现内部的抽象方法
const chou = ()=>{
    // 定义一个抽象类
    abstract class Animal {
        // 抽象属性(不常用)
        // abstract name:string
        // 抽象方法,不能有具体的实现,必须由子类继承时重写
        abstract eat()
        // 实例方法
        run(){
            console.log('你好');
            
        }
    }

    // 定义一个子类
    class Dog extends Animal{
        // 重新实现抽象类中的 抽象属性
        // name:string = '张三'
        // 重新实现抽象类中的 抽象方法
        eat() {
            console.log('1');
        }
    }

    const dog:Dog = new Dog()
    console.log(dog.eat());
    console.log(dog.run());
    

    // 不能实例化抽象类的对象
    // const ani:Animal = new Animal()
}
export default chou