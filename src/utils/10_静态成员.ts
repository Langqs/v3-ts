// 静态成员：在类中通过static修饰的属性或方法，那么就是静态的属性及静态的方法，也称之为静态成员
// 静态成员在使用的时候是通过类名.的这种原发来调用的
const jin = ()=>{
    class Person{
        static name1:string = '张三'
        // 构造函数是不能用
        constructor(name:string){
            // 此时this是实例对象，name1是静态属性，不能通过实例对象直接调用静态属性来使用
            // this.name1 = name
        }
        // 静态方法是不能用static来修饰的
        static sayHi(){
            console.log('你好');
        }
    }

    const person = new Person('')
    // 实例对象无法访问静态成员
    // console.log(person.name1);
    // console.log(person.sayHi());

    // 通过类名.静态属性(方法)的方式来访问该成员数据(方法)
    console.log(Person.name1);
    console.log(Person.sayHi());
    
    
}
export default jin