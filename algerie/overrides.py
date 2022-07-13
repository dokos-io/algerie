
from erpnext.selling.doctype.customer.customer import Customer

class AlgerieCustomer(Customer):
	def validate(self):
		super().validate()

		self.tax_id = "12345678910"

