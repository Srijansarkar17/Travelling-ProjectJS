import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';
const flightsPageData = {
    searchInfo: {
        origin: "New Delhi (DEL)",
        destination: "Mumbai (BOM)",
        date: "15 Jun 2025",
        passengers: "1 Adult, Economy"
    },
    filters: {
        priceRange: {
            min: 5000,
            max: 25000,
            current: 15000
        },
        airlines: [
            { name: "All Airlines", checked: true },
            { name: "IndiGo", checked: false },
            { name: "Air India", checked: false },
            { name: "SpiceJet", checked: false },
            { name: "Vistara", checked: false }
        ],
        departureTimes: [
            { label: "All", active: true },
            { label: "Morning", active: false },
            { label: "Afternoon", active: false },
            { label: "Evening", active: false }
        ]
    },
    sortOptions: [
        "Sort by Price (Low to High)",
        "Sort by Duration",
        "Sort by Departure Time",
        "Sort by Airline"
    ],
    flights: [
        {
            airline: "IndiGo",
            airlineCode: "6E",
            flightNumber: "6E 2135",
            status: "On Time",
            statusClass: "on-time",
            departureTime: "06:00",
            departureAirport: "DEL",
            departureCity: "New Delhi",
            duration: "2h 15m",
            stops: "Non-stop",
            arrivalTime: "08:15",
            arrivalAirport: "BOM",
            arrivalCity: "Mumbai",
            price: 8452,
            priceNote: "per adult"
        },
        {
            airline: "Air India",
            airlineCode: "AI",
            flightNumber: "AI 131",
            status: "Delayed 15 min",
            statusClass: "delayed",
            departureTime: "09:30",
            departureAirport: "DEL",
            departureCity: "New Delhi",
            duration: "2h 20m",
            stops: "Non-stop",
            arrivalTime: "11:50",
            arrivalAirport: "BOM",
            arrivalCity: "Mumbai",
            price: 9120,
            priceNote: "per adult"
        },
        {
            airline: "SpiceJet",
            airlineCode: "SG",
            flightNumber: "SG 8721",
            status: "On Time",
            statusClass: "on-time",
            departureTime: "14:15",
            departureAirport: "DEL",
            departureCity: "New Delhi",
            duration: "2h 10m",
            stops: "Non-stop",
            arrivalTime: "16:25",
            arrivalAirport: "BOM",
            arrivalCity: "Mumbai",
            price: 7890,
            priceNote: "per adult"
        },
        {
            airline: "Vistara",
            airlineCode: "UK",
            flightNumber: "UK 995",
            status: "On Time",
            statusClass: "on-time",
            departureTime: "18:45",
            departureAirport: "DEL",
            departureCity: "New Delhi",
            duration: "2h 25m",
            stops: "Non-stop",
            arrivalTime: "21:10",
            arrivalAirport: "BOM",
            arrivalCity: "Mumbai",
            price: 11250,
            priceNote: "per adult"
        },
        {
            airline: "IndiGo",
            airlineCode: "6E",
            flightNumber: "6E 6114",
            status: "On Time",
            statusClass: "on-time",
            departureTime: "21:30",
            departureAirport: "DEL",
            departureCity: "New Delhi",
            duration: "4h 35m",
            stops: "1 Stop (AMD)",
            arrivalTime: "02:05",
            arrivalNextDay: true,
            arrivalAirport: "BOM",
            arrivalCity: "Mumbai",
            price: 6750,
            priceNote: "per adult"
        }
    ]
};

const urlParams = new URLSearchParams(window.location.search); //Read the URL parameters that is sent from home-data.js
const flightData = JSON.parse(urlParams.get('flightData')); //Get flightData and convert it back into object

console.log(flightData);

//Generating the HTML of the page

export function loadRouteSection() {
    let RouteSectionHTML = '';
    const fromName = flightData.fromName;
    const toName = flightData.toName;
    const travellerNumber = flightData.travellerNumber;
    const deptDate = flightData.departureDate;
    let html = `
        <div class="route-info">
                    <i class="fas fa-plane-departure"></i>
                    <span class="route">${fromName} → ${toName}</span>
                    <span class="date">${dayjs(deptDate).format('D MMMM YYYY')}</span>
                    <span class="passengers">${travellerNumber}</span>
        </div>
    `;
    RouteSectionHTML = html;

    console.log(RouteSectionHTML);
    document.querySelector('.js-search-info').innerHTML = RouteSectionHTML;

}

export function loadHeroSection() {
    //This is to get the data from checkedBoxes

    document.querySelectorAll('input[type="radio"]').forEach((radio) => {
        radio.addEventListener('change', loadHeroSection); //every time the checkbox is getting changed the hero section is getting loaded again
    })

    const checkedBoxes = document.querySelectorAll('input[type="radio"]:checked');
    const checkedData = Array.from(checkedBoxes).map(checkbox => ({
        value: checkbox.value,
        label: checkbox.closest('label').textContent.trim(),
        id: checkbox.id
}));

    console.log(checkedData);
}

