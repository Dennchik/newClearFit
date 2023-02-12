// *  < {Burger-Top-Menu} >
const overlay = document.getElementById('menu');
const burgerMenu = document.querySelector('.burger-menu');
const page = document.querySelector('.top-header__menu');
document.querySelector('.burger-menu').onclick = () => {
	burgerMenu.classList.toggle('_open');
	overlay.classList.toggle('_overlay');
	page.classList.toggle('_fx');
};
// -----------------------------------------------------------------------------
// * <{Выпадающий блок 'Side Bar Menu (JS)' & 'Search JS'}> Открытие выпадающих блоков
const items = document.querySelectorAll('._slideToggle');
items.forEach((item) => {
	const trigger = item.querySelector('._trigger-click');
	trigger.addEventListener('click', () => {
		const opened_item = document.querySelector('._open');
		_toggleItem(item); // Переключить текущий элемент
		if (opened_item && opened_item !== item) {
			_toggleItem(opened_item); // Закрывает ранее открытый элемент, если он
			// существует
		}
	});
});

const _toggleItem = (item) => {
	const collapse = new ItcCollapse(item.querySelector('._collapse'));

	if (item.classList.contains('_open')) {
		item.classList.remove('_open');
		collapse.toggle();
	} else {
		item.classList.add('_open');
		collapse.toggle();
	}
};
// -----------------------------------------------------------------------------
// * < {Side Bar Menu / Sub-Menu} >
const menuParents = document.querySelectorAll('.menu-page__parent');
for (let i = 0; i < menuParents.length; i++) {
	const menuParent = menuParents[i];
	menuParent.addEventListener('mouseenter', () => {
		menuParent.classList.add('_active');
	});
	menuParent.addEventListener('mouseleave', () => {
		menuParent.classList.remove('_active');
	});
}
// -----------------------------------------------------------------------------
// * < {Выбор товара в поиске} >
const searchSelect = document.querySelector('.search-page__title');
const checkboxCategories = document.querySelectorAll(
	'.categories-search__checkbox'
);

for (let i = 0; i < checkboxCategories.length; i++) {
	const checkboxCategory = checkboxCategories[i];
	checkboxCategory.addEventListener('change', () => {
		checkboxCategory.classList.toggle('_active');
		const checkboxActiveCategories = document.querySelectorAll(
			'.categories-search__checkbox._active'
		);
		if (checkboxActiveCategories.length > 0) {
			searchSelect.classList.add('_category');
			const searchPageSelected = searchSelect.querySelector(
				'.search-page__selected'
			);
			searchPageSelected.innerHTML =
				searchPageSelected.getAttribute('data-text') +
				' ' +
				checkboxActiveCategories.length;
		} else {
			searchSelect.classList.remove('_category');
		}
	});
}
// -----------------------------------------------------------------------------
