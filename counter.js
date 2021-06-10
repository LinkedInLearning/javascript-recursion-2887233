/**
 * 
 * @param {Number} start 
 * @param {Number} end 
 */
function counter(start, end) {

    function repeat(current) {
        console.log(`start: ${start}, current: ${current}, end: ${end}`)
        if (current < end) {
            repeat(current + 1)
        }

    }
    repeat(start)
}

console.log(counter(2, 9))
