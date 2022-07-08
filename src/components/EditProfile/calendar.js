import moment from "moment";
import jMoment from "moment-jalaali";
import React, { useState } from "react";
import JalaliUtils from "@date-io/jalaali";
import {
  // TimePicker,
  // DateTimePicker,
  DatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";

jMoment.loadPersian({ dialect: "persian-modern", usePersianDigits: true });

function PersianExample() {
  const [selectedDate, handleDateChange] = useState(moment());

  return (
    <MuiPickersUtilsProvider utils={JalaliUtils} locale="fa">
      <DatePicker
        label="date of birth"
        clearable
        okLabel="تأیید"
        cancelLabel="لغو"
        clearLabel="پاک کردن"
        labelFunc={(date) => (date ? date.format("YYYY/MM/DD") : "")}
        value={selectedDate}
        onChange={handleDateChange}
      />

      {/* <TimePicker
       label='deadline time'
        clearable
        okLabel="تأیید"
        cancelLabel="لغو"
        clearLabel="پاک کردن"
        labelFunc={date => (date ? date.format("hh:mm A") : "")}
        value={selectedDate}
        onChange={handleDateChange}
      /> */}

      {/* <DateTimePicker
        okLabel="تأیید"
        cancelLabel="لغو"
        labelFunc={date => (date ? date.format("YYYY/MM/DD hh:mm A") : "")}
        value={selectedDate}
        onChange={handleDateChange}
      /> */}
    </MuiPickersUtilsProvider>
  );
}

export default PersianExample;
