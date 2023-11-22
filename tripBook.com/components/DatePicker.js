import { useContext } from "react";
import { DateRangePicker } from "rsuite";
import "rsuite/dist/rsuite.css";
import { GuestContext } from "../context/GuestContext";

const Datepicker = () => {
    const { date, setDate } = useContext(GuestContext);
    console.log(date)
    return <DateRangePicker value={date} onChange={setDate} className="date_picker" />
}

export default Datepicker;