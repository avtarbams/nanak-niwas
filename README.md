

## Installing Boilerplate. Follow instructions below.

1. npm install
2. npm start
3. Use "npm run storybook" to run Application Storybook

---

## Folder Structure

The project structure presented in this boilerplate is based on component driven development methodology. 


```
├── .storybook               # Storybook configurations
├── public                   # Static public assets (not imported anywhere in source code)
├── build                    # Build Folder
├── src                      # Application source code
│   ├── index.html           # Main HTML page container for app
│   ├── components           # Global Reusable Components
│   ├── containers           # Global Reusable Container Components
│   ├── actions              # Global Reusable Actions Components
│   ├── constants            # Global Reusable Constants
│   ├── reducers             # Global Reusable Reducer Components
│   ├── types                # Global Reusable types
│   └── styles               # Application-wide styles (generally settings)
└── tests                    # Unit tests
```
