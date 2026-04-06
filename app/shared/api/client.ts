export const $fetch = globalThis.$fetch.create({
  baseURL: 'https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work',
  headers: { 'Content-Type': 'application/json' },
  onResponseError({ response }) {
    console.error('API Error:', response.status, response._data)
  }
})
