# Copyright (c) 2022, Dokos and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document

class Marquedevehicule(Document):
	def validate(self):
		self.set_description()

	def set_description(self):
		self.description = "Hello"


@frappe.whitelist()
def modification_du_texte(text):
	return f"<div style='font-weight: 700;'>{text}</div>"