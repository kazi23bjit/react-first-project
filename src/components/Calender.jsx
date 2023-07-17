import React,{useEffect, useState} from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';

const Calendar = ({ events, handleEventClick, isSidebarOpen  }) => {
    const [calendarHeight, setCalendarHeight] = useState('100%');
    const calendarOptions = {
        plugins: [dayGridPlugin, timeGridPlugin],
        initialView: 'timeGridDay',
        initialDate: '2023-07-22',
        slotEventOverlap: false,
        slotMinTime: '05:00:00', // Set the minimum time to 5 AM
        slotMaxTime: '20:59:59',
        scrollTime: '18:00:00',
        headerToolbar: {
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay',
        },
        events,
    eventClick: handleEventClick,
      };
      useEffect(() => {
        const updateCalendarHeight = () => {
          const screenHeight = window.innerHeight;
          const sidebarWidth = 240; // Update with your sidebar width
          const calendarContainerPadding = 16; // Update with your calendar container padding
          const newHeight = screenHeight - calendarContainerPadding;
    
          if (isSidebarOpen) {
            setCalendarHeight(`${newHeight}px`);
          } else {
            setCalendarHeight('100%');
          }
        };
    
        updateCalendarHeight();
        window.addEventListener('resize', updateCalendarHeight);
    
        return () => {
          window.removeEventListener('resize', updateCalendarHeight);
        };
      }, [isSidebarOpen]);
  return (
    // <FullCalendar
    // {...calendarOptions}
    // />
        <FullCalendar {...calendarOptions} />
    
  );
};

export default Calendar;
