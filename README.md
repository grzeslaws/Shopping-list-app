# Shopping list app

Application to improve your shopping.
Check it out at https://shoppli.pl

## Installation backend

Use the package manager [pip](https://pip.pypa.io/en/stable/) to install dependencies.

```bash
cd backend
python -m venv venv
source venv/bin/activate # on macOs
. venv/Scripts/activate # on Windows
pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser --email admin@example.com --username admin
python manage.py runserver
```

Create db in MySql and set up in api/settings.py

Sometimes on Ubuntu you should install
```
sudo apt-get install python-mysqldb
```

## Installation frontend

```bash
cd frontend
yarn install
# or
npm i
npm start
# or
npm build
```
