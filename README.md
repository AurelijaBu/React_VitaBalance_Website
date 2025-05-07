# Vita Balance Website

**Vita Balance** is a fitness web app built with **React** (frontend) and **Django** (backend).

---

## Tech Stack

- **Frontend**: React, HTML, CSS, JavaScript
- **Backend**: Django

---

## Cloning and Running the Project

### 1. Clone the repository
To get started, clone the project repository by running the following command:
```bash
git clone https://github.com/AurelijaBu/React_VitaBalance_Website.git
```

### 2. Frontend setup
Navigate to the frontend folder and install the necessary dependencies:
```bash
cd React_VitaBalance_Website/vita-balance
npm install
```

To run the frontend locally, execute the following command:
```bash
npm run dev
```

You can then access the React application at:
```bash
http://localhost:5173/
```
### Important:
If your link is different, make sure to update the Django project settings file to allow this link by modifying CORS_ALLOWED_ORIGINS:
```bash
CORS_ALLOWED_ORIGINS = [
    "http://localhost:5173",
]
```

### 3. Backend setup
Open new terminal and navigate to the backend folder and set up a virtual environment:
```bash
cd ../vita_balance_api
python -m venv venv
```

Activate the virtual environment:
- For Windows:
```bash
venv\Scripts\activate
```
- For macOS/Linux:
```bash
source venv/bin/activate
```

Install the required dependencies from requirements.txt:
```bash
pip install -r requirements.txt
```

Start the Django server with the following command:
```bash
python manage.py runserver
```

API will be available at 
```bash
http://127.0.0.1:8000
```

---

## Project Structure

```bash
React_VitaBalance_Website/
│
├── vita-balance/           # React frontend
│   ├── public/             # Public assets (images)
│   ├── src/                # Source code for React app
│   │   ├── components/     # Homepage components
│   │   └── pages/          # Routes components
│   └── vite.config.js      # Vite configuration file
│
├── vita_balance_api/       # Django backend
│   ├── exercises/          # Exercise-related API logic
│   ├── vita_balance_api/   # Main Django app files
│   ├── manage.py/          # Main file
│   ├── db.sqlite3/         # Excercise database
│   └── requirements.txt    # Backend dependencies
```

---

## Notes

- Make sure both servers (frontend and backend) are running for full functionality.
- API base URL is set to local dev address (```bash http://127.0.0.1:8000/```).


