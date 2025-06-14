import { isReturnDateAfterDeparture } from '../scripts/utils/dayComparison.js';

export const travelData = {
    hero: {
        title: "Discover Your Next Adventure",
        subtitle: "Book flights, hotels, and holiday packages at unbeatable prices"
    },

    destinations: [
        {
            name: "Paris",
            price: "₹45,000",
            image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=500&h=300&fit=crop",
            alt: "Paris",
            large: true
        },
        {
            name: "Bali",
            price: "₹25,000",
            image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop",
            alt: "Bali",
            large: false
        },
        {
            name: "London",
            price: "₹55,000",
            image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400&h=250&fit=crop",
            alt: "London",
            large: false
        },
        {
            name: "Dubai",
            price: "₹18,000",
            image: "https://plus.unsplash.com/premium_photo-1694475168985-5574c927dd08?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "Dubai",
            large: false
        },
        {
            name: "Maldives",
            price: "₹35,000",
            image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=400&h=250&fit=crop",
            alt: "Maldives",
            large: false
        }
    ],

    deals: [
        {
            badge: "FLAT 25% OFF",
            image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400&h=200&fit=crop",
            alt: "Flight Deal",
            title: "Domestic Flights",
            description: "Book now and save big on your next domestic trip",
            code: "Use code: FLY25"
        },
        {
            badge: "UP TO 40% OFF",
            image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400&h=200&fit=crop",
            alt: "Hotel Deal",
            title: "Hotel Bookings",
            description: "Luxury stays at budget-friendly prices",
            code: "Use code: HOTEL40"
        },
        {
            badge: "SPECIAL PACKAGE",
            image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=200&fit=crop",
            alt: "Package Deal",
            title: "Holiday Packages",
            description: "Complete travel solutions with amazing discounts",
            code: "Limited Time Offer"
        }
    ],

    footer: {
        brand: {
            name: "TravelEase",
            icon: "fas fa-plane",
            description: "Your trusted travel partner for memorable journeys worldwide."
        },
        socialLinks: [
            { platform: "facebook", icon: "fab fa-facebook", url: "#" },
            { platform: "twitter", icon: "fab fa-twitter", url: "#" },
            { platform: "instagram", icon: "fab fa-instagram", url: "#" },
            { platform: "youtube", icon: "fab fa-youtube", url: "#" }
        ],
        sections: [
            {
                title: "Quick Links",
                links: [
                    { text: "About Us", url: "#" },
                    { text: "Contact Us", url: "#" },
                    { text: "Careers", url: "#" },
                    { text: "Press", url: "#" }
                ]
            },
            {
                title: "Services",
                links: [
                    { text: "Flight Booking", url: "#" },
                    { text: "Hotel Reservation", url: "#" },
                    { text: "Holiday Packages", url: "#" },
                    { text: "Travel Insurance", url: "#" }
                ]
            },
            {
                title: "Support",
                links: [
                    { text: "Help Center", url: "#" },
                    { text: "Terms & Conditions", url: "#" },
                    { text: "Privacy Policy", url: "#" },
                    { text: "Refund Policy", url: "#" }
                ]
            }
        ],
        copyright: "© 2025 TravelEase. All rights reserved."
    },

    navigation: {
        brand: {
            name: "TravelEase",
            icon: "fas fa-plane"
        },
        menuItems: [
            { text: "Flights", href: "#flights" },
            { text: "Hotels", href: "#hotels" },
            { text: "Packages", href: "#packages" },
            { text: "Trains", href: "#trains" },
            { text: "Buses", href: "#buses" }
        ]
    }
};


export function loadTravelDestinationData(travelData) {
    try {
        let destinationHTML = '';
        travelData.destinations.forEach((destinationDetails) => {
            const destinationName = destinationDetails.name;
            const destinationPrice = destinationDetails.price;
            const destinationImage = destinationDetails.image;
            const destinationAlt = destinationDetails.alt;

            let html = `
                <div class="destination-card large">
                    <img src="${destinationImage}" alt=${destinationAlt}>
                    <div class="card-overlay">
                        <h3>${destinationName}</h3>
                        <p>Starting from Rs${destinationPrice}</p>
                        <button class="card-btn">Explore</button>
                    </div>
                </div>
        `;
            destinationHTML += html;
        });
        document.querySelector('.js-destination-details').innerHTML = destinationHTML;
    } catch (error) {
        console.log("Unexpected Error! Please try again");
    }

}

export function loadDealsData(travelData) {
    let dealsData = '';
    travelData.deals.forEach((dealData) => {
        const dealBadge = dealData.badge;
        const dealImage = dealData.image;
        const dealAlt = dealData.alt;
        const dealTitle = dealData.title;
        const dealDescription = dealData.description;
        const dealCode = dealData.code;

        let html = `
                <div class="deal-card">
                    <div class="deal-badge">${dealBadge}</div>
                    <img src="${dealImage}" alt=${dealAlt}>
                    <div class="deal-content">
                        <h3>${dealTitle}</h3>
                        <p>${dealDescription}</p>
                        <span class="deal-code">${dealCode}</span>
                    </div>
                </div>
        
        `;
        dealsData += html;

    });
    document.querySelector('.js-deals-details').innerHTML = dealsData;
}


export function loadHeroPage() {
    let HeroHTML = '';
    const buttons = document.querySelectorAll('.js-choice-button');

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            const selectedTab = button.dataset.tab;
            console.log(selectedTab);

            //Reseting the colors of all buttons
            buttons.forEach((btn) => {
            btn.style.backgroundColor = "white";
            btn.style.color = "black";
            });
            //only the active button will have the background blue with the code below
            button.style.backgroundColor = "#2663EB";
            button.style.color = "white";

            if(selectedTab === 'flights'){
              let html = `
                    <div class="search-fields">
                        <div class="field-group">
                            <div class="input-field">
                                <i class="fas fa-plane-departure"></i>
                                <input id="from-input" type="text" placeholder="From" value="New Delhi">
                                <small>DEL - Indira Gandhi Intl</small>
                            </div>
                            <button class="swap-btn">
                                <i class="fas fa-exchange-alt"></i>
                            </button>
                            <div class="input-field">
                                <i class="fas fa-plane-arrival"></i>
                                <input id="to-input" type="text" placeholder="To" value="Mumbai">
                                <small>BOM - Chhatrapati Shivaji</small>
                            </div>
                        </div>
                        
                        <div class="field-group">
                        <div class="input-field">
                                <i class="fas fa-calendar"></i>
                                <input id="departure-date-input" type="date" value="2025-06-15">
                            <small>Departure Date</small>
                        </div>
                            <div class="input-field return-field">
                                    <i class="fas fa-calendar"></i>
                                    <input id="return-date-input" type="date">
                                <small>Return Date</small>
                            </div>
                        </div>

                        
                        <div class="field-group">
                            <div class="input-field">
                                <i class="fas fa-users"></i>
                                <input id="travellers-input" type="text" placeholder="Travellers" value="1 Adult" readonly>
                                <small>Economy</small>
                            </div>

                            <button class="search-btn js-search-button">
                                <i class="fas fa-search"></i>
                                Search Flights
                            </button>
                        </div>
                    </div>
                </div>
        
        `;
        HeroHTML=html;
        document.querySelector('.js-display-container').innerHTML = HeroHTML;


        //When you write JavaScript that accesses or modifies elements on the page (like input fields, buttons, etc.), you want to make sure the browser has fully loaded the HTML elements first.
        //If you try to access DOM elements before they're available, your JavaScript might fail with errors like null is not an object.  ----> thats why DOMContentLoaded is used
        document.addEventListener('DOMContentLoaded', () => { //DOMContentLoaded is an event in JavaScript that fires when the HTML of the page has been completely loaded and parsed, without waiting for stylesheets, images, or subframes to finish loading
            const fromInput = document.getElementById("from-input");
            const toInput = document.getElementById("to-input");
            const departureDateInput = document.getElementById("departure-date-input");
            const returnDateInput = document.getElementById("return-date-input");
            const travellersInput = document.getElementById("travellers-input");


            document.querySelector('.js-search-button')
            .addEventListener('click', () => {
                //checking if return date is after departure date using the function from dayComparison.js
                if(isReturnDateAfterDeparture(departureDateInput.value, returnDateInput.value)){
                    const flightData = {
                    fromName: fromInput.value,
                    toName: toInput.value,
                    DepartureDate: departureDateInput.value,
                    returnDate: returnDateInput.value,
                    travellerNumber: travellersInput.value
                };

                console.log(flightData);
                }
                else{
                    alert('Return date must be after Departure Date');
                }
                
            });
        });
        
     }
            else if(selectedTab === 'hotels'){
            let html = `
            <div class="search-form" id="hotels-form">
                    <div class="search-fields">
                        <div class="field-group full-width">
                            <div class="input-field">
                                <i class="fas fa-map-marker-alt"></i>
                                <input type="text" placeholder="City, Property name or Location">
                                <small>Where do you want to stay?</small>
                            </div>
                        </div>
                        
                        <div class="field-group">
                            <div class="input-field">
                                <i class="fas fa-calendar"></i>
                                <input type="text" placeholder="Check-in" value="15 Jun 2025">
                                <small>Monday</small>
                            </div>
                            <div class="input-field">
                                <i class="fas fa-calendar"></i>
                                <input type="text" placeholder="Check-out" value="17 Jun 2025">
                                <small>Wednesday</small>
                            </div>
                        </div>
                        
                        <div class="field-group">
                            <div class="input-field">
                                <i class="fas fa-users"></i>
                                <input type="text" placeholder="Guests" value="2 Adults, 1 Room" readonly>
                                <small>Guests & Rooms</small>
                            </div>
                            <button class="search-btn">
                                <i class="fas fa-search"></i>
                                Search Hotels
                            </button>
                        </div>
                    </div>
                </div>
        `;
        HeroHTML=html;
        document.querySelector('.js-display-container').innerHTML = HeroHTML;
        }

            else if(selectedTab === 'packages'){
                let html = `
                    <div class="search-form" id="packages-form">
                    <div class="search-fields">
                        <div class="field-group">
                            <div class="input-field">
                                <i class="fas fa-map-marker-alt"></i>
                                <input type="text" placeholder="From City">
                                <small>Departure city</small>
                            </div>
                            <div class="input-field">
                                <i class="fas fa-globe"></i>
                                <input type="text" placeholder="To Destination">
                                <small>Where to?</small>
                            </div>
                        </div>
                        
                        <div class="field-group">
                            <div class="input-field">
                                <i class="fas fa-calendar"></i>
                                <input type="text" placeholder="Travel Date" value="15 Jun 2025">
                                <small>Departure date</small>
                            </div>
                            <button class="search-btn">
                                <i class="fas fa-search"></i>
                                Search Packages
                            </button>
                        </div>
                    </div>
                </div>
            </div>
                `;
            HeroHTML = html;
            document.querySelector('.js-display-container').innerHTML = HeroHTML;
            }
    })
    })
    //I want that upon reload, the default html should show the flight section
    const defaultTab = document.querySelector('.js-choice-button[data-tab="flights"]');
    //the above line selects the class js-choice-button with data-tab =  "flights", the button below
    //<button class="js-choice-button" data-tab="flights">Flights</button>
    //then in the line below it checks, if defaultTab exists or not, if it exists, then it automatically clicks the button by deafult and executes the eventListener code

    if(defaultTab){
        defaultTab.click();
    }
}
    //         if (choice === 'flights') {
    //             let html = `
    //     <div class="search-tabs">
    //                 <button class="tab-btn active js-choice-button" data-tab="flights">
    //                     <i class="fas fa-plane"></i> Flights
    //                 </button>
    //                 <button class="tab-btn js-choice-button" data-tab="hotels">
    //                     <i class="fas fa-bed"></i> Hotels
    //                 </button>
    //                 <button class="tab-btn js-choice-button" data-tab="packages">
    //                     <i class="fas fa-suitcase"></i> Packages
    //                 </button>
    //             </div>
                
    //             <!-- Flight Search Form -->
    //             <div class="search-form js-search-form" id="flights-form">
    //                 <div class="trip-type">
    //                     <label class="radio-label">
    //                         <input type="radio" name="trip" value="oneway" checked>
    //                         <span>One Way</span>
    //                     </label>
    //                     <label class="radio-label">
    //                         <input type="radio" name="trip" value="roundtrip">
    //                         <span>Round Trip</span>
    //                     </label>
    //                     <label class="radio-label">
    //                         <input type="radio" name="trip" value="multicity">
    //                         <span>Multi City</span>
    //                     </label>
    //                 </div>
                    
    //                 <div class="search-fields">
    //                     <div class="field-group">
    //                         <div class="input-field">
    //                             <i class="fas fa-plane-departure"></i>
    //                             <input type="text" placeholder="From" value="New Delhi">
    //                             <small>DEL - Indira Gandhi Intl</small>
    //                         </div>
    //                         <button class="swap-btn">
    //                             <i class="fas fa-exchange-alt"></i>
    //                         </button>
    //                         <div class="input-field">
    //                             <i class="fas fa-plane-arrival"></i>
    //                             <input type="text" placeholder="To" value="Mumbai">
    //                             <small>BOM - Chhatrapati Shivaji</small>
    //                         </div>
    //                     </div>
                        
    //                     <div class="field-group">
    //                         <div class="input-field">
    //                             <i class="fas fa-calendar"></i>
    //                             <input type="text" placeholder="Departure" value="15 Jun 2025">
    //                             <small>Monday</small>
    //                         </div>
    //                         <div class="input-field return-field" style="opacity: 0.5;">
    //                             <i class="fas fa-calendar"></i>
    //                             <input type="text" placeholder="Return" disabled>
    //                             <small>Select date</small>
    //                         </div>
    //                     </div>
                        
    //                     <div class="field-group">
    //                         <div class="input-field">
    //                             <i class="fas fa-users"></i>
    //                             <input type="text" placeholder="Travellers" value="1 Adult" readonly>
    //                             <small>Economy</small>
    //                         </div>
    //                         <button class="search-btn">
    //                             <i class="fas fa-search"></i>
    //                             Search Flights
    //                         </button>
    //                     </div>
    //                 </div>
    //             </div>
        
    //     `;
    //             HeroHTML += html;
    //         }
    //         else if (choice === 'hotels') {
    //             html = `
    //         <div class="search-form hidden" id="hotels-form">
    //                 <div class="search-fields">
    //                     <div class="field-group full-width">
    //                         <div class="input-field">
    //                             <i class="fas fa-map-marker-alt"></i>
    //                             <input type="text" placeholder="City, Property name or Location">
    //                             <small>Where do you want to stay?</small>
    //                         </div>
    //                     </div>
                        
    //                     <div class="field-group">
    //                         <div class="input-field">
    //                             <i class="fas fa-calendar"></i>
    //                             <input type="text" placeholder="Check-in" value="15 Jun 2025">
    //                             <small>Monday</small>
    //                         </div>
    //                         <div class="input-field">
    //                             <i class="fas fa-calendar"></i>
    //                             <input type="text" placeholder="Check-out" value="17 Jun 2025">
    //                             <small>Wednesday</small>
    //                         </div>
    //                     </div>
                        
    //                     <div class="field-group">
    //                         <div class="input-field">
    //                             <i class="fas fa-users"></i>
    //                             <input type="text" placeholder="Guests" value="2 Adults, 1 Room" readonly>
    //                             <small>Guests & Rooms</small>
    //                         </div>
    //                         <button class="search-btn">
    //                             <i class="fas fa-search"></i>
    //                             Search Hotels
    //                         </button>
    //                     </div>
    //                 </div>
    //             </div>
    //     `;
    //             HeroHTML += html;
    //         }
    //         else if (choice === 'packages') {
    //             html = `
    //         <div class="search-form hidden" id="packages-form">
    //                 <div class="search-fields">
    //                     <div class="field-group">
    //                         <div class="input-field">
    //                             <i class="fas fa-map-marker-alt"></i>
    //                             <input type="text" placeholder="From City">
    //                             <small>Departure city</small>
    //                         </div>
    //                         <div class="input-field">
    //                             <i class="fas fa-globe"></i>
    //                             <input type="text" placeholder="To Destination">
    //                             <small>Where to?</small>
    //                         </div>
    //                     </div>
                        
    //                     <div class="field-group">
    //                         <div class="input-field">
    //                             <i class="fas fa-calendar"></i>
    //                             <input type="text" placeholder="Travel Date" value="15 Jun 2025">
    //                             <small>Departure date</small>
    //                         </div>
    //                         <button class="search-btn">
    //                             <i class="fas fa-search"></i>
    //                             Search Packages
    //                         </button>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     `;
         
    //     }
    //     HeroHTML += html;
    //     console.log(choice)
    //     });
    // });
    // console.log(HeroHTML);
    // document.querySelector('.js-search-container').innerHTML = HeroHTML;
        
