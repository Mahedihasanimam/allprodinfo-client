# Alternative Product Information System

Live Site URL: https://altprodinfo.web.app/
server side : https://github.com/Mahedihasanimam/allprodinfo-server

## Features:
- Users can add, update, and delete their own queries about a product.
- Users can view other queries for alternative products on the website and see the details and recommendations.
- Users can add recommendations for certain products.
- Users can delete their recommendations.
- Users can modify/delete their comments.
- Responsive design for all devices.
- Persistent login session without redirecting to the login page after page reload.
- Environment variable usage to hide sensitive credentials.
- No Lorem Ipsum text used.
- Beautiful color contrast and visually appealing design.

## Layout:
- Beautiful header with a navbar.
- Dynamic sections based on routes.
- Meaningful footer with website logo+name, copyright information, and social media links.
- Custom 404 Error Page.

## Navbar Design:
- Navbar displays website name+logo.
- Conditional rendering based on user authentication status.
  - Non-logged-in users see: Home, Queries, Log-in.
  - Logged-in users see: Home, Queries, Recommendations, MyQueries, MyRecommendations, Logout.

## Login & Registration Systems:
- Login page with email/password-based login and Google Sign-in options.
- Registration page with name, email, password, and photo URL fields.
- Relevant error messages displayed on both login and registration pages.

## Home-Page:
- Slider section to express the website's purpose.
- Banner section with a call-to-action button to navigate to the All Queries Page.
- Recent Queries section displaying recently added posts in a card format.
- 2 Extra sections with creative design ideas.

## AddQueries (Private):
- Private route accessible only to logged-in users.
- Form for users to add queries about products.

## MyQueries (Private):
- Private route displaying queries added by the user.
- Stylish banner with an "Add Queries" button.
- Query cards displayed in 1/2/3 column layout with options to view details, update, and delete.

## Queries:
- Display all queries in descending order with relevant information in a card format.
- Recommendations count and recommendation button for each query.

## Query Details:
- Display specific query details with recommendations.
- Allow users to add recommendations with a form.
- Display all recommendations for the query.

## MyRecommendations:
- Display all recommendations made by the user.
- Option to delete recommendations.

## RecommendationsForMe:
- Display recommendations made by others for the user's queries.

## Challenges Requirements:
1. Search functionality based on product name.
2. JWT Authentication implemented for private routes.
3. Bu ons for toggling the grid layout in the All Queries Page.
4. Dark/Light theme toggling in the Navbar.

## Optional Features:
- Used a tailwind CSS library.
- Added a spinner for loading states.
- Implemented pagination for the Need Volunteer Page.


