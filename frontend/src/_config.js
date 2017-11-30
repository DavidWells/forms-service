const isDev = (process.env.NODE_ENV === 'development')

export const config = {
  // cors settings
  domain: (isDev) ? 'http://localhost:3000' : 'https://debug-auth0.netlify.com',
  // auth0 setup
  auth0: {
    domain: 'serverlessqa.auth0.com',
    clientId: 'PDBGl0xX7q7Yi8w1pdpD19T3LBRQMPPu',
    //apiUrl: 'throwaway',
    callbackUrl: (isDev) ? 'http://localhost:3000/callback' : 'https://debug-auth0.netlify.com/callback'
  },
  // api endpoints
  api: {
     forms: 'https://d3ul21vxig.execute-api.us-west-2.amazonaws.com/prod/get-forms',
     submissions: 'https://d3ul21vxig.execute-api.us-west-2.amazonaws.com/prod/get-entries'
   }
}
