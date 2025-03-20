"use client";
import { useReducer } from "react";
import Card from "./Card";
import Link from "next/link";

export default function CardPanel() {
  const cardReducer = (
    venueList: Map<string, number>,
    action: { type: string; venueName: string; rating?: number }
  ) => {
    switch (action.type) {
      case "add": {
        const newVenueList = new Map(venueList);
        newVenueList.set(action.venueName, action.rating ?? 0);
        return newVenueList;
      }
      case "remove": {
        const newVenueList = new Map(venueList);
        newVenueList.delete(action.venueName);
        return newVenueList;
      }
      default:
        return venueList;
    }
  };
  let defaultVenue = new Map<string, number>([
    ["The Bloom Pavilion", 0],
    ["Spark Space", 0],
    ["The Grand Table", 0],
  ]);

  const [venueList, dispatchCard] = useReducer(cardReducer, defaultVenue);

  const mockvenueRepo = [
    { vid: "001", name: "The Bloom Pavilion", image: "/img/bloom.jpeg" },
    { vid: "002", name: "Spark Space", image: "/img/sparkspace.jpg" },
    { vid: "003", name: "The Grand Table", image: "/img/grandtable.jpg" },
  ];

  return (
    <div>
      <div
        style={{
          margin: "20px",
          display: "flex",
          flexDirection: "row",
          alignContent: "wrap",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        {mockvenueRepo.map((venueItem) => (
          <Link key={venueItem.vid} href={`/venue/${venueItem.vid}`} className="w-1/5">
          <Card imgSrc={venueItem.image} venueName={venueItem.name}
          //onCompare={(venue: string, rating: number) => dispatchCard({ type: 'add', venueName: venue, rating })} 
          />
      </Link>
      
        ))}
      </div>

      <div className="w-full text-3xl font-medium text-black">
        Venue List with Ratings : {venueList.size}
      </div>
      {Array.from(venueList).map(([venueName, rating]) => (
        <div
          key={venueName}
          data-testid={venueName}
          className="text-black text-xl font-medium"
          onClick={() =>
            dispatchCard({ type: "remove", venueName: venueName, rating })
          }
        >
          {venueName} Rating : {rating}
        </div>
      ))}
    </div>
  );
}
