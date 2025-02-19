// Copyright (c) 2025, thongmeow and contributors
// For license information, please see license.txt

// frappe.ui.form.on("Library Member", {
// 	refresh(frm) {

// 	},
// });

frappe.ui.form.on('Library Member', {
    after_save: function(frm) {
        frappe.msgprint({
            title: __('สำเร็จ'),
            indicator: 'green',
            message: __('บันทึกข้อมูลสำเร็จ! 🎉')
        });
    }
});