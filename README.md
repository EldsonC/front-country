# CountrySearch

## Description
**CountrySearch** is a front-end application that allows users to search for countries and view detailed information such as:
- Popular name
- Original name
- Borders
- Population over the years (displayed in a graph)

## Technologies Used
- **Languages**: JavaScript, TypeScript
- **Frameworks/Libraries**: React, Vite, Chart.js
- **Styling Tools**: Styled-components

## Installation

### Prerequisites
- **Node.js**
- **Yarn**

### Installation Steps

1. Clone the repository:
    ```bash
    git clone https://github.com/EldsonC/front-country.git
    ```

2. Navigate into the project directory:
    ```bash
    cd front-country
    ```

3. Install the dependencies:
    ```bash
    yarn install
    ```

4. Create the `.env` file with the following variable:
    ```bash
    VITE_BASE_URL=http://localhost:3000
    ```

5. Start the project:
    ```bash
    yarn dev
    ```


## Usage
The application allows users to search for countries through a search input. After selecting a country, users can view:
- Popular name
- Original name
- The borders of the selected country
- A graph showing the population over the years

