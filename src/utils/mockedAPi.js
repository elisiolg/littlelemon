const allTimeSlots = [ '17:00','18:00','19:00','20:00', '21:00', '22:00'];

// https://stackoverflow.com/questions/962802/is-it-correct-to-use-javascript-array-sort-method-for-shuffling#962890
const shuffleArray = (array) => {
    var tmp, current, top = array.length;

    if(top) while(--top) {
        current = Math.floor(Math.random() * (top + 1));
        tmp = array[current];
        array[current] = array[top];
        array[top] = tmp;
    }

    return array;
}

const getRandomTimeSlotsAvailable = () => {
    const numberOfSLotsAvailable = Math.floor(Math.random() * (allTimeSlots.length + 1))

    if(numberOfSLotsAvailable) {
        const shuffledTimeSlots = shuffleArray(allTimeSlots)

        return (shuffledTimeSlots.slice(0, numberOfSLotsAvailable)).sort();
    }

    return [];
}

export const fetchAPI = (date) => {

    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            const timeSlotsAvailable = getRandomTimeSlotsAvailable();
            if(Array.isArray(timeSlotsAvailable)){
                resolve(timeSlotsAvailable)
            }
            else{
                reject(new Error('An error occured while fetching the available time slots.'));
            }
        }, 1000)
    })
  }

export const submitAPI = (formData) => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (formData) {
            resolve(true);
          } else {
            reject(new Error('An error occured while submitting the reservation.'));
          }
        }, 1000);
    });
};
