# Moto-frontend

## Running project for the first time
Ran with Node.js v16.13.1 installed.
```
cd moto-frontend
npm i
npm run build
npm run start
```

## Libraries used
Material Design for Bootstrap
Angular Bootstrap

## Deploy (for repo owners)
Commands
```
firebase login
firebase init # req once
firebase deploy
```
### Add:
angular.json: "outputPath": "public"
environment variables from firebase in src/app/environments/environment.ts
