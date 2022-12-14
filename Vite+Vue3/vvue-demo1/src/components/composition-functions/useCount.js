// import { ref } from 'vue'

// const useCount = () => {
//   const count = ref(0)
//   const handleClick = () => {
//     return count.value++
//   }

//   return {
//     count,
//     handleClick
//   }
// }


// export default useCount

import { ref } from 'vue'
const useCount = () => {
  const count = ref(0)
  const add = () => {
    count.value++
  }

  return {
    count,
    add
  }
}
export default useCount