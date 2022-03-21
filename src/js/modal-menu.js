(() => {
	const refs = {
		openMenuBtn: document.querySelector("[data-modal-menu-open]"),
		closeMenuBtn: document.querySelector("[data-modal-menu-close]"),
		menu: document.querySelector("[data-modal-menu]"),
	};

	refs.openMenuBtn.addEventListener("click", toggleMenu);
	refs.closeMenuBtn.addEventListener("click", toggleMenu);

	function toggleMenu() {
		refs.menu.classList.toggle("is-hidden");
	}
})();