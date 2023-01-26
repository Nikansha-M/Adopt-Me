##### To start an npm project 
- run npm init -y at the root of your project (the -y bypasses all the questions, you can always edit package.json later)


##### To install Prettier (in the root of project folder)
- npm install --save-dev prettier@2.7.1 (or npm i -D prettier@2.7.1) -> -D means it's for development only


##### Since this is a Prettier project, create a file called .prettierrc and put {} (which is a configuration object) in it. 
- This lets everyone know this is a Prettier project that uses the prettier default configuration


##### Install ESLint to catch JS problems
- run:  npm install -D eslint@8.24.0 eslint-config-prettier@8.5.0
- create src\.eslintrc.json file


##### create .gitignore file in root directory


##### install Vite
- run:  npm install -D vite@3.1.4 @vitejs/plugin-react@2.1.0


##### run:  npm run dev
- start the development server on http://localhost:5173/


