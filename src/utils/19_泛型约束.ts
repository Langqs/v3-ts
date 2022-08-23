// 泛型约束：如果我们直接对一个泛型参数取 length 属性, 会报错, 因为这个泛型根本就不知道它有这个属性
const yue = ()=>{
    // 没有泛型约束
    function fn<T>(x:T):void{
        // x.length
    }

    // 定义一个接口，用来约束将来某个类型中必须要有length属性
    interface Ilength{
        length:number
    }
    function fn2 <T extends Ilength> (x:T):void{
        x.length
    }

    // console.log(fn2(100));
    console.log(fn2('100'));
    
}
export default yue