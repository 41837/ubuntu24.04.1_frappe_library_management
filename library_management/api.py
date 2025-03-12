import frappe


@frappe.whitelist(allow_guest=True)
def ping():
    return 'pong'

@frappe.whitelist(allow_guest=True)
def get_manga_details():
    return frappe.db.sql("""SELECT manga_name, author, publisher, publication_date FROM tabManga;""", as_dict=True)