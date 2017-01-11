import React from 'react';
(function (doc, React) {
    "use strict";
    class PageManager {
        constructor(pageDir) {
            this.pageDir = pageDir ? pageDir : '';
            this.currentPage = 0;
            this.pages = this.initPages();
        }

        next() {
            if (this.currentPage < this.pages.length-1) {
                this.currentPage++;
            }
            return this.getPageUrl();
        }

        previous() {
            if (this.currentPage > 0) {
                this.currentPage--;
            }
            return this.getPageUrl();
        }

        getPageUrl(page) {
            return this.pageDir + this.pages[page ? page : this.currentPage];
        }

        getPageExtension(page) {
            let pageNo = page ? page : this.currentPage;
            let extPattern = /\.[0-9a-z]+$/;
            let extMatches = this.pages[pageNo].match(extPattern);
            let extension = '';
            if (extMatches) {
                extension = extMatches[0].substr(1);
            }
            return extension; 
        }

        initPages(){
            return  [
                'panel1.png',
                'page1.png',
                'page2.mp4',
                'page3.mp4',
                'page4.png',
                'page5.png',
                'page6.png'
            ]
        }
    }

    class DisplayControl {
        constructor(pageManager, panel, properties) {
            this.properties = properties;
            panel.style.position = 'relative';
            this.panel = panel;
            this.pageManager = pageManager;
            
            this.renderPage();
        }

        createImageDisplay(path) {
            let props = this.properties;
            let imageDisplay = doc.createElement('img');
            imageDisplay.style.display = 'block';
            imageDisplay.style.height = props.height;
            imageDisplay.style.width = props.width;
            imageDisplay.style.position = 'absolute';
            imageDisplay.style.top = '0';
            imageDisplay.style.left = '0';
            imageDisplay.src = path;

            let loadedPromise = new Promise(function (resolve) {
                imageDisplay.addEventListener("loaded", function () {resolve();}, false);
            });
            
            return {component: imageDisplay, loaded: loadedPromise};
        }

        createVideoDisplay(path) {
            let props = this.properties;
            let videoDisplay = doc.createElement('video');
            videoDisplay.style.display = 'block';
            videoDisplay.style.height = props.height;
            videoDisplay.style.width = props.width;
            videoDisplay.style.position = 'absolute';
            videoDisplay.style.top = '0';
            videoDisplay.style.left = '0';
            videoDisplay.loop = props.loopVideo ? props.loopVideo : true;
            videoDisplay.autoplay = props.autoplayVideo ? props.autoplayVideo : true;
            videoDisplay.src = path;

            let loadedPromise = new Promise(function (resolve) {
                videoDisplay.addEventListener("loadeddata", function () {resolve();}, false);
            });

            return {component: videoDisplay, loaded: loadedPromise};
        }

        renderPage() {
            let pageExt = this.pageManager.getPageExtension();
            let display;
            switch (pageExt) {
                case "png":
                    display = this.createImageDisplay(this.pageManager.getPageUrl());
                    break;
                case "mp4":
                    display = this.createVideoDisplay(this.pageManager.getPageUrl());
                    break;
                default:
                    alert("File type not supported: " + pageExt);
            }

            let oldDisplay = this.currentDisplay;
            this.currentDisplay = display;

            this.panel.appendChild(this.currentDisplay.component);

            this.currentDisplay.loaded.then( function () {
                if (oldDisplay) {
                    oldDisplay.component.remove();
                }
            });
        }

        nextPanel() {
            this.pageManager.next();
            this.renderPage();
        }

        prevPanel() {
            this.pageManager.previous();
            this.renderPage();
        }

    }

    
    let comicPanel = doc.getElementById("comicPanel");
    let prevButton = doc.getElementById("prevButton");
    let nextButton = doc.getElementById("nextButton");

    let dispProps = {
        loopVideo: true,
        autoplayVideo: true,
        height: '100%',
        width: '100%'
    };

    let displayControl = new DisplayControl(new PageManager('./pages/'), comicPanel, dispProps);
    

    comicPanel.addEventListener("click", function () {
        displayControl.nextPanel();
    }, false);

    prevButton.addEventListener("click", function () {
        displayControl.prevPanel();
    }, false);

    nextButton.addEventListener("click", function () {
        displayControl.nextPanel();
    }, false);

    doc.addEventListener("keyup", function (e) {
        let keycode = e.keyCode;
        if (keycode === 37) {
            displayControl.prevPanel();
        }
        if (keycode === 39) {
            displayControl.nextPanel();
        }
    }, false);


    
})(document, React);