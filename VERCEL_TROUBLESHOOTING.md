# Vercel Environment Variable Troubleshooting Guide

## 🚨 Current Issue
The frontend is still trying to connect to `127.0.0.1:8000` instead of your Laravel Cloud API. This means the environment variable `VITE_API_BASE_URL` is not being set properly in Vercel.

## 🔍 Debug Steps

### 1. Check Debug Page
Visit `https://your-vercel-app.vercel.app/debug` to see:
- Current environment variables
- API connection test
- Detailed debug information

### 2. Check Browser Console
Open browser console (F12) and look for:
```
=== API DEBUG INFO ===
VITE_API_BASE_URL: undefined
Final API Base URL: http://127.0.0.1:8000/api/v1
===================
```

If `VITE_API_BASE_URL` shows `undefined`, the environment variable is not set.

## 🛠️ Vercel Environment Variable Setup

### Step-by-Step Instructions:

1. **Go to Vercel Dashboard**
   - Visit [vercel.com](https://vercel.com)
   - Select your project

2. **Navigate to Environment Variables**
   - Click on **"Settings"** tab
   - Click on **"Environment Variables"** in the left sidebar

3. **Add the Environment Variable**
   - Click **"Add New"** button
   - **Name**: `VITE_API_BASE_URL`
   - **Value**: `https://itew6-backend-master-uq8nc2.free.laravel.cloud/api/v1`
   - **Environments**: Select **Production**, **Preview**, **Development**
   - Click **"Save"**

4. **Redeploy the Application**
   - Go to **"Deployments"** tab
   - Click **"Redeploy"** button next to your latest deployment
   - Wait for deployment to complete

## 🔧 Common Issues & Solutions

### Issue 1: Environment Variable Not Found
**Symptoms**: Console shows `VITE_API_BASE_URL: undefined`
**Solution**: 
- Double-check the variable name is exactly `VITE_API_BASE_URL`
- Ensure it's set for all environments (Production, Preview, Development)
- Wait for redeployment to complete

### Issue 2: Wrong Variable Name
**Symptoms**: Still connecting to localhost
**Solution**: 
- Variable name MUST start with `VITE_` for frontend access
- `API_BASE_URL` won't work - must be `VITE_API_BASE_URL`

### Issue 3: Cache Issues
**Symptoms**: Changes not reflected after setting variable
**Solution**: 
- Hard refresh the browser (Ctrl+F5)
- Clear browser cache
- Ensure redeployment completed successfully

### Issue 4: Wrong Value
**Symptoms**: API errors with wrong URL
**Solution**: 
- Verify the exact value: `https://itew6-backend-master-uq8nc2.free.laravel.cloud/api/v1`
- No trailing slash at the end
- Include `/api/v1` prefix

## ✅ Verification Checklist

After setting up the environment variable:

- [ ] Environment variable shows in Vercel dashboard
- [ ] Redeployment completed successfully
- [ ] Debug page shows correct API URL
- [ ] Browser console shows correct API URL
- [ ] Login attempt works without errors
- [ ] No more `127.0.0.1:8000` connection errors

## 🧪 Testing

### Test 1: Debug Page
Visit `/debug` route and verify:
- `VITE_API_BASE_URL` shows your Laravel Cloud URL
- API test button returns success

### Test 2: Login
Try to login and check:
- Network tab shows requests to Laravel Cloud URL
- No more localhost connection errors
- Login succeeds with valid credentials

## 📞 Support

If issues persist:
1. Check the debug page at `/debug`
2. Verify environment variables in Vercel dashboard
3. Ensure backend API is accessible
4. Check CORS configuration in backend

## 🎯 Expected Result

After proper setup:
```
=== API DEBUG INFO ===
VITE_API_BASE_URL: https://itew6-backend-master-uq8nc2.free.laravel.cloud/api/v1
Final API Base URL: https://itew6-backend-master-uq8nc2.free.laravel.cloud/api/v1
===================
```

Login should work without any network errors.
