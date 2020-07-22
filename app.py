import requests
from bs4 import BeautifulSoup
from flask import *

app = Flask(__name__)


def cases():
    url = 'https://www.worldometers.info/coronavirus/?utm_campaign=homeAdUOA?Si%3Ca%20href='
    r = requests.get(url)
    soup = BeautifulSoup(r.text,'html.parser')
    country = soup.find_all('tbody')[0].find_all('tr',style="",class_="")

    countries = []
    for c in country:
        countries.append([c.contents[3].get_text(),c.contents[5].get_text(),c.contents[9].get_text(),c.contents[13].get_text(),c.contents[17].get_text()])

    return countries

countries = cases()    

@app.route('/')
def home():
    return render_template('index.html',countries=countries);

if __name__ == "__main__":
    app.run(debug=True)    
    


