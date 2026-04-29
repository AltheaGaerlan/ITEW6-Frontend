<template>
  <div class="min-h-screen bg-gray-100 p-8">
    <div class="max-w-4xl mx-auto">
      <h1 class="text-3xl font-bold text-gray-900 mb-8">Environment Debug Page</h1>
      
      <div class="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 class="text-xl font-semibold mb-4">Environment Variables</h2>
        <div class="space-y-2">
          <div class="flex justify-between">
            <span class="font-medium">VITE_API_BASE_URL:</span>
            <span class="text-blue-600">{{ apiBaseUrl }}</span>
          </div>
          <div class="flex justify-between">
            <span class="font-medium">MODE:</span>
            <span class="text-green-600">{{ mode }}</span>
          </div>
          <div class="flex justify-between">
            <span class="font-medium">PROD:</span>
            <span class="text-purple-600">{{ isProd }}</span>
          </div>
          <div class="flex justify-between">
            <span class="font-medium">DEV:</span>
            <span class="text-orange-600">{{ isDev }}</span>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 class="text-xl font-semibold mb-4">API Test</h2>
        <button 
          @click="testAPI" 
          :disabled="loading"
          class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:bg-gray-400"
        >
          {{ loading ? 'Testing...' : 'Test API Connection' }}
        </button>
        <div v-if="apiResult" class="mt-4">
          <h3 class="font-semibold mb-2">API Result:</h3>
          <pre class="bg-gray-100 p-4 rounded text-sm">{{ JSON.stringify(apiResult, null, 2) }}</pre>
        </div>
      </div>

      <div class="bg-white rounded-lg shadow-md p-6">
        <h2 class="text-xl font-semibold mb-4">All Environment Variables</h2>
        <pre class="bg-gray-100 p-4 rounded text-sm overflow-auto max-h-96">{{ JSON.stringify(allEnv, null, 2) }}</pre>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const apiBaseUrl = ref(import.meta.env.VITE_API_BASE_URL || 'NOT SET')
const mode = ref(import.meta.env.MODE)
const isProd = ref(import.meta.env.PROD)
const isDev = ref(import.meta.env.DEV)
const allEnv = ref({})
const loading = ref(false)
const apiResult = ref(null)

onMounted(() => {
  // Log to console as well
  console.log('=== DEBUG PAGE MOUNTED ===')
  console.log('VITE_API_BASE_URL:', import.meta.env.VITE_API_BASE_URL)
  console.log('All env vars:', import.meta.env)
  console.log('============================')
  
  // Show all environment variables (safe ones)
  const safeEnv = {}
  Object.keys(import.meta.env).forEach(key => {
    if (key.startsWith('VITE_') || ['MODE', 'PROD', 'DEV', 'SSR'].includes(key)) {
      safeEnv[key] = import.meta.env[key]
    }
  })
  allEnv.value = safeEnv
})

const testAPI = async () => {
  loading.value = true
  apiResult.value = null
  
  try {
    const response = await fetch(import.meta.env.VITE_API_BASE_URL + '/test')
    const data = await response.json()
    apiResult.value = {
      success: true,
      status: response.status,
      data: data
    }
  } catch (error) {
    apiResult.value = {
      success: false,
      error: error.message
    }
  } finally {
    loading.value = false
  }
}
</script>
