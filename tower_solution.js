function tower(numberOfDiscs, source, destination, interchange) {
    if (numberOfDiscs === 1) { // last disc on the rod
        console.log(`Move the last disc from ${source} to ${destination}`)
        return
    } else {

        tower(numberOfDiscs - 1, source, interchange, destination) // initially move discs to from source to interchange using destination as middle rod
        console.log(`Move the current disc from ${source} to ${interchange}`)
        tower(numberOfDiscs - 1, interchange, destination, source) // later move disc from interchange to destination using source as middle rod
    }
}

console.log(tower(3, 'BlueRod', "RedRod", "OrangeRod"))
