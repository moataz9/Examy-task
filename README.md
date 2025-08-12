# Examy-task: Exam Questions Management App

## Overview

This project is a web application for managing exam questions. It allows users to add, edit, delete, and organize questions for different exam types. The UI is built with HTML and Tailwind CSS, and the app logic is implemented in JavaScript modules.

## Features

- Add, edit, and delete exam questions
- Support for multiple question types (multiple choice, matching, true/false, short answer)
- Dynamic rendering of questions and options
- Edit mode for inline question and option editing
- Restore/cancel edits to questions
- Responsive, RTL-friendly design for Arabic content
- Styled with Tailwind CSS for modern look

## Structure

- `src/js/components/questions/`: Components for rendering different question types
- `src/js/actions/options.js`: Actions for editing, saving, and restoring questions
- `src/index.html`: Main HTML file with Tailwind CSS and app layout
- `src/mockData.js`: Mock data for questions and categories

## Usage

1. Open `index.html` in your browser.
2. Use the UI to manage questions: add, edit, delete, and restore.
3. All changes are reflected instantly in the app.
   note: changes are not saved

## Development

- Edit JavaScript files in `src/js/` to customize logic or add new features.
- Use Tailwind CSS classes in HTML for styling.
- For production, you may want to bundle and minify assets.

## License

This project is for educational and demonstration purposes.
