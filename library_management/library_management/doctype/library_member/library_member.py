# Copyright (c) 2025, thongmeow and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document
from frappe.utils import validate_email_address
from frappe import ValidationError, throw
import frappe

# class LibraryMember(Document):
# 	pass

class LibraryMember(Document):
    #this method will run every time a document is saved
    def before_save(self):
        #ตรวจสอบอีเมลก่อน
        if self.email_address:
            self.validate_email(self.email_address)
			#สร้าง full name
            self.full_name = f'{self.first_name} {self.last_name or ""}'

    @staticmethod
    def validate_email(email: str):
        try:
            # ตรวจสอบรูปแบบอีเมลก่อน
            validate_email_address(email, throw=True)

            # ตรวจสอบว่าเป็นอีเมลองค์กร
            if not email.endswith("@srisawadpower.com"):
                throw("อีเมลต้องเป็น @srisawadpower.com เท่านั้น")

        except ValidationError as e:
            throw("❌ อีเมลไม่ถูกต้อง")