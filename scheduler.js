//input will be array of arrays
//sub arrays contain start and end time of meetings
//return least amount of meeting rooms necessary to host all meetings

const scheduler = arr => {
    let rooms = []
    rooms.push([arr[0]])

    for (let i = 1; i < arr.length; i++) {
        let meeting = arr[i],
            start = meeting[0],
            end = meeting[1],
            noSpace = true

        for (let j = 0; j < rooms.length; j++) {
            let room = rooms[j]
            let space = true
            
            for (let k = 0; k < room.length; k++) {
                let scheduledMeeting = room[k]
                //if start is between SM start and end or end is between scheduled start or end
                if ((start >= scheduledMeeting[0] && start < scheduledMeeting[1]) || (end > scheduledMeeting[0] && end <= scheduledMeeting[1])) {
                    space = false
                    break
                }
            }

            if (space) {
                room.push(meeting)
                noSpace = false
                break
            }
        }
        if (noSpace) {
            rooms.push([meeting])
        }
    }
    return rooms.length
}

console.log(scheduler([[10,12],[12,14],[14,16]]))
console.log(scheduler([[10,12],[11,13],[11,14]]))
console.log(scheduler([[9,9.5],[7,9],[8,10],[9.5,10]]))