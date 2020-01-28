import logging

import connexion

from qa_app.models import db

for l in [
    "connexion.api",
    "connexion.decorators.decorator",
    "connexion.decorators.response",
    "connexion.api.security",
    "connexion.decorators.produces",
    "connexion.resolver",
    "connexion.decorators.validation",
    "connexion.app",
]:
    root = logging.getLogger(l)
    if root.handlers:
        for handler in root.handlers:
            root.removeHandler(handler)
    logging.basicConfig(format="%(asctime)s %(message)s", level=logging.DEBUG)

connexion_app = connexion.App(__name__, specification_dir="swagger/", debug=True)
connexion_app.add_api("python-tech-test.yaml")

app = connexion_app.app

app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///test.db"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

db.init_app(app)
