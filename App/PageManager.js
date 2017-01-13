import ChapterLoader from './ChapterLoader.js';

export default class PageManager {
    constructor(baseDir, chapterUrl) {
        this.baseDir = baseDir;
        this.pageDir = chapterUrl ? chapterUrl : '';
        this.currentPage = 0;
        this.loadChapter(this.pageDir);
    }

    addRenderer(displayRenderer) {
        this.renderer = displayRenderer;
    }

    render() {
        if (this.renderer) {
            this.renderer.render(this.getPageUrl());
        }
    }

    next() {
        if (this.currentPage < this.pages.length-1) {
            this.currentPage++;
            this.render();
        } else {
            if (this.nextChapter) {
                this.loadChapter(this.nextChapter);
            }
        }
        return this.getPageUrl();
    }

    previous() {
        if (this.currentPage > 0) {
            this.currentPage--;
            this.render();
        } else {
            if (this.prevChapter) {
                this.loadChapter(this.prevChapter);
            }
        }
        return this.getPageUrl();
    }

    loadChapter(chapterUrl) {
        ChapterLoader.loadChapterManifest(this.baseDir + "/" + chapterUrl).then((manifest) => {
            this.pageDir = chapterUrl;
            this.nextChapter = manifest.nextChapter;
            this.prevChapter = manifest.prevChapter;
            this.pages = manifest.pages;
            this.currentPage = 0;
            this.render();
        });
    }

    getChapterPath() {
        return this.baseDir + "/" + this.pageDir ;
    }

    getPageUrl() {
        return this.getChapterPath() + "/" + this.pages[this.currentPage];
    }

}
