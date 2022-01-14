# Adventr
<a href='https://aa-adventr.herokuapp.com/' target='_blank' > Adventr </a> is based off of <a href='https://flickr.com' target='_blank' > Flickr </a>, where users can share their vacation and adventure photos!

## Launching locally:

<ol>
  
  <li>
Clone the project repository:
    
    
<pre> git clone https://github.com/Bapboop/Adventr.git </pre> 
  </li>
  
  
   <li>
  Create a local .env file modeled after the provided .env.example in the backend directory
     
     
<pre>
PORT=5000
DB_USERNAME=auth_app
DB_PASSWORD=<< Strong Password >>
DB_DATABASE=auth_db
DB_HOST=localhost
JWT_SECRET= SECRET HERE
JWT_EXPIRES_IN=604800
</pre>
  </li>
  Install dependencies from the root directory:
  <pre>npm install</pre> 
  <li>
   Add the following code snippet to your package.json file withiny our front directly. Make sure the port matches your .env file configuration.
   <pre>proxy": "http://localhost:5000"</pre>
    
  </li>
    <li> 
    Create a PostgreSQL user with the ability to create a database and a password in PSQL.
    
  <pre>psql -c "CREATE USER <username> PASSWORD '<password>' CREATEDB" /pre>
  </li>
    <li> 
    Migrate and seed the database from within the backend directory
  <pre>
  npx dotenv sequelize db:create
  npx dotenv sequelize db:migrate
  npx dotenv sequelize db:seed:all
  </pre>
  </li>
    <li> 
    Run the project with the starting scrip in both the frontend and backend directories.
    <pre> npm start </pre>
    
  </li>
  
  You are now able to navigate to http://localhost:3000 if the application has not already opened in your browser.
</ol
  

 
