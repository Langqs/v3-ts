// 泛型类：在定义类时, 为类中的属性或方法定义泛型类型 在创建类的实例时, 再指定特定的泛型类型
const fanLei = ()=>{
    // 定义一个泛型类
    class Gen<T>{
        value:T
        add:(x:T,y:T)=> T
    }

    // 实例化类的对象的时候，在确定泛型的类型
    const gen:Gen<number> = new Gen<number>()
    gen.value = 100
    gen.add = function (x:number,y:number){
        return x+y
    }
}
export default fanLei