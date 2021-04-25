export const getListFromLocalStorage = () => {
   if (!localStorage.length) return []
   let keys = Object.keys(localStorage)
   let list = []
   for (const key of keys)
      list.push(JSON.parse(localStorage.getItem(key)))
   return list
}

