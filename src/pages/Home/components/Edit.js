import { useState } from "react";
import { v4 } from "uuid";

const Edit = ({ add, submittingStatus }) => {
    const [note, setNote] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");

    function noteChange(e) {
        setNote(e.target.value);
    }
    function dateChange(e) {
        setDate(e.target.value);
    }
    function timeChange(e) {
        setTime(e.target.value);
    }

    function addItem() {
        add(function (preData) {
            submittingStatus.current = true
            return [
                {
                    id: v4(),
                    note,
                    date,
                    time,
                },
                ...preData
            ];
        });
    }

    return (
        <div>
            <h1>Memo</h1>
            <p>Event:</p>
            <input type="text" value={note} onChange={noteChange} />
            <p>Date:</p>
            <input type="date" value={date} onChange={dateChange} />
            <p>Time:</p>
            <input type="time" value={time} onChange={timeChange} />
            <button onClick={addItem} className="add">
                Add
            </button>
        </div>
    );
};

export default Edit;
