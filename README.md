<h2>WatchVerse App</h2>

<p>Built by Adam Ellison.</p>

<p>
  WatchVerse is a full-stack movie browsing application that allows users to explore
  movies by genre and manage a personal watchlist. This project builds on my previous
  React application by replacing the mock backend with a real Express API and a
  PostgreSQL database hosted on Neon.
</p>

<h2>Live Links</h2>

<ul>
  <li><strong>Frontend:</strong> https://project04-moviewatch-fullstack-pzuubvg1z-adamtechworks-projects.vercel.app</li>
  <li><strong>Backend:</strong> https://watchverse-api.onrender.com</li>
</ul>

<hr />


<h2>Project Overview</h2>

<p>
  This project demonstrates a full-stack CRUD application using a 3-tier architecture:
</p>

<ul>
  <li><strong>Presentation Layer:</strong> React frontend</li>
  <li><strong>Application Layer:</strong> Express backend with API routes and business logic</li>
  <li><strong>Data Layer:</strong> PostgreSQL database hosted on Neon</li>
</ul>

<p>Users can:</p>

<ul>
  <li>Browse movies by genre</li>
  <li>Search movies with autocomplete suggestions</li>
  <li>Add movies to a watchlist</li>
  <li>Update watchlist items with status and personal rating</li>
  <li>Remove movies from the watchlist</li>
</ul>

<hr />

<h2>Tech Stack</h2>

<ul>
  <li><strong>Frontend:</strong> React, Vite, React Router</li>
  <li><strong>Backend:</strong> Node.js, Express</li>
  <li><strong>Database:</strong> PostgreSQL (Neon)</li>
  <li><strong>Database Client:</strong> pg</li>
  <li><strong>Styling:</strong> CSS</li>
  <li><strong>API Testing:</strong> Postman</li>
  <li><strong>Database Tool:</strong> Beekeeper Studio</li>
  <li><strong>Version Control:</strong> Git and GitHub</li>
  <li><strong>Deployment:</strong> Vercel (frontend), Render (backend)</li>
</ul>

<hr />

<h2>Project Structure</h2>

<pre><code>project03/
  client/
    src/
      components/
      pages/
      services/
    .env
    package.json
    vite.config.js
   server/
    src/
      controllers/
      db/
      routes/
      services/
      app.js
      server.js
    .env
    package.json
/.gitingore
</code></pre>

<hr />

<h2>Wireframes</h2>

<p>Initial design concepts for the application layout:</p>

<h3>Home Page</h3>
<img src="client/public/images/home3.png" width="400" />

<h3>Movies Page</h3>
<img src="client/public/images/browse3.png" width="400" />

<h3>Watchlist Page</h3>
<img src="client/public/images/watchlist3.png" width="400" />

<hr />

<h2>Features</h2>

<ul>
  <li>React Router with multiple pages</li>
  <li>Genre-based movie browsing with carousel layouts</li>
  <li>Search with autocomplete suggestions</li>
  <li>Add movies to watchlist</li>
  <li>Update watchlist items with status and personal rating</li>
  <li>Delete movies from watchlist</li>
  <li>Prevent duplicate watchlist entries</li>
  <li>Reusable React components</li>
  <li>Dynamic home page with featured banner and recommendations</li>
  <li>Movie posters displayed throughout the app</li>
  <li>Responsive UI inspired by streaming platforms</li>
</ul>


<hr />

<h2>Routes</h2>

<ul>
  <li><code>/</code> — Home page</li>
  <li><code>/movies</code> — Browse all movies by genre</li>
  <li><code>/watchlist</code> — View saved watchlist movies</li>
</ul>

<hr />

<h2>API Endpoints</h2>

<ul>
  <li><code>GET /api/movies</code> — Retrieve all movies</li>
  <li><code>GET /api/watchlist</code> — Retrieve watchlist movies</li>
  <li><code>POST /api/watchlist</code> — Add a movie to the watchlist</li>
  <li><code>PATCH /api/watchlist/:id</code> — Update a watchlist item</li>
  <li><code>DELETE /api/watchlist/:id</code> — Remove a movie from the watchlist</li>
</ul>

<hr />

<h2>Database Setup</h2>

<p>
  This project uses a PostgreSQL database hosted on Neon. The database includes:
</p>

<ul>
  <li><code>movies</code> table for the movie catalog</li>
  <li><code>watchlist</code> table for user-managed watchlist data</li>
</ul>

<p>
  Movie data was seeded into the database using the original project dataset, and all
  CRUD actions now interact with PostgreSQL instead of <code>db.json</code>.
</p>

<hr />

<h2>Environment Variables</h2>

<p>The frontend uses an environment variable for the backend API base URL:</p>

<pre><code>VITE_API_BASE_URL=http://localhost:3000</code></pre>
<p>The backend uses an environment variable for the PostgreSQL connection:</p>

<pre><code>DATABASE_URL=your_neon_database_url</code></pre>

<hr />

<h2>Running Locally</h2>

<h3>1. Start the backend</h3>

<pre><code>cd server
npm install
npm start
</code></pre>

<p>The backend runs on:</p>

<pre><code>http://localhost:3000</code></pre>

<h3>2. Start the frontend</h3>

<pre><code>cd client
npm install
npm run dev
</code></pre>

<p>The frontend runs on a Vite development port such as:</p>

<pre><code>http://localhost:5173</code></pre>

<hr />

<h2>User Stories</h2>

<ul>
  <li>As a user, I want to browse movies by genre so I can find something to watch.</li>
  <li>As a user, I want to search movies quickly with autocomplete suggestions.</li>
  <li>As a user, I want to add movies to a watchlist so I can save them for later.</li>
  <li>As a user, I want to update a watchlist item with my own status and rating.</li>
  <li>As a user, I want to remove a movie from my watchlist when I no longer need it.</li>
</ul>

<hr />


<h2>Reusable Components</h2>

<ul>
  <li>Navbar</li>
  <li>Footer</li>
  <li>SearchBar</li>
  <li>MovieList</li>
  <li>MovieCard</li>
  <li>EmptyState</li>
  <li>LoadingMessage</li>
</ul>

<hr />

<h2>State Management</h2>


<p>This project uses both shared and local state:</p>

<ul>
  <li><strong>Shared state:</strong> watchlist data managed across the app</li>
  <li><strong>Local state:</strong> loading, search terms, editing state, success/error messages, and page-specific UI behavior</li>
</ul>

<hr />

<h2>Deployment</h2>

<ul>
  <li><strong>Frontend:</strong> Deploy the <code>client</code> folder to Vercel</li>
  <li><strong>Backend:</strong> Deploy the <code>server</code> folder to Render</li>
  <li><strong>Database:</strong> Hosted on Neon</li>
</ul>

<p>
  When deployed, the frontend connects to the live backend using an environment variable:
</p>

<pre><code>VITE_API_BASE_URL=https://your-render-backend-url.onrender.com</code></pre>

<p>
  This allows the application to switch between local development and production.
</p>

<hr />


<h2>Challenges</h2>

<ul>
 <li>Migrating from a json-server backend to a real Express/PostgreSQL architecture</li>
  <li>Designing and testing full CRUD routes with PostgreSQL</li>
  <li>Connecting the frontend to the new backend without breaking existing UI functionality</li>
  <li>Handling differences between frontend and backend field naming</li>
  <li>Managing environment variables for local development and deployment</li>
</ul>

<hr/>

<h2>Future Improvements</h2>

<ul>
  <li>Add authentication and user accounts</li>
  <li>Create user-specific watchlists</li>
  <li>Add stronger backend validation and error handling</li>
</ul>

<hr/>

