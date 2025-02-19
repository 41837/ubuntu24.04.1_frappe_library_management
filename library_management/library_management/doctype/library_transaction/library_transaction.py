# Copyright (c) 2025, thongmeow and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document
from frappe.model.docstatus import DocStatus


class LibraryTransaction(Document):
	def before_submit(self):
		if self.type == "Issue":
			self.validate_issue()
			# set the article status to be Issued
			article = frappe.get_doc("Article", self.article)
			article.status = "Issued"
			article.save()

		elif self.type == "Return":
			self.validate_return()
			# set the article status to be Available
			article = frappe.get_doc("Article", self.article)
			article.status = "Available"
			article.save()

	def validate_issue(self):
		self.validate_membership()
		article = frappe.get_doc("Article", self.article)
		# article cannot be issued if it is already issued
		if article.status == "Issued":
			frappe.throw("Article is already issuedby another member")
	
	def validate_membership(self):
		# check if a valid membership exist for this Library member
		valid_membership = frappe.db.exists(
			"Library Membership", {
				"library_member": self.library_member,
				"docstatus": DocStatus.submitted(),
				"from_date": ("<", self.date),
				"to_date": (">", self.date)
			},
		)
		if not valid_membership:
			frappe.throw("The member does not have a valid membership")
