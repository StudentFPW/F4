### Project created by Leonids Jofe from flow 104-FPW

## Is allready generated you don't need it.

```sh
To generate yml file "py manage.py spectacular --color --file schema.yml"
```

## Clone repository

```sh
git clone https://github.com/StudentFPW/F4.git
```

## Configure backend

```sh
py -m venv venv

venv/scripts/activate

pip install -r requirements.txt

(optional) python.exe -m pip install --upgrade pip

cd .\back\

py manage.py makemigrations

py manage.py migrate

py manage.py createsuperuser

py manage.py runserver

Go in addres http://127.0.0.1:8000/admin

Add new category + recipes in database
```

## Configure the frontend

```sh
cd .\front\

npm install

npm start
```
