// Copyright (c) 2022, Dokos and contributors
// For license information, please see license.txt

frappe.ui.form.on('Marque de vehicule', {
	refresh: function(frm) {
		const champ = frm.get_field("description_brute")
		champ.$wrapper.find("label").text("Hello World!")

		frm.add_custom_button(__("Déclencher une action"), () =>
			declenchement()
		);

		frm.page.add_menu_item("Algérie", () => {
			console.log("Menu Algérie")
		})

		console.log(frm.page)
	},
	description_brute: function(frm) {
		frappe.call({
			method: "algerie.algerie.doctype.marque_de_vehicule.marque_de_vehicule.modification_du_texte",
			args: {
				text: frm.doc.description_brute
			}
		}).then(r => {
			frm.set_value("description", r.message)
		})
	}
});


const declenchement = () => {
	console.log("DECLENCHEMENT")
}