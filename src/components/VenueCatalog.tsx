"use client"

import Card from "./Card";
import Link from "next/link";
import { VenueJson, VenueItem } from "../../interface";

export default function VenueCatalog({ venueJson }: { venueJson: VenueJson }) {
    return (
        <>
            Explore {venueJson?.count ?? 0} models in our catalog
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
                {venueJson.data.map((venueItem: VenueItem) => (
                    <Link  href={`/venue/${venueItem.id}`} className="w-1/5">
                        <Card imgSrc={venueItem.picture} venueName={venueItem.name} />
                    </Link>
                ))}
            </div>
        </>
    );
}
