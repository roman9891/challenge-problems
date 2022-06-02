
type Job = {id: string, deadline: number, profit: number}

type JobsArray = Job[]

type JobsArrayAgain = Array<Job>

const jobs: JobsArray = [
    {id: "a", deadline: 4, profit: 20},   
    {id: "b", deadline: 1, profit: 10},
    {id: "c", deadline: 1, profit: 40},  
    {id: "d", deadline: 1, profit: 30},
]

const jobs2: JobsArray = [
    {id: "a", deadline: 2, profit: 100},
    {id: "b", deadline: 1, profit: 19},
    {id: "c", deadline: 2, profit: 27},
    {id: "d", deadline: 1, profit: 25},
    {id: "e", deadline: 3, profit: 15},
]

const func = (jobs: JobsArray) => {
    // sort by deadline
    // object that tracks deadlines
    // iterate over deadlines
    // for each deadline
        // filter jobs at that deadline
        // map just profits
        // max profit


    // map that tracks deadlines and ids
    // sort jobs by profit descending
    // iterate over jobs to see if deadline is present
    // if not add id
    // else ignore

    const map = new Map<number, string>()

    jobs   
        .sort((job1, job2) => job2.profit - job1.profit)
        .forEach(job => {
            const jobAtTime = map.get(job.deadline)
            if (!jobAtTime) map.set(job.deadline, job.id)
            else {
                for (let i = job.deadline; i > 0; i--) {
                    const jobAtTime = map.get(i)
                    if (!jobAtTime) {
                        map.set(i, job.id)
                        break
                    }
                }
            }
        })
        
        console.log(map.values());
}

func(jobs)