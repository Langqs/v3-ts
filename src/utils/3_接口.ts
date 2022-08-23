const jk = ()=>{
    //接口 :是对象的状态（属性）和行为（方法）的抽象（描述）
    /* 接口类型的对象
            多了或者少了属性是不允许的
            可选属性：?
            只读属性：readonly
    */
    interface IPersion{
        readonly id:number
        name:string
        age: number
        sex?:string
        }

   const person:IPersion = {
    id : 1,
    name : '张三',
    age : 18,
    // sex : '女'
   }

}
export default jk