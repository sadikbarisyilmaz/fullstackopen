sequenceDiagram
participant browser
participant server

_user clicks on the input field and inputs data, clicks to save button_

_Javascrip event fires, creates a json data with content of the input and the timestamp_

_Javascript saves the note and rerenders the page to display the new note_

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note

    activate server

_The server responds with status code 201 created_

_serverside application stores the data_

    deactivate server
