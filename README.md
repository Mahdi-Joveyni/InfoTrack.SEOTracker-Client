# seo-tracker

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).


## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

check ~/appconfig.js for server BaseUrl

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build

```

# InfoTrack.SEOTracker-UI - Updates and Notes

## Summary of Changes
1. **Vue.js Package Updates**:
   - Updated all Vue.js dependencies to their latest stable versions for improved performance, security, and compatibility.

2. **Backend Integration**:
   - Refactored the UI to align with the new backend API structure and endpoints.
   - Updated API service calls to support MongoDB-based backend changes.

3. **State Management**:
   - Improved state management to ensure seamless communication between the frontend and backend.
   - Optimized Vuex store modules for better maintainability and performance.

4. **UI Enhancements**:
   - Enhanced the user interface for better responsiveness and user experience.
   - Fixed layout issues and improved component reusability.

## Development Instructions
1. **Setup**:
   - Navigate to the `ui` folder in the project directory.
   - Install the updated Vue.js dependencies by running:

```sh
npm install
```

2. **Configuration**:
   - Update the `.env` file with the backend API URL:

3. **Run the Development Server**:
   - Start the development server by running:

```sh
npm run serve
```

## Important Notes
- The UI is designed to work with the updated backend API. Ensure the backend is running and properly configured before starting the UI.
- This UI is not production-ready due to limitations with Google's CAPTCHA mechanisms. It is suitable for development and testing purposes only.

## Future Improvements
- Add end-to-end tests to cover critical user flows.
- Optimize the UI for production environments.
- Enhance error handling and user feedback mechanisms.
- Investigate solutions for handling Google's CAPTCHA challenges.

---

This document serves as a guide to the recent updates and the current state of the UI.