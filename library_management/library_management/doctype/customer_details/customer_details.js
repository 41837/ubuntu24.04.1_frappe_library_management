// Copyright (c) 2025, thongmeow and contributors
// For license information, please see license.txt

// frappe.ui.form.on("Customer_details", {
// 	refresh(frm) {

// 	},
// });


frappe.ui.form.on('Customer_details', {
    refresh: function(frm) {

        // ปุ่ม radio button ยินยอมด้านการตลาด -------------------------------------------------------------------------------------------------------
        let html_marketing_consent = `
            <div>
                <p>การให้ความยินยอมด้านการตลาด</p>
                <div id="marketing_consent" style="display: flex; gap: 15px; align-items: center;">
                    <label>
                        <input type="radio" name="f19" value="ยินยอม"> ยินยอม
                    </label>
                    <label>
                        <input type="radio" name="f19" value="ไม่ยินยอม"> ไม่ยินยอม
                    </label>
                </div>
            </div>
        `;

        // แสดง HTML ใน Field `f19`
        frm.fields_dict.f19.$wrapper.html(html_marketing_consent);

        // โหลดค่าเดิมจากฟิลด์ `f19`
        let stored_value = frm.doc.f19 || "";
        if (stored_value) {
            $(`[name="f19"][value="${stored_value}"]`).prop("checked", true);
        }

        // เมื่อกดเลือก radio button
        $("#checkbox_group input").on("change", function() {
            frm.set_value("f19", $(this).val());
        });


        // ปุ่ม radio button ยินยอมด้านข้อมูลอ่อนไหว -------------------------------------------------------------------------------------------------------
        let html_sensitive_data_consent = `
            <div>
                <p>การให้ความยินยอมด้านข้อมูลอ่อนไหว</p>
                <div id="sensitive_data_consent" style="display: flex; gap: 15px; align-items: center;">
                    <label>
                        <input type="radio" name="f20" value="ยินยอม"> ยินยอม
                    </label>
                    <label>
                        <input type="radio" name="f20" value="ไม่ยินยอม"> ไม่ยินยอม
                    </label>
                </div>
            </div>
        `;

        frm.fields_dict.f20.$wrapper.html(html_sensitive_data_consent);

        let stored_sitive_data_consent = frm.doc.f20 || "";
        if (stored_sitive_data_consent) {
            $(`[name="f20"][value="${stored_value}"]`).prop("checked", true);
        }

        $("#checkbox_group input").on("change", function() {
            frm.set_value("f20", $(this).val());
        });

        frm.fields_dict.section_details.collapse(false);
        frm.fields_dict.section_occupation.collapse(false);
        frm.fields_dict.section_consent.collapse(false);
        frm.fields_dict.section_address.collapse(false);
        frm.fields_dict.section_other.collapse(false);

    },

    onload: function(frm) {

    }
});


// frappe.ui.form.on('Your Doctype', {
//     refresh: function(frm) {
//         if (frm.doc.some_field == "บางค่า") {
//             frm.fields_dict.section_your_section_name.expand(); // ขยาย
//         } else {
//             frm.fields_dict.section_your_section_name.collapse(); // ย่อ
//         }
//     }
// });









