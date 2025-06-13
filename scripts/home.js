import { loadDealsData, loadHeroPage, loadTravelDestinationData, travelData } from "../data/home-data.js";

loadHeroPage();
loadTravelDestinationData(travelData);
loadDealsData(travelData);