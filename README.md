Use the following steps to run this service:

# ensure that you have node and npm installed on your local machine. 

# On your terminal, run:

1.) npm i
2.) npm run dev

# End Points for testing:

- Use postman or your web browser to test, as these are all "GET" requests

# http://localhost:4009/match      
 - This is used to read the csv file and add the golden id field.
 - Saves the contents of the CSV is memory
 - Everything is saved in memory, therefore. You have to hit this end point before hitting the next 2.

 # http://localhost:4009/patients
 - This is used to fetch all of the patients from memory, including the Golden ID field.
 - The Golden ID field is used to show identify the duplicated fields.

 # http://localhost:4009/patients/Duplicate-1975-09-12
 - used to list patients by golden id.
 - This API will only return patients that have the same golden ID.

 # The BloomFilter library was used to calculate probability
  - https://www.npmjs.com/package/bloomfilter

  # Design Choices:
  - I used node js to build the solution as it is the language that I am most comfortable with.
  - Express was used for the server and routing. 
  - Controllers were used to handle the routes and communicate with the service.
  - The service does all of the heavy lifting. Ideally, the service would also be used to save data and make API calls. There was no need for that in this      solution.
  - The data is saved in memory, and can be accessed using the API's above.
 