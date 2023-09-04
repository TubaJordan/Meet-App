const NumberOfEvents = ({ setCurrentNOE, setErrorAlert }) => {

    const handleInputChanged = (event) => {
        const value = event.target.value;

        if (isNaN(value)) {
            setErrorAlert("value is not a number");
        } else if (value > 99) {
            setErrorAlert("Maximum value is 99");
        } else if (value <= 0) {
            setErrorAlert("Minimum value is 1");
        } else {
            setErrorAlert("");
            setCurrentNOE(value);
        }
    }



    return (
        <div id="number-of-events" data-testid="number-of-events">

            <label htmlFor="number-of-events-input" id="number-of-events-input-label" className="event-number">Number of Events to Display: </label>

            <input
                type="number"
                defaultValue="32"
                onChange={handleInputChanged}
                placeholder="Enter a number"
                className="event-number-container"
                min="1"
                max="99"
                step="1"
                data-testid="number-of-events-input"
            >

            </input>
        </div>
    );
};

export default NumberOfEvents;