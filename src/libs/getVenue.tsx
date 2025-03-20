export default async function getVenue(id: string) {
    const response = await fetch(`https://a08-venue-explorer-backend-4.vercel.app/api/v1/venues/${id}`, {
        cache: "no-store",
    });

    if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Failed to fetch venue: ${response.status} ${response.statusText} - ${errorText}`);
    }

    return response.json();
}
