import Image from "next/image"
import getVenue from "@/libs/getVenue"

export default async function VenueDetailPage({ params }: { params: { vid: string } }) {
    const venueDetail = await getVenue(params.vid);

    return (
        <main className="p-20 w-full">
            <h1 className="text-lg font-medium text-black text-center">{venueDetail.data.name}</h1>

            <div className="flex flex-row my-5 items-start w-full">
                <Image
                    src={venueDetail.data.picture}
                    alt="Venue Image"
                    width={0} height={0} sizes="100vw"
                    className="rounded-lg w-[30%]"
                />

                <div className="text-l ml-10 text-black">
                    <p><span className="font-bold">Name:</span> {venueDetail.data.name}</p>
                    <p><span className="font-bold">Address:</span> {venueDetail.data.address}</p>
                    <p><span className="font-bold">District:</span> {venueDetail.data.district}</p>
                    <p><span className="font-bold">Postal Code:</span> {venueDetail.data.postalcode}</p>
                    <p><span className="font-bold">Tel:</span> {venueDetail.data.tel}</p>
                    <p><span className="font-bold">Daily Rate:</span> {venueDetail.data.dailyrate}</p>
                </div>
            </div>
        </main>
    );
}

