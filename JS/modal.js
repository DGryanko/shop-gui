       // Получаем нужные элементы
        const modal = document.getElementById("modal");
        const editBtn = document.getElementById("edit-btn1");
        const closeBtn = document.getElementsByClassName("close")[0];

        // При клике на кнопку открываем модальное окно
        editBtn.onclick = function () {
            modal.classList.add("show");
        }

        // При клике на крестик закрываем модальное окно
        closeBtn.onclick = function () {
            modal.classList.remove("show");
        }

        // При клике вне модального окна (на подложку) закрываем модальное окно
        window.onclick = function (event) {
            if (event.target == modal) {
                modal.classList.remove("show");
            }
        }
