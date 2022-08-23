// 可选参数:函数在声明时，内部参数使用了?进行修饰，表示可传可不传
// 默认参数:函数在声明时，内部参数有自己的默认值
const ke = ()=>{
    //
    const getFullName = (firstName:string = '诸葛',lastName?:string):string=>{
        if (firstName) {
            return firstName+'-'+lastName
        }else{
            return firstName
        }
    }

    console.log(getFullName());
    console.log(getFullName('欧阳'));
    console.log(getFullName('诸葛','孔明'));
    
}
export default ke