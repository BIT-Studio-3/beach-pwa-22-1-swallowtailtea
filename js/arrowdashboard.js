const rotate = [22.5, 45, 67.5, 90, 112.5, 135, 157.5, 180, 202.5, 225, 247, 270, 292.5, 315, 337.5 ]
const compassarr = ["north-northeast", "northeast", "east-northeast", "east", "east-southeast", "southeast", "south-southeast", "south", "south-southwest", "southwest", "west-southwest", "west", "west-northwest", "northwest", "north-northwest"] 


const compRotate = (compass) => {
    for (let i = 0; i < compass.length; i++) {
        if (compassarr[i] == compass) {
            document.querySelector("#weatherarrow").style.transform = `"rotate(${rotate[i]}360deg)"`;
        }       
    }
}