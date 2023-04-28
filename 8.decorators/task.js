//Задача № 1
function cachingDecoratorNew(func) {
    let cache = [];

    function wrapper(...args){
        const hash = md5(args);
        let objectInCache = cache.find((item) => item.hash === hash);
        let index = cache.findIndex((i) => i.hash === hash)
        if (objectInCache){
            console.log("Из кэша: " + cache[index].result);
            return  "Из кэша: " + cache[index].result;
        }
        
        let result = func(...args);
        cache.push({hash, result});
        if(cache.length >5){
            cache.shift();
        }
        console.log("Вычисляем: " + result);
        return "Вычисляем: " + result;
    }
    return wrapper;
}


//Задача № 2
function debounceDecoratorNew(func, delay) {
  let timeoutId = null;

  function wrapper(...args){
    if(!timeoutId) {
        func(...args);
        wrapper.count++;
    }
    if(timeoutId){
        clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
        func(...args);
        wrapper.count++;
    }, delay, wrapper.allCount++);
  }
  wrapper.count = 0;
  wrapper.allCount = 0;
  return wrapper;
}
