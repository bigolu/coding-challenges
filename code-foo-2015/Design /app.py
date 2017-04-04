from flask import Flask, render_template, request, redirect, jsonify
import requests, json
import random

app = Flask(__name__)



@app.route('/')
def home():
	return render_template('index.html')

@app.route('/api', methods = ['GET', 'POST'])
def api():
	r = requests.get("http://ign-apis.herokuapp.com/articles?startIndex=0&amp;count=20")
	return jsonify(results = r.json())

@app.route('/api2', methods = ['GET', 'POST'])
def api2():
	r = requests.get("http://ign-apis.herokuapp.com/videos?startIndex=0&amp;count=20")
	return jsonify(results = r.json())



@app.route('/randAlbumPrice', methods=['GET'])
def bandsPrice():

	while(True):
		merch = False;
		luckyBand = random.randint(1, 50)
		r = requests.get("http://perelste.in:8001/api/bands/id/" + str(luckyBand))
		mr = jsonify(results = r.json())
		r = r.json()

		for k in range(len(r[0]['related_links'])):
			print r[0]['related_links'][0]['category']
			if(r[0]['related_links'][k]['category'] == "Official_Merchandise"):
				print "1"
				merch = True
				break

		if(merch):
			print "2"
			allMerch = requests.get(r[0]['related_links'][k]['url'])
			allMerch = allMerch.text

			dollas = allMerch.find("$")

			if(dollas != -1):
				price = 0
				if(allMerch[dollas + 1].isdigit()):
					price = price + (10 * int(allMerch[dollas + 1]))
					print price
				if(allMerch[dollas + 2].isdigit()):
					price = price + int(allMerch[dollas + 2])
					print price

				if(price != 0):
					z = requests.get("http://perelste.in:8001/api/releases/band_id/" + str(r[0]['id']))
					z = z.json()

					album = z[0]['name']

					transaction = random.randint(50, 8000)



					name = r[0]['name']
					return json.dumps({"price": price, "name": name, "album": album, "tRac": transaction})
				



	

if __name__ == '__main__':
    app.run(debug=True)

		
