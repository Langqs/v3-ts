const llx = ()=>{
    //类 类型： 类的类型，类的类型可以通过接口来实现

    //定义一个接口
    interface IFly{
        //该方法没有任何的实现（方法中什么都没有）
        fly()
    }

    // 定义一个类，这个类的类型就是上面定义的接口
    class Person implements IFly{
        fly() {
            console.log('111');
            
        }
    }

    //实例化对象
    const person = new Person()
    person.fly()

    //定义一个接口
    interface Isiw{
        siw()
    }

    //定义一个类，这个类的类型就是IFly,Isiw（当前这个类可以实现多个接口，一个类同时也可以被多个接口约束）
    class Person2 implements IFly,Isiw{
        fly() {
            console.log(1);
        }
        siw() {
            console.log(2);
        }
    }

    // 定义一个接口，继承其他的多个接口
    interface Ifs extends IFly,Isiw{}
    // 定义一个类，直接实现Ifs这个接口
    class Person3 implements Ifs{
        fly() {
            console.log(1);
        }
        siw() {
            console.log(2);
        }
    }

    const person3 = new Person3()
    person3.fly()

    // 总结：接口和接口之间叫继承（使用的是extends关键字），类和接口之间叫实现（使用的是implemnets关键字）
}
export default llx