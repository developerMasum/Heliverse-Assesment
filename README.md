# User Management Application

This project is a User Management Application that allows users to search, filter, and manage a list of users. The frontend is designed to be responsive and visually appealing, while the backend provides CRUD API operations for managing user data, including filtering, searching, and pagination.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Frontend Implementation](#frontend-implementation)
  - [Display Users in Cards with Pagination](#display-users-in-cards-with-pagination)
  - [Search by Name](#search-by-name)
  - [Filters: Domain, Gender, Availability](#filters-domain-gender-availability)
  - [Create a Team](#create-a-team)
  - [Show Team Details](#show-team-details)
  - [Responsive Design](#responsive-design)
- [Backend Implementation](#backend-implementation)
  - [CRUD API Endpoints](#crud-api-endpoints)
  - [Filtering, Searching, and Pagination](#filtering-searching-and-pagination)
  - [Team Management API Endpoints](#team-management-api-endpoints)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)
- [Conclusion](#conclusion)

## Features

### Frontend
1. **Display Users in Cards with Pagination:** Users are displayed in a card format with pagination support. The application shows 20 users per page.
2. **Search by Name:** Users can search for users by name. The list of displayed users dynamically updates as the search query changes.
3. **Filters:** Users can filter the displayed user list by Domain, Gender, and Availability. Multiple filters can be applied simultaneously.
4. **Create a Team:** Users can create a team by selecting users from the list. Only users with unique domains and availability can be selected.
5. **Show Team Details:** Once a team is created, the application displays the details of the selected users.
6. **Responsive Design:** The application is fully responsive and works well on various screen sizes.

### Backend
1. **CRUD Operations:** The backend provides API endpoints for Create, Read, Update, and Delete operations on user data.
2. **Filtering, Searching, and Pagination:** The backend implements logic for filtering users by Domain, Gender, and Availability, searching by name, and paginating the results.
3. **Team Management:** The backend provides endpoints for creating and retrieving team details, ensuring users with unique domains and availability are selected.

## Technologies Used

- **Frontend:**
  - React
  - Tailwind CSS
  - React Paginate

- **Backend:**
  - Node.js
  - Express.js
  - MongoDB (Mongoose for ODM)
  - REST API

## Frontend Implementation

### Display Users in Cards with Pagination

- **Description:** Users are displayed in a grid of cards. Each card contains the user's details. Pagination is implemented to display 20 users per page.

### Search by Name

- **Description:** A search bar allows users to search for other users by name. The user list updates dynamically as the search query changes.

### Filters: Domain, Gender, Availability

- **Description:** Users can filter the displayed user list by selecting Domain, Gender, and Availability.

### Create a Team

- **Description:** Users can create a team by selecting users with unique domains and availability. Selected users are added to the team.

### Show Team Details

- **Description:** Once a team is created, the application displays the details of the selected users.

### Responsive Design

- **Description:** The application is fully responsive and works well on various screen sizes.

## Backend Implementation

### CRUD API Endpoints

- **GET /api/users:** Retrieve all users with pagination support.
- **GET /api/users/:id:** Retrieve a specific user by ID.
- **POST /api/users:** Create a new user.
- **PUT /api/users/:id:** Update an existing user.
- **DELETE /api/users/:id:** Delete a user.

### Filtering, Searching, and Pagination

- **Filtering:** Filter users based on Domain, Gender, and Availability.
- **Searching:** Search users by their names.
- **Pagination:** Retrieve a specific number of users per page.

### Team Management API Endpoints

- **POST /api/team:** Create a new team by selecting users with unique domains and availability.
- **GET /api/team/:id:** Retrieve the details of a specific team by ID.

## Setup and Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/user-management-app.git
   ```
