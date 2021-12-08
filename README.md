# ExpenseApp

## About
This app was created to only demonstrate my frontend skills. The app is a complete demo (there is no backend or database to store the expenses).
The app was written in React.js,HTML and pure CSS. The application is full responsive and have a pretty good UI.

![ExpenseApp screenshot](https://github.com/saouas/project00/blob/master/screenshot.png)


## Installation
To get the project up and running, and view components in the browser, complete the following steps:

1. Download and install Node: <https://nodejs.org/>
2. Install project dependancies: `npm install`
3. Start the development environment: `npm start`
4. Open your browser and visit <http://localhost:3000>

Feel free to edit content in file `sampleData.js` if you want to play with the App :)

## Development
When developing components, you may want assets automatically compiled and the browser to refresh automatically. To do this, run the following task:

* `npm run dev`

## Creating a static build
To create a static instance of this project, run the following task:

* `npm run build`

This will create a folder called `www`, into which the required files will be created.


## Repo structure
Sometimes it’s helpful to know what all these different files are for…

```
.
├── README.md
├── package-lock.json
├── package.json
├── screenshot.png
└── src
    ├── App.js
    ├── components
    │   ├── ExpenseFilter
    │   │   ├── ExpenseBar.css
    │   │   ├── ExpenseBar.js
    │   │   ├── ExpenseFilter.css
    │   │   ├── ExpenseFilter.js
    │   │   ├── ExpensesBar.css
    │   │   └── ExpensesBar.js
    │   ├── Expenses
    │   │   ├── ExpenseItem.css
    │   │   ├── ExpenseItem.js
    │   │   ├── Expenses.css
    │   │   ├── Expenses.js
    │   │   ├── ExpensesList.css
    │   │   └── ExpensesList.js
    │   ├── NewExpense
    │   │   ├── NewExpense.css
    │   │   ├── NewExpense.js
    │   │   ├── NewExpenseForm.css
    │   │   ├── NewExpenseForm.js
    │   │   ├── WaitingNewExpense.css
    │   │   └── WaitingNewExpense.js
    │   └── UI
    │       ├── Card.css
    │       ├── Card.js
    │       ├── Dropdown.css
    │       └── Dropdown.js
    ├── index.css
    ├── index.js
    ├── sampleData.js
    └── utils
        ├── date.js
        └── functions.js
```
