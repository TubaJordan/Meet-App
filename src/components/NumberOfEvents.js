const NumberOfEvents = ({ setCurrentNOE }) => {

    const handleInputChanged = (event) => {
        const value = event.target.value;
        setCurrentNOE(value);
    }


    return (
        <div id="number-of-events">

            <label htmlFor="number-of-events-input" id="number-of-events-input-label" className="event-number">Number of Events to Display: </label>

            <input
                type="number"
                role="number"
                defaultValue="32"
                onChange={handleInputChanged}
                placeholder="Enter a number"
                className="event-number-container"
                min="1"
                max="99"
                step="1"
            >

            </input>
        </div>
    );
};

export default NumberOfEvents;