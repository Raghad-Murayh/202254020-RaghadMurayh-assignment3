# AI Usage Report

## AI Tool Used

I used ChatGPT (GPT-5.6 Sol) while developing Assignment 3.

## Usage Log

| ID | Tool (Model) | Date | Purpose | Files Affected | What I Changed and How I Verified It |
| --- | --- | --- | --- | --- | --- |
| C01 | ChatGPT (GPT-5.6 Sol) | 2026-11-21 | Help with implementing and improving Assignment 3 features, including external API integration, project sorting, and project layout improvements. | `index.html`, `styles.css`, `script.js` | I reviewed and modified the AI suggestions to fit my existing portfolio.|

## How I Used AI

I used ChatGPT to help me understand the Assignment 3 requirements and add new functionality to my existing Assignment 2 portfolio.

### External Date API

ChatGPT helped me explore different options for the external API requirement. I considered several ideas before choosing a date API because I wanted a simple feature that would fit naturally into my portfolio.

I added an external API that retrieves the current date and displayed in the navigation area next to the dark mode button.
I also added error feedback so that `Date unavailable` is displayed if the API request fails.
I tested the API in the browser and verified that the current date was displayed correctly.

### Project Sorting

My Assignment 2 portfolio already allowed users to filter projects by category.
For Assignment 3, I added a second dropdown that allows users to sort the projects alphabetically using A-Z or Z-A.
ChatGPT helped me understand how to get the project titles, sort the project cards, and display them in the correct order.
I kept the sorting options simple so that they work together with my existing project filtering.
I tested both A-Z and Z-A and verified that the project cards appeared in the correct order.

### Project Layout Improvement

While testing the project filtering, I noticed that when only one project was displayed, the project card expanded and filled the entire width of the Projects section.
ChatGPT helped me identify that the existing `flex: 1` styling allowed the remaining card to expand.
I modified the CSS so that each project card keeps approximately the same width whether one or two projects are visible.
I tested All Projects, Web Projects, and Database Projects to verify that the project-card sizes remained consistent.

## Changes I Made to AI Suggestions

I reviewed the AI-generated suggestions before implementing them. The main decisions and changes I made were:

- Considered several API ideas before choosing a current date API that fit the portfolio better.
- Displayed the API date as a small element.
- Kept the project sorting limited to A-Z and Z-A to avoid unnecessary complexity.
- Adjusted the project-card sizing .
- Adjusted the filter button.

## Testing and Verification

I tested the implemented features by:

- Loading the website and verifying that the external API displayed the current date.
- Verifying that an error message is available if the date cannot be loaded.
- Sorting the projects using A-Z and verifying the correct order.
- Combining the existing project filtering with the new sorting feature.
- Selecting individual project categories and verifying that a single project card kept a consistent width.
- Resizing the browser window to verify that the responsive layout continued to work correctly.

## What I Learned

Through this assignment, I learned how to use fetch() to request data from an external API and how to process the returned data using JavaScript.

I learned how error handling can provide feedback when an API request is unsuccessful.


While improving the project layout, I learned more about how Flexbox properties affect the size of elements when the number of visible items changes.

## AI Usage Declaration

**Name:** Raghad Murayh  
**Student ID:** 202254020  
**Date:** 2026-11-21

> I declare that this report and the attached evidence document all of my AI use in this assignment, with complete and unedited conversations, and that I understand and can explain all the code I submitted. I understand that undeclared AI use or a false declaration will be treated as plagiarism according to KFUPM regulations.