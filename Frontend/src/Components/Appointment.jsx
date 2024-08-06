import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import Navbar from './Navbar';
// import '@fullcalendar/common/main.css'; // Core styles
// import '@fullcalendar/daygrid/main.css'; // DayGrid styles

const appointments = [
  {
    title: 'Meeting with John',
    start: '2024-07-10T10:00:00', // July 10, 2024, 10:00 AM
    end: '2024-07-10T11:00:00',   // July 10, 2024, 11:00 AM
  },
  {
    title: 'Doctor Appointment',
    start: '2024-07-15T14:00:00', // July 15, 2024, 2:00 PM
    end: '2024-07-15T15:00:00',   // July 15, 2024, 3:00 PM
  },
  // Add more appointments here
];

const Appointment = () => {
  return (
    <>
    <div>
        <Navbar/>
      <div className="text-center mx-auto pl-40 pt-8 bg-[rgb(0,6,36)] bg-gradient-to-r from-[rgba(0,6,36,1)] to-[rgba(14,119,212,0.89)] to-75%">
        <h1 className="inline-block hover:text-5xl hover:mb-0 text-yellow-500 hover:text-yellow-200 text-3xl md:text-7xl">
          Appointments
        </h1>
      </div>
      <div className="flex justify-center items-center min-h-screen ml-32 bg-[rgb(0,6,36)] bg-gradient-to-r from-[rgba(0,6,36,1)] to-[rgba(14,119,212,0.89)] to-75% text-white">
        <div className="w-full max-w-screen-xl h-auto">
          <div className=" p-2 rounded-lg ">
            <FullCalendar
              plugins={[dayGridPlugin]}
              initialView="dayGridMonth"
              events={appointments}
              height="auto"
              headerToolbar={{
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth,dayGridWeek,dayGridDay',
              }}
              themeSystem='standard'
            />
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Appointment;
