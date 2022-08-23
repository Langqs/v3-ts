// 存取器：让我们可以有效的控制对 对象中的成员的访问，通过getter和setter来进行操作
const cun = ()=>{
    class Person{
        firstName:string
        lastName:string
        constructor(firstName:string,lastName:string){
            this.firstName = firstName
            this.lastName = lastName
        }
        get fullName(){
            return this.firstName+'_'+this.lastName
        }
        set fullName(val){
            let names= val.split('_')
            this.firstName = names[0]
            this.lastName = names[1]
        }
    }

    const person = new Person('东方','不败')
    console.log(person.fullName);
    person.fullName = '诸葛_孔明'
    console.log(person.fullName);
    
    
}
export default cun