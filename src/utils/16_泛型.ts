// 泛型：在定义函数，接口，类的时候不能预先确定要使用的数据的类型，而是在使用的时候才能确定数据的类型
const fan=()=>{
    function cArray <T> (value: T, count: number) {
        const arr: Array<T> = []
        for (let index = 0; index < count; index++) {
          arr.push(value)
        }
        return arr
      }
      const arr3 = cArray<number>(11, 3)
      console.log(arr3[0].toFixed())

      const arr4 = cArray<string>('aa', 3)
      console.log(arr4[0].split(''))

      // 多个泛型参数的函数
      function swap <K, V> (a: K, b: V): [K, V] {
        return [a, b]
      }
      const result = swap<string, number>('abc', 123)
      console.log(result[0].length, result[1].toFixed())
}
export default fan