"use strict";

import './nav.less';

import PageManager from './PageManager.js';
import DisplayControl from './DisplayControl.js';
import Utils from './Utils.js';

(function (document, PageManager, DisplayControl, window) {

    init();

    function init() {

        let comicPanel = document.getElementById("comicPanel");

        let dispProps = {
            loopVideo: true,
            autoplayVideo: true,
            height: '100%',
            width: '100%'
        };

        let startPage = Utils.getPageFromUrl(window.location.href) || {chapter: 'prolog', page: 0};

        let displayControl = new DisplayControl(comicPanel, dispProps);
        let pageManager = new PageManager('./pages', startPage.chapter, startPage.page);

        pageManager.addRenderer(displayControl);

        comicPanel.addEventListener("click", function () {
            pageManager.next();
        }, false);

        initNavigation(pageManager);
        initChapterLinks();


    }


    function initNavigation(pageManager) {
        let prevButton = document.getElementById("prevButton");
        let nextButton = document.getElementById("nextButton");

        prevButton.addEventListener("click", function () {
            pageManager.previous();
        }, false);

        nextButton.addEventListener("click", function () {
            pageManager.next();
        }, false);

        document.addEventListener("keyup", function (e) {
            let keycode = e.keyCode;
            if (keycode === 37) {
                pageManager.previous();
            }
            if (keycode === 39) {
                pageManager.next();
            }
        }, false);

    }

    function initChapterLinks() {
        let chapterLinks = document.getElementById("chapters").getElementsByTagName("A");
        for (let i = 0; i < chapterLinks.length; i++) {
            chapterLinks[i].addEventListener("click", () => {
                window.location.reload();
            });
        }
    }

})(document, PageManager, DisplayControl, window);
