// Mock data utility for development when backend is unavailable

export const getMockEvents = () => {
  return [
    {
      id: "1",
      title: "Tech Conference 2026",
      description: "A conference about the latest in tech.",
      location: "San Francisco, CA",
      date: "2026-03-15",
      time: "10:00 AM",
      featured: true
    },
    {
      id: "2",
      title: "Art Expo",
      description: "An exhibition showcasing modern art.",
      location: "New York, NY",
      date: "2026-04-20",
      time: "2:00 PM",
      featured: false
    },
    {
      id: "3",
      title: "Music Festival",
      description: "A festival featuring live music performances.",
      location: "Austin, TX",
      date: "2026-05-10",
      time: "6:00 PM",
      featured: true
    },
    {
      id: "4",
      title: "Startup Pitch Night",
      description: "An event for startups to pitch their ideas to investors.",
      location: "Seattle, WA",
      date: "2026-06-05",
      time: "5:00 PM",
      featured: false
    }
  ];
};