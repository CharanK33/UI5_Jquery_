## Application Details
|               |
| ------------- |
|**Generation Date and Time**<br>Fri Jun 13 2025 12:05:57 GMT-0400 (Eastern Daylight Time)|
|**App Generator**<br>SAP Fiori Application Generator|
|**App Generator Version**<br>1.18.0|
|**Generation Platform**<br>Visual Studio Code|
## project1

An SAP Fiori application.

### Starting the generated app

-   This app has been generated using the SAP Fiori tools - App Generator, as part of the SAP Fiori tools suite.

#### Pre-requisites:

1. Active NodeJS LTS (Long Term Support) version and associated supported NPM version.  (See https://nodejs.org)

# Model App (SAPUI5 + jQuery)

This is a simple SAPUI5 application where users can view Rivian R2 and R3 car models, guess their launch year, and get instant feedback. Along with standard UI5 features, jQuery is used to improve the user experience with animations and effects.

---

## ✅ Features

- Switch between R2 and R3 car models using a segmented button
- Image updates based on the selected model
- Input field for users to guess the launch year
- Feedback message shown at the top of the screen
- Shake animation when the guess is incorrect
- Zoom-in effect on the image when hovered

---

## ✨ jQuery Usage

We used jQuery in a few specific places to enhance the UI:

- **Smooth image change:**  
  When the user switches models, the image fades out and slides in smoothly using jQuery.

- **Shake effect for wrong input:**  
  If the user enters an incorrect year, the input field shakes briefly to show it's wrong.

- **Tooltip on image:**  
  A dynamic tooltip is set using jQuery, showing which model is currently displayed.

- **Toast repositioning:**  
  Feedback messages appear at the top of the screen instead of overlapping the input area.

These enhancements are done using `this.byId("...").$()` to safely access DOM elements managed by UI5. Original UI5-only logic is commented out in the controller for reference.

---

## 📁 Project Structure

- `View1.view.xml`: UI layout with buttons, image, and input field
- `View1.controller.js`: All main logic and jQuery usage
- `style.css`: Zoom and layout styles
- `models.js`: Sets up selected model and launch year data
- `Component.js`: App initialization and routing setup

---

## 🚀 How to Run

This project is built using **SAP Fiori Tools in VS Code**.

To run the app:

1. Open the project in VS Code
2. Open a terminal and run: npm run start-noflp


