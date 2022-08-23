
const han = ()=>{

    function add(x:number,y:number):number{
        return x+y
    }
    // 函数的完整写法
    let add2: (x: number, y: number) => number = function(x: number, y: number): number {
        return x + y
    }
}
export default han