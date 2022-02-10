import axios from 'axios'
const API_URL = '/api/tickets/'

//Create New Ticket
const createTicket = async(ticketData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.post(API_URL, ticketData, config)
    return response.data
}

//Get user tickets
const getTickets = async(token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.get(API_URL, config)
    return response.data
}

//Get user ticket
const getTicket = async(ticketId, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    console.log(API_URL + ticketId)
    
    const response = await axios.get(API_URL + ticketId, config)
    return response.data
}

const TicketService = {
    createTicket,
    getTickets,
    getTicket
}

export default TicketService