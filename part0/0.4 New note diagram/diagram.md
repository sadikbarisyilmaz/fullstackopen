sequenceDiagram
participant browser
participant server

_user clicks on the input field and inputs data, clicks to save button_

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    activate server

_serverside application parses post request body and stores the data and server instructs the browser to reload the Notes page with a redirect_

    deactivate server
