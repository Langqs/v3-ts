//修饰符（类中的成员的修饰符）：主要描述类中的成员（属性，构造函数，方法）的可访问性
// 类中的成员都有自己的默认修饰符，public
// public修饰符，类中成员默认的修饰符，代表公共的，任何位置都可以访问类中的成员
// private修饰符，类中的成员如果使用private来修饰，那么外部是无法访问这个数据的,当然，子类中也无法访问
// protected修饰符，类中的成员如果使用protected来修饰，那么外部是无法访问这个数据的，但是，子类中可以访问
// readonly修饰符：首先是一个关键字，对类的属性成员进行修饰，该属性成员，不能在外部被随意修改了
const xiu = ()=>{
    class Person{
        private name:string
        public constructor(name:string){
            this.name = name
        }
        public eat(){
            console.log('好吃',this.name)
        }
    }

    class Per2{
        constructor(readonly name:string='张三'){}
    }

    // 实例化对象
    const per = new Person('小狗')
    // 类的外部可以访问类中的属性成员
    // console.log(per.name);
    console.log(per.eat());
    
}
export default xiu