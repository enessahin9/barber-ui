import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class TemplateService {
    private bodyClass: string = '';

    addBodyClass(cls: string): TemplateService {
        document.querySelector("body")?.classList.add(cls);
        return this;
    }

    removeBodyClass(cls: string): TemplateService {
        document.querySelector("body")?.classList.add(cls);
        return this;
    }

    getBodyClass(): string {
        return this.bodyClass;
    }
}