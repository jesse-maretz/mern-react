# mern-react
This is project 7 for SEI40 cohort, by Jesse Maretz. In this project I utilized API data for the New York Yankees to perform CRUD through user interface.

# Description
The idea behind this project is that the user can edit the New York Yankees active roster. The active roster is initially fetched from and MLB public API source, and then stored in the project 6 backend with mongoDB. 

# Create
Data is created through the addition of new players to the roster using the "add player" form.

# Read
Data is read using GET requests to fetch the current active roster.

# Update
Data is updated through the "update player" form where the user first inputs the player's ID into the id input field, and then enters the new name for that player in the new name field. Submitting will update the given player's name.

# Delete
Data is deleted by entering a player's id and submiting the delete form.