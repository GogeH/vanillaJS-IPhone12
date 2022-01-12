'use strict';

const accordion = () => {
    const characteristicsListElem = document.querySelector('.js-characteristics-list');
    const characteristicsItemElems = document.querySelectorAll('.js-characteristics-item');

    characteristicsItemElems.forEach((elem) => {
        if (elem.children[1].classList.contains('active')) {

            elem.children[1].style.height = `${elem.children[1].scrollHeight}px`
        }
    });

    const open = (button, dropDown) => {
        closeAllDrops();
        dropDown.style.height = `${dropDown.scrollHeight}px`;
        button.classList.add('active');
        dropDown.classList.add('active');
    };

    const close = (button, dropDown) => {
        button.classList.remove('active');
        dropDown.classList.remove('active');
        dropDown.style.height = '';
    };

    const closeAllDrops = (button, dropDown) => {
        characteristicsItemElems.forEach((elem) => {
            if (elem.children[0] !== button && elem.children[1] !== dropDown) {
                close(elem.children[0], elem.children[1]);
            }
        });
    };

    characteristicsListElem.addEventListener('click', (event) => {
        const {target} = event;

        if (target.classList.contains('js-characteristics-title')) {
            const parent = target.closest('.js-characteristics-item');
            const description = parent.querySelector('.js-characteristics-description');
            description.classList.contains('active') ? close(target, description) : open(target, description);
        }
    });

    document.body.addEventListener('click', (event) => {
        const target = event.target;

        if (!target.closest('.js-characteristics-list')) {
            closeAllDrops();
        }
    });
};

export default accordion;