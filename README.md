# Reusable DatePicker Component

The Reusable DatePicker component is designed to simplify date selection within your React applications. It provides a user-friendly interface, flexibility, and customization options, making it an excellent choice for incorporating date picking functionality into your projects.

## Features

- **Easy Integration:** Simply import the DatePicker component and start using it in your application.
- **Customization:** Tailor the DatePicker to your needs by configuring various options.
- **Responsive Design:** The DatePicker is designed to work well on both desktop and mobile devices.
- **Custom Inputs:** You can easily provide your custom input components.
- **Custom Headers:** Customize the DatePicker header with a simple toggle.

## Getting Started

### Installation

To start using the Reusable DatePicker component in your project, follow these steps:

1. Install the `react-datepicker` package:

   ```bash
   npm install react-datepicker

Import the DatePicker component in your application:


import DatePicker from './DatePicker'; // Replace with the actual path to your DatePicker component.


Usage
Basic Usage
Here's how to use the DatePicker component in your application:

 ```
import React, { useState, useRef } from "react";
import { addBusinessDays, subBusinessDays } from "date-fns";
import DatePicker from './DatePicker'; // Replace with the actual path to your DatePicker component.

function MyComponent() {
  const defaultDate = new Date();
  const calRef = useRef(null);

  const [selectedDate, setSelectedDate] = useState<Date | null>(defaultDate);

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  const highlightWithRanges = [
    {
      "react-datepicker__day--highlighted-custom-1": [
        subBusinessDays(new Date(), 3),
      ],
    },
    {
      "react-datepicker__day--highlighted-event": [
        new Date(2023, 9, 15),
        new Date(2023, 9, 26),
      ],
    },
  ];

  return (
    <div>
      <h1>Datepicker</h1>
      <div style={{}}>
        <DatePicker
          customRef={calRef}
          selectedDate={selectedDate}
          onChange={handleDateChange}
          isClearable={false}
          minYear={2000}
          maxYear={2025}
          inline={false}
          dateFormat="MMMM d, yyyy"
          placeholderText="Select a Date"
          shouldCloseOnSelect={false}
          highlightDates={highlightWithRanges}
          customHeader={true}
        />
      </div>
    </div>
  );
}

export default MyComponent;
```

## Customization


The DatePicker component offers various customization options, allowing you to adapt it to your project's specific needs:


- **customInput:** You can provide your custom input component for date selection.

- **customHeader:** Toggle the custom header to customize the appearance of the DatePicker header.

- **dateFormat:** Define the format for displaying selected dates.

- **placeholderText:** Specify the placeholder text when no date is selected.

- **highlightDates:** Highlight specific dates on the calendar for easy reference.

- **minYear and maxYear:** Set minimum and maximum years for date selection.

- **shouldCloseOnSelect:** Control whether the calendar should close automatically upon date selection.


## Acknowledgments

We would like to acknowledge the developers of the react-datepicker library, which made this reusable DatePicker component possible.

Feel free to customize and enhance the DatePicker component according to your project requirements. Enjoy simplified date picking with the Reusable DatePicker component!
