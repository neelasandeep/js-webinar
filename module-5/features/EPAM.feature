Feature: EPAM site
    As a webinar attendee
    I want to write test for EPAM career site
    So that I can practice Cucumber

    Scenario Outline: Search for a job
     Given Epam career page is opened
     Then Search Form should be visible

     When the <country> <city> selected in Filter box
     Then <city> Filter box should contain city name

     When <department> is selected in the departement filter box
     Then <department> should be displayed on department filter box

     When the Search button is clicked
     Then the Position nameshould be visible
     And The department <positionName> should be correct <dpartment>
     And location of <positionName> should be correct <city> ,<country>
     And there should be apply button

     When we click on apply button
     Then the job description should contain <city>
     And it should contain <positionName>