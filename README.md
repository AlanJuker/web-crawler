# Web Crawler Project

## Overview
- This project retrieves the top 30 entries from [Hacker News](https://news.ycombinator.com/) based on the number, the title, the points, and the number of comments for each entry, and applies filtering operations.
  
## Technologies Used

- **TypeScript**: Core functionality and type safety.
- **Jest**: Automated testing.
- **Lowdb**: Lightweight local JSON database for storing data.

## Setup

- Install dependencies

    ```bash
    npm install
    ```

- Run the project

    - **Filter entries with more than 5 words and order them by comments**:
        ```bash
        npm start
        ```

    - **Filter entries with less than 5 words and order them by points**:
        ```bash
        npm run start:short
        ```

- Run the tests

    ```bash
    npm test
    ```

## Logs
Each time the program runs, a new log entry is recorded with the details of the executed query. You can view these logs in the `data/logs.json` file.

## Code Structure

- **crawler.ts**: Scrapes and fetches the first 30 entries from Hacker News.
- **filters.ts**: Filters data based on the number of words in the title (>5 or ≤5).
- **utils.ts**: Utility functions to count words using regular expressions.
- **index.ts**: Calls the appropriate filter and prints the result.
- **logger.ts**: Creates a log entry for each execution, recording relevant data.
- **filters.test.ts**: Unit tests to verify the correct behavior of filtering functions.
