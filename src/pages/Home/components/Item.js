const Item = ({ note, date, time, id, removeData, submittingStatus }) => {
    function removeItem() {
        submittingStatus.current = true
        removeData(function (prevData) {
            return prevData.filter(item => item.id !== id)
        });
    }

    return (
        <div className="item">
            <div>
                <p>{note}</p>
                <p>{`${date} ${time}`}</p>
            </div>
            <button className="remove" onClick={removeItem}>
                Delete
            </button>
        </div>
    );
};

export default Item;
