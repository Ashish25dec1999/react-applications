import { useState } from "react";

export function DictionaryApp() {

    const [find, setFind] = useState("");
    const [fetData, setFetData] = useState("");

    function handleInputChange(e) {
        setFind(e.target.value);

    }

    async function handleSearchClick() {
        const data = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${find}`);
        const result = await data.json();
        setFetData(result);
        console.log(result);
    }


    return (
        <>
            <div className="m-5 p-4 d-flex flex-column align-items-center border border-2">
                <h2>Dictionary Application</h2>
                <div className="input-group mt-2 d-flex justify-content-center align-items-center">
                    <input type="text" placeholder="Enter your Search" className="input-group-text" onChange={handleInputChange} />
                    <button className="btn btn-outline-info" onClick={handleSearchClick}>Search</button>
                </div>
                <div className="mt-3">
                    {
                        fetData ?
                            <div className="d-flex flex-column">
                                <p>Word : {fetData[0].word}</p>
                                <p>Part of Speech : {fetData[0].meanings[0].partOfSpeech}</p>
                                <p>Definition : {fetData[0].meanings[0].definitions[0].definition}</p>
                                <p>synonyms : {fetData[0].meanings[0].synonyms.toString()}</p>

                            </div> : ""
                    }
                </div>
            </div>
        </>
    )
}