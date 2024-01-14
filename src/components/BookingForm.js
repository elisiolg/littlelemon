import { useState, useEffect } from "react"

function convertDate(date) {
    return date.toISOString().substr(0, 10)
}

const BookingForm = ({ getTimeSlots, availableTimes, submitForm }) => {

    const currentRawDate = new Date();
    const currentDate = convertDate(currentRawDate);
    const maxDate = convertDate(new Date(currentRawDate.setDate(currentRawDate.getDate() + 30)));

    const [date, setDay] = useState(currentDate)
    const [time, setTime] = useState(availableTimes ? availableTimes[0] : null)
    const [guestNumber, setGuestNumber] = useState("2")
    const [occasion, setOccasion] = useState("")

    const [errorMsg, setErrorMsg] = useState("")
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setErrorMsg("")
          }, 9000);
      }, [errorMsg]);


    useEffect(() => {
        setTime(availableTimes ? availableTimes[0] : null)
        setLoading(false)
      }, [availableTimes]);

    const getIsFormValid = () => date && time && guestNumber

    const handleDateChange = (e) => {
        const value = e.target.value
        if(value < currentDate || value > maxDate) {
            return setErrorMsg(`You must select between today and ${maxDate}`)
         }
         setLoading(true);
         setDay(value);
         setTime(null);
         getTimeSlots(value)
    };

    const handleGuestNumberChange = (e) => {
        const value = e.target.value
        if (!isValidGuestNumber(value)) {

            return setErrorMsg(`Guest number has to be a number from 1 to 10`)
        }
        setGuestNumber(value)
    };

    const isValidGuestNumber = (value) => /^\d*$/.test(value) && (value === "" || parseInt(value) <= 10) && (parseInt(value) !== 0);

    const handleSubmit = (e) => {
        e.preventDefault()
        submitForm({ date, time, guestNumber, occasion, })
    }

    let availableTimesMissingMsg = false

    if (availableTimes === null || loading) {
        availableTimesMissingMsg = "Loading available time slots.."
    } else if (typeof availableTimes == "string") {
        availableTimesMissingMsg = availableTimes
    } else if (!availableTimes.length) {
        const msgSuffix = date === currentDate ? 'today' : date

        availableTimesMissingMsg = `Sorry, we are fully booked for ${msgSuffix}!`
    }

    let availableTimesHtml = <span>{availableTimesMissingMsg}</span>
    if (!availableTimesMissingMsg) {
        availableTimesHtml =
            <select id="time" value={time} onChange={(e) => setTime(e.target.value)}>
                {availableTimes.map((time, index) => (
                    <option key={index} value={time}>{time}</option>
                ))}
            </select>
    }

    return (
        <div className="BookingForm">
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <div className="Field">
                        <label htmlFor="date">Date <sup>*</sup> </label>
                        <input
                        id="date"
                            type="date"
                            min={currentDate}
                            max={maxDate}
                            value={date}
                            onChange={handleDateChange}
                            placeholder="Date"
                        />
                    </div>
                    <div className="Field">
                        <label htmlFor="time">Time <sup>*</sup> </label>
                        {availableTimesHtml}
                    </div>
                    <div className="Field">
                        <label htmlFor="guestNumber">Number of guests<sup>*</sup> </label>
                        <input
                        id="guestNumber"
                            value={guestNumber}
                            type="number"
                            min="1"
                            max="10"
                            onChange={handleGuestNumberChange}
                            placeholder="Number of guests"
                        />
                    </div>
                    <div className="Field">
                        <label htmlFor="occasion">Occasion</label>
                        <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                            <option value="">No Occasion</option>
                            <option value="Birthday">Birthday</option>
                            <option value="Anniversary">Anniversary</option>
                        </select>
                    </div>
                    {errorMsg ? <div class="error">{errorMsg}</div> : ''}
                    <button
                        type="submit"
                        className="button"
                        disabled={!getIsFormValid()}
                        aria-disabled={!getIsFormValid()}
                    >
                        Make your reservation
                    </button>
                </fieldset>
            </form>
        </div>
    )
}

export default BookingForm