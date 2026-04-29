# ITEW6 Frontend

Vue.js frontend application for the ITEW6 Student Management System.

## Features

- Vue 3 with Composition API
- Vite for fast development and building
- Pinia for state management
- Vue Router for navigation
- Tailwind CSS for styling
- Axios for API communication
- Vercel-ready deployment configuration

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Recommended Browser Setup

- Chromium-based browsers (Chrome, Edge, Brave, etc.):
  - [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
  - [Turn on Custom Object Formatter in Chrome DevTools](http://bit.ly/object-formatters)
- Firefox:
  - [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
  - [Turn on Custom Object Formatter in Firefox DevTools](https://fxdx.dev/firefox-devtools-custom-object-formatters/)

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

## Vercel Deployment

This project is configured for automatic deployment on Vercel.

### Automatic Deployment

1. Push your code to the GitHub repository
2. Connect your repository to Vercel
3. Vercel will automatically detect the Vue.js configuration and deploy

### Manual Deployment

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Set environment variable: `VITE_API_BASE_URL` to your Laravel API URL

### Environment Variables

- **Development**: Uses `http://127.0.0.1:8000/api/v1`
- **Production**: Set `VITE_API_BASE_URL` in Vercel dashboard to your Laravel Cloud URL

#### Setting Environment Variables in Vercel:

1. Go to your Vercel project dashboard
2. Click on "Settings" tab
3. Click on "Environment Variables"
4. Add a new variable:
   - **Name**: `VITE_API_BASE_URL`
   - **Value**: `https://your-laravel-app.laravel.cloud/api/v1`
5. Click "Save"
6. Redeploy your application (Vercel will automatically redeploy)

#### Important Notes:
- Environment variables must start with `VITE_` to be exposed to the frontend
- Replace `your-laravel-app.laravel.cloud` with your actual Laravel Cloud URL
- Check the browser console to see the current API URL being used (debug logs are included)

### Configuration Files

- `vercel.json` - Vercel deployment configuration
- `.env` - Environment variables (development)
- `vite.config.js` - Vite build configuration

## API Configuration

The frontend connects to the backend API through the `src/services/api.js` file. The API base URL is configured using environment variables:

```javascript
const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL || 'http://127.0.0.1:8000/api/v1',
});
```

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Recommended Browser Setup

- Chromium-based browsers (Chrome, Edge, Brave, etc.):
  - [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
  - [Turn on Custom Object Formatter in Chrome DevTools](http://bit.ly/object-formatters)
- Firefox:
  - [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
  - [Turn on Custom Object Formatter in Firefox DevTools](https://fxdx.dev/firefox-devtools-custom-object-formatters/)

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
