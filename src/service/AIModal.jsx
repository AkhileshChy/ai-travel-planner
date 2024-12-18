import { GoogleGenerativeAI } from "@google/generative-ai";


const apiKey = import.meta.env.VITE_GOOGLE_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    systemInstruction: "Generate Travel Plan for Location : Las Vegas for 3 Days for Couple with a Cheap Budget, Give me a Hotels options list with Hotel name, Hotel address, price, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with place name, place details, place image url, Geo Coordinates, ticket pricing, time travel each of the location for 3 days with each day plan with best time to visit in JSON format.",
});

const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
};


export const chatSession = model.startChat({
    generationConfig,
    history: [
        {
            role: "user",
            parts: [
                { text: "Generate Travel Plan for Location : Las Vegas for 3 Days for Couple with a Cheap Budget, Give me a Hotels options list with Hotel name, Hotel address, price, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with place name, place details, place image url, Geo Coordinates, ticket pricing, time travel each of the location for 3 days with each day plan with best time to visit in JSON format" },
            ],
        },
        {
            role: "model",
            parts: [
                { text: "```json\n{\n  \"hotelOptions\": [\n    {\n      \"name\": \"Circus Circus Hotel & Casino\",\n      \"address\": \"2880 S Las Vegas Blvd, Las Vegas, NV 89109\",\n      \"price\": {\n        \"min\": 40,\n        \"max\": 100\n      },\n      \"imageUrl\": \"https://example.com/circuscircus.jpg\", \n      \"geoCoordinates\": {\n        \"latitude\": 36.1215,\n        \"longitude\": -115.1739\n      },\n      \"rating\": 3.5,\n      \"description\": \"A budget-friendly option with a circus theme, featuring a midway and various entertainment options.\"\n    },\n    {\n      \"name\": \"The D Las Vegas\",\n      \"address\": \"300 Fremont St, Las Vegas, NV 89101\",\n      \"price\": {\n        \"min\": 50,\n        \"max\": 120\n      },\n      \"imageUrl\": \"https://example.com/thed.jpg\",\n      \"geoCoordinates\": {\n        \"latitude\": 36.1691,\n        \"longitude\": -115.1415\n      },\n      \"rating\": 4.0,\n      \"description\": \"Located in the Fremont Street Experience, offering a more downtown vibe with affordable rooms.\"\n    },\n    {\n      \"name\": \"Excalibur Hotel & Casino\",\n      \"address\": \"3850 S Las Vegas Blvd, Las Vegas, NV 89109\",\n      \"price\": {\n        \"min\": 60,\n        \"max\": 150\n      },\n      \"imageUrl\": \"https://example.com/excalibur.jpg\",\n      \"geoCoordinates\": {\n        \"latitude\": 36.0916,\n        \"longitude\": -115.1752\n      },\n      \"rating\": 3.0,\n      \"description\": \"A themed hotel with a medieval castle aesthetic; often offers competitive rates.\"\n    }\n  ],\n  \"itinerary\": {\n    \"day1\": {\n      \"theme\": \"Downtown Exploration\",\n      \"plan\": [\n        {\n          \"name\": \"Fremont Street Experience\",\n          \"details\": \"A pedestrian mall with a vibrant atmosphere, light shows, and street performers.\",\n          \"imageUrl\": \"https://example.com/fremontstreet.jpg\",\n          \"geoCoordinates\": {\n            \"latitude\": 36.1692,\n            \"longitude\": -115.1421\n          },\n          \"ticketPricing\": \"Free\",\n          \"time\": \"Afternoon (2 PM - 6 PM)\"\n        },\n        {\n          \"name\": \"Container Park\",\n          \"details\": \"An outdoor shopping and entertainment center made from shipping containers.\",\n          \"imageUrl\": \"https://example.com/containerpark.jpg\",\n          \"geoCoordinates\": {\n            \"latitude\": 36.1667,\n            \"longitude\": -115.1379\n          },\n          \"ticketPricing\": \"Free\",\n          \"time\": \"Evening (7 PM - 9 PM)\"\n        }\n      ]\n    },\n    \"day2\": {\n      \"theme\": \"Strip Highlights & Budget Fun\",\n      \"plan\": [\n        {\n          \"name\": \"The Bellagio Fountains\",\n          \"details\": \"Free choreographed water show with music and lights.\",\n          \"imageUrl\": \"https://example.com/bellagiofountains.jpg\",\n          \"geoCoordinates\": {\n            \"latitude\": 36.1146,\n            \"longitude\": -115.1729\n          },\n          \"ticketPricing\": \"Free\",\n          \"time\": \"Afternoon (3 PM - 4 PM)\"\n        },\n        {\n          \"name\": \"Walk the Las Vegas Strip\",\n          \"details\": \"Explore the iconic Strip, admiring the architecture and atmosphere.\",\n          \"imageUrl\": \"https://example.com/lasvegasstrip.jpg\",\n          \"geoCoordinates\": {\n            \"latitude\": 36.10,\n            \"longitude\": -115.17\n          },\n          \"ticketPricing\": \"Free\",\n          \"time\": \"Late Afternoon - Evening (4 PM - 8 PM)\"\n        },\n        {\n          \"name\": \"In-N-Out Burger\",\n          \"details\": \"Enjoy a classic and affordable West Coast burger.\",\n          \"imageUrl\": \"https://example.com/innout.jpg\",\n          \"geoCoordinates\": {\n            \"latitude\": 36.10,\n            \"longitude\": -115.17\n          }, //Approximate location - many branches on the Strip\n          \"ticketPricing\": \"$10-$15 per person\",\n          \"time\": \"Dinner (8 PM)\"\n        }\n      ]\n    },\n    \"day3\": {\n      \"theme\": \"Nature and Relaxation\",\n      \"plan\": [\n        {\n          \"name\": \"Red Rock Canyon National Conservation Area\",\n          \"details\": \"Scenic drives, hiking trails, and stunning red rock formations (requires transportation).\",\n          \"imageUrl\": \"https://example.com/redrockcanyon.jpg\",\n          \"geoCoordinates\": {\n            \"latitude\": 36.2056,\n            \"longitude\": -115.7796\n          },\n          \"ticketPricing\": \"$15 per vehicle\",\n          \"time\": \"Morning (9 AM - 1 PM)\"\n        },\n        {\n          \"name\": \"Pool time at your hotel (optional)\",\n          \"details\": \"Relax and enjoy the hotel pool, many budget hotels have pools.\",\n          \"imageUrl\": \"https://example.com/hotelpool.jpg\", //replace with actual hotel pool image\n          \"geoCoordinates\": null,\n          \"ticketPricing\": \"Free (if at your hotel)\",\n          \"time\": \"Afternoon (2 PM - 5 PM)\"\n        }\n      ]\n    }\n  }\n}\n```\n\n**Note:**  Image URLs are placeholders.  Replace them with actual image URLs from reliable sources.  Geocoordinates are approximate and might need adjustments depending on the specific location within a larger area (e.g., Las Vegas Strip). Prices are estimates and can vary greatly depending on the season and availability. Consider using public transportation or ride-sharing services to minimize transportation costs.  Always check official websites for the most up-to-date ticket prices and opening hours.\n" },
            ],
        },
    ],
});


