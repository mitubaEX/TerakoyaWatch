# -*- coding: utf-8 -*-
from flask import Flask, jsonify, abort, make_response, request
import firebase_admin
from firebase_admin import credentials
from firebase_admin import db

api = Flask(__name__)
cred = credentials.Certificate(
    './terakoyawatch-firebase-adminsdk-0ksrc-b4bbf5e344.json')

firebase_admin.initialize_app(cred, {
    'databaseURL': 'https://terakoyawatch.firebaseio.com/',
    'databaseAuthVariableOverride': {
        'uid': 'admin'
    }
})

ref = db.reference('/data')


@api.route('/events', methods=['GET'])
def get_event():
    print(ref.get())

    result = {
        "data": ref.get()
    }

    return make_response(jsonify(result))


@api.route('/events', methods=['POST'])
def post_event():
    # ref.set([{'body': 'hello-world', 'date': '2018-03-19',
    #           'id': 1, 'title': 'hello-world'}])
    print(request.json)
    return make_response(jsonify({"data": "OK"}))


@api.errorhandler(404)
def not_found(error):
    return make_response(jsonify({'error': 'Not found'}), 404)


if __name__ == '__main__':
    api.run(host='0.0.0.0', port=8080)
