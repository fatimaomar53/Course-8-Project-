# Evaluate News NLP

## Project Overview

This project is a web application that allows users to evaluate news articles using Natural Language Processing (NLP) APIs. The application fetches and analyzes the content of a news article provided by the user and returns an analysis of its sentiment, subjectivity, and other NLP metrics.

## Features

- **Article Analysis**: Users can input a URL of a news article, and the application will analyze its content using an NLP API.
- **Sentiment Analysis**: Provides a sentiment score of the article.
- **Subjectivity Analysis**: Determines whether the content is more subjective or objective.
- **Responsive Design**: The application is designed to work on various devices and screen sizes.
- **Service Workers**: Implements service workers to enable offline capabilities.

## Technologies Used

- **HTML/CSS/JavaScript**: The core technologies for building the web interface.
- **Webpack**: Used for bundling JavaScript files, handling dependencies, and optimizing the build process.
- **Sass**: CSS preprocessor for writing cleaner and more manageable styles.
- **NLP API**: Integration with either the Aylien or MeaningCloud API for analyzing text data.
- **Service Workers**: For offline functionality.

## Getting Started

### Prerequisites

- **Node.js**: Make sure you have Node.js installed. You can download it from [here](https://nodejs.org/).
- **npm**: Node Package Manager, which comes with Node.js.

### Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/yourusername/evaluate-news-nlp.git
   cd evaluate-news-nlp
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **API Keys**:
   - Obtain an API key from Aylien or MeaningCloud.
   - Create a `.env` file in the root directory and add your API key:
     ```bash
     API_KEY=your_api_key_here
     ```

### Running the Project

1. **Development Server**:

   ```bash
   npm run build-dev
   npm run start
   ```

   This will start a development server on `http://localhost:8080`.

2. **Production Build**:
   ```bash
   npm run build-prod
   ```
   This will create an optimized production build in the `dist/` directory.

### Testing

To run tests, use:

```bash
npm run test
```

### Usage

1. **Enter a URL**: In the input field, paste the URL of the news article you want to analyze.
2. **Submit**: Click the "Submit" button to start the analysis.
3. **View Results**: The results will be displayed on the page, including sentiment and subjectivity scores.

## Project Structure

- **src/**: Contains the source code for the application.
  - **client/**: Frontend code including HTML, CSS (Sass), and JavaScript.
  - **server/**: Backend code for handling API requests and responses.
- **dist/**: Contains the production build of the project.
- **webpack.config.js**: Webpack configuration file.
- **package.json**: Project metadata and dependency management.
- **.env**: Environment variables file (e.g., API keys).

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the project.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

## License

This project is licensed under the MIT License.

## Acknowledgments

- Thanks to [Aylien](https://aylien.com/) and [MeaningCloud](https://www.meaningcloud.com/) for their amazing NLP APIs.
- Webpack documentation and community for support.

---

You can customize this README file further based on your project's specific details. Let me know if you need more information or specific sections!
