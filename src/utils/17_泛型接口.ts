
// 泛型接口：在定义接口时, 为接口中的属性或方法定义泛型类型，在使用接口时, 再指定具体的泛型类型
const fanJie=()=>{
    // 定义一个类，用来存储用户的相关信息
    class User{
        id?:number
        name:string
        age:number
        constructor(name:string,age:number){
            this.name = name
            this.age = age
        }
    }

    // 定义一个泛型接口
    interface IbaseCRUD<T>{
        data:Array<T>
        add:(t:T)=>void
        getUserId:(id:number)=>T
    }

    // 定义一个类，可以针对用户的信息对象尽心增删改查
    class UserCRUD implements IbaseCRUD<User>{
        data:Array<User> = []
        add(user:User):void{
            //产生用户id
            user.id = Date.now()
            // 把用户信息对象添加到data数组中
            this.data.push(user)
        }
        // 根据id查询指定的用户信息对象
        getUserId(id:number):User{
            return this.data.find(user=>{
                return user.id == id
            })
        }
    }

    //实例化添加用户对象的类 UserCRUD
    const userCRUD:UserCRUD = new UserCRUD()
    userCRUD.add(new User('张三',18))


}
export default fanJie