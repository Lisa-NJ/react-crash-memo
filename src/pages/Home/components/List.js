import Item from "./Item";

const List = ({ listData, del, submittingStatus }) => {
    return (
        <div className="list">
            {listData.map((item) => {
                const { note, date, time, id } = item;
                return (
                    <Item key={id} note={note} date={date} time={time} id={id} removeData={del} submittingStatus={submittingStatus} />
                );
            })}
        </div>
    );
};

export default List;
