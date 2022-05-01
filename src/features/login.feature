Feature: feature file

    Scenario: Verify login

        Given I open the url "https://www.google.ca/"
        Then enter value
        Then enter value "Fan"
        Then re enter value "non" in "Search"
