const burgerMenu = document.querySelector('.burger-menu');
        const menuList = document.querySelector('.burger-menu__list');
        const openItem = document.querySelector('.open');
        const bag = document.querySelector('.shopping_bag');
        const shifted = document.querySelector('.shifted');
        const menuItem = document.querySelector('.new_shop');
        const settingsItem = document.querySelector('.settings');

        const newShopItem = `<span class="create_new_shop">Create new shop</span>`;
        const settingsSpan = `<span class="open_settings">Settings</span>`;

        burgerMenu.addEventListener('mouseenter', () => {
            burgerMenu.style.width = "280px";
            openItem.style.visibility = 'visible';
            openItem.style.opacity = "1";
            bag.classList.add('shopping_bag--open')
            shifted.style.transform = "translateX(280px)";

            const newShop = document.querySelector('.create_new_shop');
            if (!newShop) {
                setTimeout(() => {
                    menuItem.insertAdjacentHTML('beforeend', newShopItem);
                    const createdShop = document.querySelector('.create_new_shop');
                    createdShop.style.opacity = "1";
                }, 300);
            }

            if (!settingsItem.querySelector('.open_settings')) {
                setTimeout(() => {
                    settingsItem.insertAdjacentHTML('beforeend', settingsSpan);
                }, 300);
            }
        });

        burgerMenu.addEventListener('mouseleave', () => {
            burgerMenu.style.width = "104px";
            openItem.style.visibility = 'hidden';
            openItem.style.opacity = "0";
            bag.classList.remove('shopping_bag--open')
            shifted.style.transform = "translateX(104px)"

            const newShop = document.querySelector('.create_new_shop');
            if (newShop) {
                newShop.style.opacity = "0";
                setTimeout(() => {
                    newShop.remove();
                }, 300);
            }

            const settingsSpan = document.querySelector('.settings .open_settings');
            if (settingsSpan) {
                settingsSpan.style.opacity = "0";
                setTimeout(() => {
                    settingsSpan.remove();
                }, 300);
            }
        });


        const settingsButton = document.querySelector('#settings');
        settingsButton.addEventListener('click', () => {
            // Обработка щелчка на элементе "Settings"
        });

        const newShopButton = document.querySelector('#new-shop');
        newShopButton.addEventListener('click', () => {
            // Обработка щелчка на элементе "Create new shop"
        });



        function createTableRow(shop) {
            const row = document.createElement('tr');
            const nameCell = document.createElement('td');
            const editCell = document.createElement('td');
            const walletCell = document.createElement('td');
            const depositCell = document.createElement('td');
            const actionsCell = document.createElement('td');

            nameCell.textContent = shop.name;
            walletCell.textContent = shop.wallet;

            const editBtn = document.createElement('button');
            editBtn.classList.add('edit-btn');
            editBtn.textContent = 'Edit';
            editCell.appendChild(editBtn);

            const depositBtn = document.createElement('button');
            depositBtn.classList.add('deposit-btn');
            depositBtn.textContent = 'Deposit';
            depositCell.appendChild(depositBtn);

            const withdrawBtn = document.createElement('button');
            withdrawBtn.classList.add('withdraw-btn');
            withdrawBtn.textContent = 'Withdraw';
            actionsCell.appendChild(withdrawBtn);

            const productsBtn = document.createElement('button');
            productsBtn.classList.add('products-btn');
            productsBtn.textContent = 'Products';
            actionsCell.appendChild(productsBtn);

            row.appendChild(nameCell);
            row.appendChild(editCell);
            row.appendChild(walletCell);
            row.appendChild(depositCell);
            row.appendChild(actionsCell);

            return row;
        }

        function loadShops() {
            const tableBody = document.getElementById('table-body');
            fetch('your-server-url')
                .then((response) => {
                    if (response.ok) {
                        return response.json();
                    } else {
                        throw new Error('Server response was not ok.');
                    }
                })
                .then((shops) => {
                    shops.forEach((shop) => {
                        const tableRow = createTableRow(shop);
                        tableBody.appendChild(tableRow);
                    });
                })
                .catch((error) => {
                    console.error('Error fetching shop data:', error);
                });
        }

        loadShops();