import { useState, useRef, useEffect } from "react";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";

import { Calendar } from "@fullcalendar/core";
import interactionPlugin from "@fullcalendar/interaction";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";

const CalendarEl = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [currentEvents, setCurrentEvents] = useState([]);
  const calendarRef = useRef(null);

  useEffect(() => {
    const calendar = new Calendar(calendarRef.current, {
      plugins: [ interactionPlugin, dayGridPlugin, timeGridPlugin, listPlugin ],
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
      },
      initialDate: '2023-05-01',
      navLinks: true,
      editable: true,
      dayMaxEvents: true,
      // events: [
      //   {
      //     title: 'All Day Event',
      //     start: '2023-05-01',
      //   },
      //   {
      //     title: 'Long Event',
      //     start: '2023-05-07',
      //     end: '2023-05-10'
      //   },
      //   {
      //     groupId: 999,
      //     title: 'Repeating Event',
      //     start: '2023-05-09T16:00:00'
      //   },
      //   {
      //     groupId: 999,
      //     title: 'Repeating Event',
      //     start: '2023-05-16T16:00:00'
      //   },
      //   {
      //     title: 'Conference',
      //     start: '2023-05-11',
      //     end: '2023-05-13'
      //   },
      //   {
      //     title: 'Meeting',
      //     start: '2023-05-12T10:30:00',
      //     end: '2023-05-12T12:30:00'
      //   },
      //   {
      //     title: 'Lunch',
      //     start: '2023-05-12T12:00:00'
      //   },
      //   {
      //     title: 'Meeting',
      //     start: '2023-05-12T14:30:00'
      //   },
      //   {
      //     title: 'Happy Hour',
      //     start: '2023-05-12T17:30:00'
      //   },
      //   {
      //     title: 'Dinner',
      //     start: '2023-05-12T20:00:00'
      //   },
      //   {
      //     title: 'Birthday Party',
      //     start: '2023-05-13T07:00:00'
      //   },
      //   {
      //     title: 'Click for Google',
      //     url: 'http://google.com/',
      //     start: '2023-05-28'
      //   }
      // ]
    });
    calendar.render();
  }, []);

  return (
    <Box m="20px">
      <Header title="Calendar" subtitle="Full Calendar Interactive Page" />
      <Box display="flex" justifyContent="space-between">
        <Box
          ref={calendarRef}
          flex="1 1 20%"
          backgroundColor={colors.primary[400]}
          p="15px"
          borderRadius="4px"
        >
        </Box>
      </Box>
    </Box>
  );
};

export default CalendarEl
