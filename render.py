from flask import Flask,render_template
from flask.ext.bootstrap import Bootstrap
from flask.ext.moment import Moment
from datetime import datetime

app=Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html',current_time=datetime.utcnow())

bootstrap=Bootstrap(app)
moment=Moment(app)

if __name__=='__main__':
    app.run(debug=True)
