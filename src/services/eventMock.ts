import type { Event } from "@/types"

const events: Event[] = [
    {
        "id": 123,
        "category": "animal welfare",
        "title": "Cat Adoption Day",
        "description": "Find your new feline friend at this event.",
        "location": "Meow Town",
        "date": "January 28, 2022",
        "time": "12:00",
        "organizer": "Kat Laydee"
    },
    {
        "id": 456,
        "category": "food",
        "title": "Community Gardening",
        "description": "Join us as we tend to the community edible plants.",
        "location": "Flora City",
        "date": "March 14, 2022",
        "time": "10:00",
        "organizer": "Fern Pollin"
    },
    {
        "id": 789,
        "category": "sustainability",
        "title": "Beach Cleanup",
        "description": "Help pick up trash along the shore.",
        "location": "Playa Del Carmen",
        "date": "July 22, 2022",
        "time": "11:00",
        "organizer": "Carey Wales"
    }
]

export default {
    getEvents(): Event[] {
        return events
    },
    getEventsSearchedCount(search: string): number {
        return events.filter((e) => e.description.includes(search)).length
    },
    getEvent(id: number): Event | undefined {
        return events.find((e) => e.id === id)
    }
}