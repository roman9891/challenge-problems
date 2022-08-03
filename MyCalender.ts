// https://leetcode.com/problems/my-calendar-i/

// You are implementing a program to use as your calendar. 
// We can add a new event if adding the event will not cause a double booking.
// A double booking happens when two events have some non-empty intersection (i.e., some moment is common to both events.).
// The event can be represented as a pair of integers start and end that represents a booking on the half-open interval 
// [start, end), the range of real numbers x such that start <= x < end.
// Implement the MyCalendar class:
// MyCalendar() Initializes the calendar object.
// boolean book(int start, int end) Returns true if the event can be added to the calendar successfully 
// without causing a double booking. Otherwise, return false and do not add the event to the calendar.
 
// Example 1:
// Input
// ["MyCalendar", "book", "book", "book"]
// [[], [10, 20], [15, 25], [20, 30]]
// Output
// [null, true, false, true]
// Explanation
// MyCalendar myCalendar = new MyCalendar();
// myCalendar.book(10, 20); // return True
// myCalendar.book(15, 25); // return False, It can not be booked because time 15 is already booked by another event.
// myCalendar.book(20, 30); // return True, The event can be booked, as the first event takes every time less than 20, but not including 20.
 
// Constraints:
// 0 <= start < end <= 109
// At most 1000 calls will be made to book.

class MyCalendarFailure {
    // bookings object that holds booked dates
    bookings: {[key: string]: boolean} = {}

    constructor(){}

    book(start: number, end: number): boolean | null {
        // if improper input return null
        // loop from start to end
        // if current value exists in bookings return false
        // first loop only checks availability
        // loop again from start to end and mark values as true in object
        for (let i = start; i < end; i++) {
            if (this.bookings[i]) return false
        }

        for (let i = start; i < end; i++) {
            this.bookings[i] = true
        }

        return true
    }
}

class MyCalendar {
    // bookings 2D array
    bookings: number[][] = []

    constructor(){}

    book(start: number, end: number): boolean | null {
        // check start against bookings
        // iterate through bookings until start date equal or greater than start
        // if equal return false
        // else if greater
        // check if prev end is less than or equal to start
        // and next start is greater than or equal to end
        // if so return index
        // else return false
        // if index is equal to length then push in
        // otherwise splice at index
        if (!this.bookings.length) {
            this.bookings.push([start, end])
            return true
        }

        const availableIndex = this.checkBookings(start, end)

        if (availableIndex === null) return false

        if (availableIndex === this.bookings.length) this.bookings.push([start, end])
        else this.bookings.splice(availableIndex, 0, [start, end])

        return true
    }

    checkBookings(start: number, end: number): number | null {
        for (let i = 0; i < this.bookings.length; i++) {
            if (this.bookings[i][0] === start) {
                return null
            }
            else if (this.bookings[i][0] >= end) {
                if (!this.bookings[i-1]) return i
                if (this.bookings[i-1][1] <= start) return i
                else {
                    break
                }
            } else if (i === this.bookings.length - 1 && this.bookings[i][1] <= start) return i + 1
        }
        return null
    }
}

const myCalendar = new MyCalendar();
console.log(myCalendar.book(10, 20)); // return True
console.log(myCalendar.book(15, 25)); // return False, It can not be booked because time 15 is already booked by another event.
console.log(myCalendar.book(20, 30)); // return True, The event can be booked, as the first event takes every time less than 20, but not including 20.
console.log(myCalendar.book(30, 35)); // return True, The event can be booked, as the first event takes every time less than 20, but not including 20.
console.log(myCalendar.book(0, 5)); // return True, The event can be booked, as the first event takes every time less than 20, but not including 20.
console.log(myCalendar.book(5, 11)); // return True, The event can be booked, as the first event takes every time less than 20, but not including 20.
 