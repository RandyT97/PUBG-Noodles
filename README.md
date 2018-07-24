
# 🍜PUBG Noodles🍜
PUBG Noodles is intended to be a website to provide interesting statistics to players of PlayerUnknown's BattleGrounds using PUBG's Developer API.

## 🍔Technology Stack🍔

### Back-End:
* Django 2.0
* Python 3.6
* SQLite 3.24.0

### Front-End:
* React v16.4.1
* HTML/CSS/JS

### External APIs:
* PUBG Developer API

## 📚Useful Resources📚
* [React Resources](https://github.com/enaqx/awesome-react)
* [Python 3.6](https://docs.python.org/3.6/tutorial/index.html)
* [Django 2.0](https://docs.djangoproject.com/en/2.0/)
* [Django Mozilla](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Django)
* [HTML Mozilla](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML)
* [CSS Mozilla](https://developer.mozilla.org/en-US/docs/Learn/CSS)
* [JavaScript Mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
* [The Fundamentals of GitHub](https://guides.github.com/)

## Pre-req
* [NPM](https://docs.npmjs.com/getting-started/installing-node)
* [PIP](https://pip.pypa.io/en/stable/installing/)


## Setup Instructions
1. Navigate to src/
2. Run ```mkvirtualenv noodle -p python3```
3. Run ```workon noodle``` to open the virtual env in the future
4. In the src/ directory, run ```pip install -r requirements.txt```
5. Navigate to src/reactify-ui/
6. Run ```npm install```

## Run Instructions
* In order to update changes, run ```npm run collect``` in src/reactify-ui/
* To launch server run ```python manage.py runserver``` in src/

