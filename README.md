# app info

## how to run the app
`npm run dev` in terminal and then just use browser of choice, Postman, etc. to access the API

## impovement considirations
I don't see a reason to use streams for file reading to offload memory as json files are pretty small (only ~1.3MB) at the moment.
But if if gets bigger (>10MB), then it would make much more sense, as well as addition of caching