// ./utils/addGoogleCalendarEvent.ts
export async function addGoogleCalendarEvent() {
  try {
    const response = await fetch('/api/add-calendar-event', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      // Send any necessary data to your API endpoint
      // for authentication or specifying details of the event
      body: JSON.stringify({
        /* data */
      }),
    });

    return response.ok;
  } catch (err) {
    console.error('Failed to create Google Calendar event', err);
    return false;
  }
}
