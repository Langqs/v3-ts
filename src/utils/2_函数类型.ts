const hs = ()=>{
    // 函数类型： 通过接口的方式作为函数的类型来使用
    // 定义一个接口，用来作为某个函数的类型使用
    interface ISearch{
        (source:string, subString:string):boolean
    }

    // 定义一个函数，该类型就是上面定义的接口
    const searchStr:ISearch = function(source:string, subString:string):boolean{
        // 在source中查找subString这个字符串
        return source.search(subString) > -1
    }

    // 调用函数
    console.log(searchStr('123','1'));
    
}
export default hs