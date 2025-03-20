import getVenues from "@/libs/getVenues"
import VenueCatalog from "@/components/VenueCatalog"

export default async function venue(){
    const venue = await getVenues()

    return(
        <main className="text-center p-40 text-black">
            <h1 className="text-3xl font-medium">Select Your Venue</h1>
            <VenueCatalog venueJson={venue}/>
        </main>
    )
}