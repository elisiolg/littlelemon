import { BrowserRouter as Router, Routes as Switch, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import BookingPage from './pages/BookingPage'
import ConfirmedBookingPage from './pages/ConfirmedBookingPage'
import NotFoundPage from './pages/NotFoundPage'

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" element={<HomePage/>} />
                <Route path="/booking" element={<BookingPage/>} />
                <Route path="/booking-confirmed" element={<ConfirmedBookingPage/>} />
                <Route path="*" element={<NotFoundPage/>} />
            </Switch>
        </Router>
    )
}

export default Routes