from typing import Dict, List

from flask import request

from .models import Product, db


def products_list() -> List[Dict]:
    return [p.serialize for p in Product.query.all()]


def create_product() -> None:
    _json: Dict = request.get_json()
    name: str = _json["name"]
    price: float = _json["price"]

    product = Product(name=name, price=price)
    db.session.add(product)
    db.session.commit()


def get_product(product_code: str) -> Dict:
    product = Product.query.get_or_404(product_code)
    return product.serialize


def update_product(product_code: str) -> None:
    product = Product.query.get_or_404(product_code)
    _json: Dict = request.get_json()

    if "name" in _json:
        product.name = _json["name"]
    if "price" in _json:
        product.price = _json["price"]

    db.session.commit()


def delete_product(product_code: str) -> None:
    product = Product.query.get_or_404(product_code)
    db.session.delete(product)
    db.session.commit()
