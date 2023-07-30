function solution(arr, queries) {
    return queries.reduce((acc, cur, idx, origin) => {
        const copyAcc = [...acc]
        const [to, from] = cur
        const box = acc[to]
        copyAcc[to] = copyAcc[from]
        copyAcc[from] = box
        return copyAcc
    }, [...arr])
}