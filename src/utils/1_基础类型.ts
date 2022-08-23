 const bx = ()=>{
    //基本数据类型
    const num:number = 123
    let str:string = ''
    let tr:boolean = false
    tr = true

    const und:undefined = undefined
    const unl:null = null
    // undefined 和 null 都可以作为其他类型的子类型，把undefined 和null 复制给其他类型的变量
    let st:string = undefined
    console.log(st = '');

    //数组类型
    //数组定义方式一
    const arr1:number[] = [10,20,30] 
    //数组定义方式二 泛型的写法
    const arr2:Array<number> = [10,20,30]
    const arr4:Array<number|string> = [10,20,30,'a','true']

    //元祖类型tuple(元素就是固定长度的数组) : 在定义数组的时候，类型和数据的个数一开始就已经限定了
    const arr3:[string,number,boolean] = ['srt',100,false]

    // 类型别名
    type my = 1|2|3|4|5
    let aa:my = 1
    let bb:my = 5

    // 枚举类型: 枚举里面的每个数据值都可以叫元素，每个元素都有自己的编号，编号是从0开始的，依次递增1，也可以手动改变
    enum Color{
        red=1,
        green,
        blue
    }
    let color:Color = Color.red
    console.log(color);
    console.log(Color.red,Color.green,Color.blue);
    console.log(Color[3]);
    
    // any 类型 当一个数组中要存储多个数据，个数不确定，类型不确定
    let str1 :any = 100
    let arr:any[] = [100,'str',false]
    let str4:number = 1
    str4 = str1 // 可以赋值给任何类型

    // unknown 表示未知类型的值,在赋值时不会污染其他类型值
    let str2:unknown
    str2 = 'hello'
    let str3:number=1
    // str3 = str2 //不能赋值给其他类型
    
    // void 类型: 在函数声明的时候，小括号后面使用:void,代表该函数没有任何的返回值
    function showMsg():void {
        console.log('返回值为undefined或null也是一样');
        return undefined
    }

    // ?表示可有可无
    let a:{name:string,age?:number}
    a = {name:'张三',age:18}

    // [propName:string]:any 表示任意类型的属性
    let b:{name:string,[propName:string]:any}
    b={name:'张三',age:18,green:'男'}

    // object 类型
    function getObj(str:object):object {
        console.log(str); 
        return {name:'张三'}
    }
	function getObj2(str:Record<any,any>):void 
	// (str:object) is error
	console.log(str.name); 
    }
    console.log(getObj([1,2]));

    // never 永远不会返回结果
    function obj(str:string):never{ 
        throw new Error('报错了')
    }
    
    // 联合类型( Union Types ) 表示取值可以为多种类型中的一种
    // 类型断言 ：告诉编译器，我知道自己是什么类型，也知道自己在干嘛 (<string>str)或(str as string)
    function getLength(str:string|number):number{
        if((<string>str).length){
            return (str as string).length
        }else{
            return str.toString().length
        }
    }

    //类型推断：没有明确指出类型的时候推测出一个类型
    // let x= 100
    // x = '200'

}
export default bx