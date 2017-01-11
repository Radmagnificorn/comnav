export default class PageManager {
    constructor(pageDir) {
        this.pageDir = pageDir ? pageDir : '';
        this.currentPage = 0;
        this.pages = this.initPages();
    }

    addRenderer(displayRenderer) {
        this.renderer = displayRenderer;
        this.renderer.render(this.getPageUrl());
    }

    render() {
        if (this.renderer) {
            this.renderer.render(this.getPageUrl());
        }
    }

    next() {
        if (this.currentPage < this.pages.length-1) {
            this.currentPage++;
        }
        this.render();
        return this.getPageUrl();
    }

    previous() {
        if (this.currentPage > 0) {
            this.currentPage--;
        }
        this.render();
        return this.getPageUrl();
    }

    getPageUrl(page) {
        return this.pageDir + this.pages[page ? page : this.currentPage];
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
