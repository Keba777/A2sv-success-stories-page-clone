# A2sv-success-stories-page-clone

This web application showcases success stories of A2SVians and presents growth statistics for A2SV. Users can view impact stories and gain insights into the growth of A2SV through the provided graphs.

## Folder Structure

The project is organized as follows:

- `public/` : Contains public data.
    - `data/` : Contains mock data or static data used in the application.
- `src/` : Contains the source code for the application.
  - `components/` : Contains various React components used in the application.
    - `NavBar.js` : Navigation bar component.
    - `Footer.js` : Footer component.
    - `SubscribePage.js` : Component for subscribing to updates.
    - `Introduction.js` : Introduction component.
    - `GiftButton.js` : Button for special offers or actions.
    - `ScrollToTopButton.js` : Button to scroll to the top of the page.
    - `StoryCard.js` : Component to display a success story card with like functionality.
    - `SuccessStories.js` : Component to display a collection of success story cards.
    - `GrowthGraph.js` : Component to display the growth statistics of A2SV using the `react-chartjs-2` library.
    - `SuccessGraph.js` : Component to display the success rate statistics of A2SV using the `react-chartjs-2` library.
  - `hooks.` : Contains the custom hook for api calls to the mockData.
    - `useStories.js` : Fetchs data from the mockData.json.
  - `redux/` : Contains Redux-related files.
    - `slices/` : Contains Redux slice files.
      - `storySlice.js` : Redux slice handling stories data and likes for each story.
  - `App.js` : Main application file.
  - `index.js` : Entry point of the application.
  - `...other files and folders related to React application setup and configurations.`

## Usage

To run the application, ensure you have the necessary dependencies installed. Run the following command to start the application:

### npm start  

This will launch the application locally, allowing you to explore the success stories and growth statistics of A2SV.

## Data Retrieval
The success stories and growth data are retrieved using Axios. The success stories are obtained from a mock data file, and the growth data is provided as static data within the GrowthGraph and SuccessGraph components.

## State Management
Redux is used for state management within the application. The storySlice slice handles the stories data and likes for each story.

## Contributions
We welcome contributions to improve and enhance this application. Feel free to fork the repository, make your changes, and submit a pull request.

This project was created and maintained by the A2SV team. Thank you for using our Success Stories Web Application!
