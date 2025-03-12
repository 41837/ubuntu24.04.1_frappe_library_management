// Copyright (c) 2025, thongmeow and contributors
// For license information, please see license.txt

// frappe.ui.form.on("loan_condition", {
// 	refresh(frm) {

// 	},
// });

frappe.ui.form.on("loan_condition", {
	refresh: function(frm) {
        frm.add_custom_button('Click Me Button',() =>{
            frappe.msgprint(__('You clicked me!!'));
        })

        frm.add_custom_button('Click Me1', () =>{
            frappe.msgprint(__('You clicked 1!!'));
        }, 'Multi button')

        frm.add_custom_button('Click Me2', () =>{
            frappe.msgprint(__('You clicked 2!!'));
        }, 'Multi button')
	},

    onload: function(frm) {
        frm.fields_dict['section_guarantee'].expand();
    },
});
