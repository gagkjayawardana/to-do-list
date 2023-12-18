# To-Do App

A simple To-Do application built with React, Redux, and Material-UI.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Branching Strategy](#branching-strategy)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This project is a To-Do application developed using React, Redux, and Material-UI. It allows users to manage their tasks with features such as adding new tasks, marking tasks as completed, and filtering tasks based on their status.

## Features

- Add new tasks with a title, deadline, and priority.
- Mark tasks as completed.
- Filter tasks based on their completion status (all, completed, active).
- Edit and delete existing tasks.
- Responsive design for various screen sizes.

## Branching Strategy

This project follows a feature branch workflow:

- **Feature Branches:** Individual branches created for developing new features or fixing bugs. Each feature or bug fix is developed in its own branch, keeping the changes isolated.

- **Initialize Branch:** serves as a staging or integration branch where feature branches are merged for testing and integration. It acts as a buffer between feature development and the main branch.

  - **Merging into Initialize Branch:** Feature branches are merged into the initialize branch for testing and integration.

- **Main Branch:** The primary branch represents the production-ready state of your application.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- Node.js and npm (Node Package Manager)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/gagkjayawardana/to-do-list.git
